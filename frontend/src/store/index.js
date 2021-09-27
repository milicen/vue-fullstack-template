import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
    },
    logout(state) {
      state.user = null
      state.token = null
      router.push('/')
    }
  },
  actions: {},
  getters: {
    isLoggedIn(state) {
      return !!state.token
    },
    getUserId(state) {
      return state.user ? state.user.id : null
    },
    getUsername(state) {
      return state.user ? state.user.username : 'guest'
    },
    getToken(state) {
      return state.token
    }
  }
})
