import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: null
  },
  mutations: {
    SET_AUTH(state, auth) {
      state.auth = auth;
    },
  },
  actions: {
    setAuth({ commit }, auth) {
      commit("SET_AUTH", auth);
    },
  },
  modules: {
  },
  getters: {
    isLoggedIn(state) {
      return !!state.auth;
    },
    currentUser(state) {
      if (!state.auth) return "-- no user --";
      return state.auth.user;
    }
  }
});
