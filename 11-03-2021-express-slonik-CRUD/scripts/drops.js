const db = require('../config/db');

const { deleteClientsTable } = require('./clients');
const { deleteVehiclesTable } = require('./vehicles');
const { deleteRentsTable } = require('./rents');

(async () => {
  try {
    await db.transaction(async tx => {
      await deleteRentsTable(tx)();
      await deleteClientsTable(tx)();
      await deleteVehiclesTable(tx)();
    });
  } catch(error) {
    console.info('> error: ', error);
  };
})();