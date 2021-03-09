const router = require('express').Router()

module.exports = (db) => {
  
  router.get('/test', require('./test')(db))

  return router
}