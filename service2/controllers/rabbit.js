const RabbitService = require('../service/rabbitmq')

class rabbitController {

  async index(req, res) {
    try {
      const {
        channel
      } = req.params
      const Rabbit = new RabbitService(channel)
      const rtmpReturn = await Rabbit.pullFromTheQueue()
      if (!rtmpReturn) return res.status(204).send('No Content!')
      return res.status(200).json(rtmpReturn)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error)
    }
  }
}

module.exports = new rabbitController()