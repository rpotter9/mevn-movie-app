const { MovieDb } = require('moviedb-promise')
const config = require('./config')
const moviedb = new MovieDb(config.tmdbApiKey)