const state = {
  tasks: [],
  genres: []
}

const mutations = {
  LOAD_GENRES(state, genres) {
    state.genres = genres
  }
}

const actions = {
  async loadGenres({ commit }) {
    const genres = await this.$genreService.getGenres()
    commit('LOAD_GENRES', genres)
  }
}

const getters = {
  getGenreById: state => id => {
    return state.genres.find(g => g.id == id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
