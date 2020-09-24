const router = require('express').Router()
const searchController = require('../controllers/search')


router
	.post('/movie', searchController.searchMovies)
    

module.exports = {
	router,
	base: '/search'
}   
