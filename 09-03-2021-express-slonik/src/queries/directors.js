const { sql } = require('slonik')

const getAllDirectors = async db => {
  try {
    return await db.query(sql`
      SELECT name FROM directors;
    `)
  } catch(error) {
    console.info('> error: ', error.message)
    return null
  }
}

module.exports = {
  getAllDirectors
}