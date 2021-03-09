const { sql } = require('slonik')

const getAllUsers = async db => {
  try {
    // return await db.query(sql`
    //   SELECT name, dni, age FROM users;
    // `)
    return await db.transaction(async tx => {
      await tx.query()
    })
  } catch(error) {
    console.info('> something went wrong: ', error.message)
    return null
  }
}

module.exports = {
  getAllUsers
}