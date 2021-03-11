require('dotenv').config()
const slonik = require('slonik')

module.exports = slonik.createPool(process.env.SLONIK_URL)