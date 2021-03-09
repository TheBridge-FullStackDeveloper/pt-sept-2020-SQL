const router = require('express').Router()

module.exports = db => {
  router.get('/test', require('./get-test')(db))

  return router
}