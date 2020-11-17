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

  async loadGenres({ commit }, genreIds) {
    
      let genres=[]

      if(state.genres.length <=0){
        let result = await this._vm.$genreService.getGenres()
        genres = result.genres
        commit('LOAD_GENRES', genres)
      }
      else {
        genres = state.genres
      }
    
    genres = genres.filter(genre => genreIds.indexOf(genre.id) > -1 ).map(genre => ` ${genre.name}`)

    return genres.toString()
 
  }
}

const getters = {
}

export default {
  state,
  mutations,
  actions,
  getters
}
