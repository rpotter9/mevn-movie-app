import httpClient from './api.service'

export class MovieService {
  async getPopularMovies() {
    const res = await httpClient.get('/movies')
    return res.data
  }

  async getMovieDetails(id) {
    const res = await httpClient.get(`/movies/${id}`)
    return res.data
  }

  async getMovieCredits(id) {
    const res = await httpClient.get(`/movies/${id}/credits`)
    return res.data
  }

  async getMovieTrailer(id) {
    const res = await httpClient.get(`/movies/${id}/videos`)
    return res.data.results
  }

  async getMovieImages(id) {
    const res = await httpClient.get(`/movies/${id}/images`)
    return res.data.backdrops
  }

}
