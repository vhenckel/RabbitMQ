const RabbitService = require('../service/rabbitmq')

class rabbitController {

  async store(req, res) {
    try {
      const {
        message,
        channel
      } = req.body
      const Rabbit = new RabbitService(channel)
      const rtmpReturn = await Rabbit.sendToQueue(message)
      console.log(rtmpReturn)
      return res.status(201).json(rtmpReturn)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}

module.exports = new rabbitController()