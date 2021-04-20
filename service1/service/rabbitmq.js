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
        exclusive: false,
        durable: true
      })
    } catch (error) {
      console.log('RabbitMQ: ', error.message)
    }
  }

  async sendToQueue(attributes) {
    try {
      await this.connect()
      const dataToQueue = Buffer.from(JSON.stringify(attributes))
      if (!this.channel) throw new Error('Channel not found.')
      await this.channel.sendToQueue(this.queue, dataToQueue)
      await this.channel.close()
      await this.connection.close()
      return true
    } catch (error) {
      console.log('RabbitMQ: ', error.message)
      return false
    }
  }
}


module.exports = Rabbit