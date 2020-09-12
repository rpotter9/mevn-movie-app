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
}
