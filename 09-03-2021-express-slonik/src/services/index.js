const router = require('express').Router()

module.exports = db => {
  router.use('/directors', require('./directors')(db))

  return router
}