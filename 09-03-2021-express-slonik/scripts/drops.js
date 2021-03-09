const db = require('../config/db')
const { sql } = require('slonik')

const dropMovies = async () => {
  try {
    await db.query(sql`
      DROP TABLE movies;
    `)
  } catch(error) {
    console.info('> error dropping movies data: ', error.message)
  }
}

const dropDirectors = async () => {
  try {
    await db.query(sql`
      DROP TABLE directors;
    `)
  } catch(error) {
    console.info('> error dropping directors data: ', error.message)
  }
}

(async () => {
  console.info('> dropping data...')
  await dropMovies()
  await dropDirectors()
  console.info('> done!')
})()