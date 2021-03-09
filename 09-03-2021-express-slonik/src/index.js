const express = require('express')
// Required db config to pass through all middlewares
const db = require('../config/db')
const app = express()

// Don't forget middleware to parse json body!

// Main route passing db configuration as argument because THAT 'require' returns a function
app.use('/', require('./services')(db))

// Middleware in case no routes matching
app.use((_, __, next) => {
  next(new Error('path not found'))
})

// Middleware to manage errors
app.use((error, _, res, __) => {
  res.status(400).json({
    status: false,
    message: error.message
  })
})

app.listen(3000, () => {
  console.info('> listening at http://localhost:3000')
})