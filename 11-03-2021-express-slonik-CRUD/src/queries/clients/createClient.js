const faker = require('faker');
const { sql } = require('slonik');

const getClientById = require('./getClientById');

const createClient = async (db, newClient) => {
  const fullName = `${newClient.first_name} ${newClient.last_name}`;
  const newId = faker.random.uuid();

  const transactionResult = db.transaction(async (tx) => {
    await tx.query(sql`
      INSERT INTO clients (id, first_name, last_name, full_name, job_title, job_area, job_type, phone_number, credit_card_number, iban, country) 
      VALUES (${newId}, ${newClient.first_name}, ${newClient.last_name}, ${fullName}, ${newClient.job_title}, ${newClient.job_area}, ${newClient.job_type}, ${newClient.phone_number}, ${newClient.credit_card_number}, ${newClient.iban}, ${newClient.country})
    `);

    // Como he creado las queries como una query simple y no una transacción,
    // puedo enviar el tx como db para hacer la query de SELECT y encadenar mis helpers
    return getClientById(tx, newId);
  });

  return transactionResult;
};

module.exports = createClient;
