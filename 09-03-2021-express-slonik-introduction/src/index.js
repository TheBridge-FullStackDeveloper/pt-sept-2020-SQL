const express = require('express')
const db = require('./config/db')
const app = express()

app.use('/', require('./services')(db))

app.use((_, __, next) => {
  next(new Error('path not found'))
})

app.use((error, _, res, __) => {
  res.status(400).json({
    success: false,
    message: error.message
  })
})

app.listen(3000, () => {
  console.info('> listening at http//:localhost:3000')
})