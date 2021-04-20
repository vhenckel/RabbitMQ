const express = require('express')
const router = express.Router()
const rabbitController = require('../controllers/rabbit')

router.get('/:channel', rabbitController.index)

module.exports = router