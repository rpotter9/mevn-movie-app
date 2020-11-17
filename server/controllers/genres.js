const tmdbApi = require('../tmdbApi')

module.exports = {

    async getMovieList (req, res) {
		try {
		
    		const data = await tmdbApi.genreMovieList()

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

    }

}
