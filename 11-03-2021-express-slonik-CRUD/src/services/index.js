const router = require('express').Router();

const clientsRouter = require('./clients');

module.exports = (db) => {
  router.use('/clients', clientsRouter(db));

  return router;
};
