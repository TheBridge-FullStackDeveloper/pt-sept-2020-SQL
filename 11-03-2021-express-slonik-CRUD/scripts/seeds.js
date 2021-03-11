const db = require('../config/db');

const { createClientTable, insertClients } = require('./clients');
const { createVehicleTable, insertVehicles } = require('./vehicles');
const { createRentsTable, insertRents } = require('./rents');

const DEFAULT_ROWS = 5;
const SEED = 123;

(async () => {
  const { CLIENTS_ROWS, VEHICLES_ROWS, RENTS_ROWS } = process.env;

  const [_, __, flag] = process.argv;

  const argsOpts = {
    'randomness': SEED
  }

  try {
    await db.transaction(async tx => {
      await createClientTable(tx)();
      await insertClients(tx)(
        CLIENTS_ROWS || DEFAULT_ROWS,
        argsOpts[flag]
      );

      await createVehicleTable(tx)();
      await insertVehicles(tx)(
        VEHICLES_ROWS || DEFAULT_ROWS,
        argsOpts[flag]
      );

      await createRentsTable(tx)();
      await insertRents(tx)(RENTS_ROWS || DEFAULT_ROWS);
    });
  } catch(error) {
    console.info('> error: ', error);
  };
})();
