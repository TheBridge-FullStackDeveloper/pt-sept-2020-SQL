const db = require('../config/db')
const { sql } = require('slonik')

const createDirectorsTable = async () => {
  try {
    await db.query(sql`
      CREATE TABLE IF NOT EXISTS directors (
        id INTEGER PRIMARY KEY NOT NULL,
        query_name TEXT NOT NULL,
        name TEXT NOT NULL,
        nickname TEXT NOT NULL,
        pic TEXT NOT NULL,
        nationality TEXT NOT NULL,
        roles TEXT NOT NULL
      )
    `)

    console.info('> directors table created!')
  } catch(error) {
    console.info('> error creating directors table: ', error.message)
  }
}

const createMoviesTable = async () => {
  try {
    await db.query(sql`
      CREATE TABLE IF NOT EXISTS movies (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT,
        us_gross BIGINT,
        worldwide_gross BIGINT,
        us_dvd_sales BIGINT,
        production_budget BIGINT,
        release_date DATE,
        mpaa_rating TEXT,
        running_time_min INTEGER,
        distributor TEXT,
        source TEXT,
        major_genre TEXT,
        creative_type TEXT,
        rotten_tomatoes_rating INTEGER,
        imdb_rating FLOAT,
        imdb_votes INTEGER,
        director INTEGER REFERENCES directors
      );
    `)

    console.info('> movies table created!')
  } catch(error) {
    console.info('> error creating movies table: ', error.message)
  }
}

(async () => {
  await createDirectorsTable()
  await createMoviesTable()
})()
