require('dotenv').config()
const slonik = require('slonik')

const db = slonik.createPool(process.env.SLONIK_URL)

module.exports = db