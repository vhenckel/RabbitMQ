const express = require('express')
const app = express()
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({
  extended: false
}))

const queue = require('./routes/queue')
app.use('/rabbit', queue)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Sender server is running at ${port}...`)
})

module.exports = app