const tmdbApi = require('../tmdbApi')

module.exports = {

	async searchMovies (req, res) {
		try {

			console.log(req.body)

			const { query, page } = req.body

			

			if(!query || query == '')
				throw new Error("Must specify a search term.")

			const data = await tmdbApi.searchMovie({
				query,
				page
			})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	}

}
