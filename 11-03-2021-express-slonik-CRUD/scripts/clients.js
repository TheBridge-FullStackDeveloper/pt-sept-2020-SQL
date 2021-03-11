const { sql } = require('slonik')
const faker = require('faker')

const createClientTable = db => async () => {
  await db.query(sql`
    CREATE TABLE IF NOT EXISTS clients (
      id TEXT PRIMARY KEY,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      full_name TEXT NOT NULL,
      job_title TEXT NOT NULL,
      job_area TEXT NOT NULL,
      job_type TEXT NOT NULL,
      phone_number TEXT NOT NULL,
      credit_card_number TEXT NOT NULL,
      iban TEXT NOT NULL,
      last_rent DATE,
      zip_code TEXT,
      country TEXT NOT NULL
    );
  `)

  console.info('> clients table created!')
}

const insertClients = db => async (rowsCount, seed) => {
  const entries = Array.from({ length: rowsCount }, (_, i) => i)

  for await(let entry of entries) {
    seed && faker.seed(seed + entry)

    const { random, name, phone, finance, date, address } = faker
    const id = random.uuid()
    const fullName = name.findName()
    const [firstName, lastName] = fullName.split(' ')
    const jobTitle = name.jobTitle()
    const jobArea = name.jobArea()
    const jobType = name.jobType()
    const phoneNumber = phone.phoneNumberFormat()
    const creditCardNumber = finance.creditCardNumber()
    const iban = finance.iban()
    const lastRent = Math.random() > .5 ? date.past().toUTCString() : null
    const zipCode = address.zipCode()
    const country = address.country()
  
    await db.query(sql`
      INSERT INTO clients (
        id, first_name, last_name, full_name,
        job_title, job_area, job_type,
        phone_number, credit_card_number, iban, last_rent,
        zip_code, country
      ) VALUES (
        ${id}, ${firstName}, ${lastName}, ${fullName},
        ${jobTitle}, ${jobArea}, ${jobType},
        ${phoneNumber}, ${creditCardNumber}, ${iban}, ${lastRent},
        ${zipCode}, ${country}
      ) ON CONFLICT DO NOTHING;
    `)
  }

  console.info('> clients data inserted!')
}

const deleteClientsTable = db => async () => {
  await db.query(sql`
    DROP TABLE IF EXISTS clients;
  `)

  console.info('> clients table deleted!')
}

module.exports = {
  createClientTable,
  insertClients,
  deleteClientsTable
}