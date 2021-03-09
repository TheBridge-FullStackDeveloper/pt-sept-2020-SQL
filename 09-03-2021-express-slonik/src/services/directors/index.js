const router = require('express').Router()

module.exports = db => {
  router.get('/', require('./get-all-directors')(db))

  return router
}