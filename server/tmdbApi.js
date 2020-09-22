const { MovieDb } = require('moviedb-promise')
const config = require('./config')

module.exports = new MovieDb(config.tmdbApiKey)
