const router = require('express').Router()

module.exports = (db) => {
  router.use('/books', require('./books')(db))
  router.use('/users', require('./users')(db))

  return router
}