const tmdbApi = require('../tmdbApi')

module.exports = {
    async getPopular (req, res) {
		try {
			

    		const data = await tmdbApi.moviePopular()

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

    },
    
    async getById (req, res) {
		try {
			const { id }  = req.params

            if(!id)
                throw new Error("Must specify a Movie ID")

    		const data = await tmdbApi.movieInfo({id})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	},
	async getMovieCredits (req, res) {
		try {
			const { id }  = req.params
			
            if(!id)
                throw new Error("Must specify a Movie ID")

    		const data = await tmdbApi.movieCredits({id})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	},
	async getMovieVideos (req, res) {
		try {
			const { id }  = req.params
			
            if(!id)
                throw new Error("Must specify a Movie ID")

    		const data = await tmdbApi.movieVideos({id})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	},
	async getMovieImages (req, res) {
		try {
			const { id }  = req.params
			
            if(!id)
                throw new Error("Must specify a Movie ID")

    		const data = await tmdbApi.movieImages({id})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	},
	async getMovieRecommendations (req, res) {
		try {
			const { id }  = req.params
			
            if(!id)
                throw new Error("Must specify a Movie ID")

    		const data = await tmdbApi.movieRecommendations({id})

			return res.status(200).send(data)
		} catch (error) {
			return res.status(500).send(error.message)
		}
        

	}




}
