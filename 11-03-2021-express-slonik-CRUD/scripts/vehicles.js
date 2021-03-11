const { sql } = require('slonik')
const faker = require('faker')

const createVehicleTable = db => async () => {
  await db.query(sql`
    CREATE TABLE IF NOT EXISTS vehicles (
      vin TEXT PRIMARY KEY,
      vehicle TEXT NOT NULL,
      manufacturer TEXT NOT NULL,
      model TEXT NOT NULL,
      type TEXT NOT NULL,
      fuel TEXT NOT NULL,
      color TEXT NOT NULL,
      license_plate TEXT NOT NULL,
      stock SMALLINT CHECK (stock >= 0),
      weekle_price MONEY NOT NULL
    );
  `)

  console.info('> vehicles table created!')
}

const insertVehicles = db => async (rowsCount, seed) => {
  const entries = Array.from({ length: rowsCount }, (_, i) => i)

  for await(let entry of entries) {
    seed && faker.seed(seed + entry)

    const { vehicle: v, finance } = faker
    const vehicle = v.vehicle()
    const manufacturer = v.manufacturer()
    const model = v.model()
    const type = v.type()
    const fuel = v.fuel()
    const vin = v.vin()
    const color = v.color()
    const licensePlate = v.vrm()
    const stock = ~~(Math.random() * 15)
    const weeklyPrice = finance.amount()
  
    await db.query(sql`
      INSERT INTO vehicles (
        vin, vehicle, manufacturer, model, type, fuel,
        color, license_plate, stock, weekle_price
      ) VALUES (
        ${vin}, ${vehicle}, ${manufacturer}, ${model}, ${type}, ${fuel},
        ${color}, ${licensePlate}, ${stock}, ${weeklyPrice}
      ) ON CONFLICT DO NOTHING;
    `)
  }

  console.info('> vehicles inserted!')
}

const deleteVehiclesTable = db => async () => {
  await db.query(sql`
    DROP TABLE IF EXISTS vehicles;
  `)

  console.info('> vehicles table deleted!')
}

module.exports = {
  createVehicleTable,
  insertVehicles,
  deleteVehiclesTable
}