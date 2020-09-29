const router = require('express').Router()
const moviesController = require('../controllers/movies')

/** Matches only to numbers
 * 
 * Route example: /movies/123
 */
const idRegex = '/:id([0-9]+)'

router
	.get('/popular', moviesController.getPopular)
	.get(idRegex, moviesController.getById)
	.get(`${idRegex}/credits`, moviesController.getMovieCredits)
	.get(`${idRegex}/videos`, moviesController.getMovieVideos)
	.get(`${idRegex}/images`, moviesController.getMovieImages)
	.get(`${idRegex}/recommendations`, moviesController.getMovieRecommendations)
	.get('/nowplaying', moviesController.getMovieNowPlaying)
    
module.exports = {
	router,
	base: '/movies'
}   
