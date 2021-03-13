const { sql } = require('slonik');

const getClientById = async (db, id) => {
  const results = await db.query(
    sql`SELECT first_name, last_name, full_name, job_title, job_area, job_type, last_rent, zip_code, country
      FROM clients
      WHERE id = ${id}`
  );

  return results.rows[0];

  return transactionResult;
};

module.exports = getClientById;
