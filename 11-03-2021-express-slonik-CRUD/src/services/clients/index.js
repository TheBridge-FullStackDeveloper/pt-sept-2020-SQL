const router = require('express').Router();

const getClientById = require('../../queries/clients/getClientById');
const createClient = require('../../queries/clients/createClient');

module.exports = (db) => {
  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const client = await getClientById(db, id);

    res.status(200).json({ data: client });
  });

  router.post('/', async (req, res, next) => {
    const newClient = await createClient(db, req.body);
    res.status(201).json({ data: newClient });
  });

  return router;
};
