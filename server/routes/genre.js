const router = require('express').Router()
const genresController = require('../controllers/genres')


router
	.get('/', genresController.getMovieList)
    
module.exports = {
	router,
	base: '/genres'
}   
