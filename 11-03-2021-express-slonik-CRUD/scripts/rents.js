const { sql } = require('slonik')

const createRentsTable = db => async () => {
  await db.query(sql`
    CREATE TABLE IF NOT EXISTS rents (
      client_id TEXT REFERENCES clients
        ON UPDATE CASCADE
        ON DELETE CASCADE,
      vehicle_vin TEXT REFERENCES vehicles
        ON UPDATE CASCADE
        ON DELETE CASCADE,
      PRIMARY KEY (client_id, vehicle_vin)
    );
  `)

  console.info('> rents table created!')
}

const insertRents = db => async rowsCount => {
  const entries = Array.from({ length: rowsCount })

  for await(let _ of entries) {
    const vehicle = await db.maybeOne(sql`
      SELECT vin FROM vehicles
      ORDER BY RANDOM()
      LIMIT 1;
    `)
  
    const client = await db.maybeOne(sql`
      SELECT id FROM clients
      ORDER BY RANDOM()
      LIMIT 1;
    `)
  
    await db.query(sql`
      INSERT INTO rents (
        client_id, vehicle_vin
      ) VALUES (
        ${client.id}, ${vehicle.vin}
      ) ON CONFLICT DO NOTHING;
    `)
  }

  console.info('> rents inserted!')
}

const deleteRentsTable = db => async () => {
  await db.query(sql`
    DROP TABLE IF EXISTS rents;
  `)

  console.info('> rents table deleted!')
}

module.exports = {
  createRentsTable,
  insertRents,
  deleteRentsTable
}