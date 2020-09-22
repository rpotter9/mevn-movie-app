const tmdbApi = require('./tmdbApi')

;(async() => {
    const res = await tmdbApi.searchMovie({
        query: 'avengers',
        page: 2
    })

    console.log(res)
})()