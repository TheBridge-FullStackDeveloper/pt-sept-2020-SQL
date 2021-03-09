const db = require('../config/db')
const { sql } = require('slonik')

const directors = require('../jsons/directors.json')
const movies = require('../jsons/movies.json')

const insertDirectorsData = async () => {
  try {
    await db.transaction(async tx => {
      for await(let director of directors) {
        const { id, query_name, name, nickname, pic, nationality, roles } = director
        await tx.query(sql`
          INSERT INTO directors (
            id, query_name, name, nickname,
            pic, nationality, roles
          ) VALUES (
            ${id}, ${query_name}, ${name}, ${nickname},
            ${pic}, ${nationality}, ${roles}
          ) ON CONFLICT DO NOTHING;
        `)
      }
    })

    console.info('> directors created!')
  } catch(error) {
    console.info('> error inserting directors data: ', error.message)
  }
}

const insertMoviesData = async () => {
  try {
    await db.transaction(async tx => {
      for await(let movie of movies) {
        const {
          id, title, us_gross, worldwide_gross, us_dvd_sales,
          production_budget, release_date, mpaa_rating, running_time_min,
          distributor, source, major_genre, creative_type, director,
          rotten_tomatoes_rating, imdb_rating, imdb_votes
        } = movie
        await tx.query(sql`
          INSERT INTO movies (
            id, title, us_gross, worldwide_gross, us_dvd_sales,
            production_budget, release_date, mpaa_rating, running_time_min,
            distributor, source, major_genre, creative_type, director,
            rotten_tomatoes_rating, imdb_rating, imdb_votes
          ) VALUES (
            ${id}, ${title}, ${us_gross}, ${worldwide_gross}, ${us_dvd_sales},
            ${production_budget}, ${release_date}, ${mpaa_rating}, ${running_time_min},
            ${distributor}, ${source}, ${major_genre}, ${creative_type}, ${director},
            ${rotten_tomatoes_rating}, ${imdb_rating}, ${imdb_votes}
          ) ON CONFLICT DO NOTHING;
        `)
      }
    })

    console.info('> movies created!')
  } catch(error) {
    console.info('> error inserting movies data: ', error.message)
  }
}

(async () => {
  console.info('> inserting data...')
  await insertDirectorsData()
  await insertMoviesData()
})()