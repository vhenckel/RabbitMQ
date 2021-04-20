const amqp = require('amqplib')

class Rabbit {

  constructor(queue) {
    this.queue = queue
    this.connection = false
    this.channel = false
  }

  async connect() {
    try {
      const amqpServer = process.env.RABBITMQ_URL
      this.connection = await amqp.connect(amqpServer)
      this.channel = await this.connection.createChannel()
      await this.channel.assertQueue(this.queue, {
        exclusive: false
      })
    } catch (error) {
      console.log('RabbitMQ: ', error.message)
    }
  }

  async pullFromTheQueue() {
    try {
      await this.connect()
      if (!this.channel) throw new Error('Channel not found.')
      const data = []
      await this.channel.consume(this.queue, (msg) => {
        data.push(JSON.parse(msg.content.toString()))
        this.channel.ack(msg)
      })
      await this.channel.close()
      await this.connection.close()
      if (!data || data.length < 1) return false
      return data
    } catch (error) {
      console.log('RabbitMQ: ', error.message)
      return false
    }
  }
}


module.exports = Rabbit