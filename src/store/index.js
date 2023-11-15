import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './user'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    app
  },
  getters
})
