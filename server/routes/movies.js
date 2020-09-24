const router = require('express').Router()
const moviesController = require('../controllers/movies')


router
    .get('/:id', moviesController.getById)
    .get('/popular', moviesController.getPopular)
	// .get('/:id/credits', moviesController.getMovieCredits)
	// .get('/:id/videos', moviesController.getMovieVideos)
	// .get('/:id/images', moviesController.getMovieImages)
	// .get('/:id/recommendations', moviesController.getMovieRecommendations)
    

module.exports = {
	router,
	base: '/movies'
}   
