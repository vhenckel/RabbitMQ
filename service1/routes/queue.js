const express = require('express')
const router = express.Router()
const rabbitController = require('../controllers/rabbit')

router.post('/', rabbitController.store)

module.exports = router