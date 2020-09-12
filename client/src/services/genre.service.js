import httpClient from './api.service'

export class GenreService {
  async getGenres() {
    const res = await httpClient.get('/genres')
    return res.data
  }
}
