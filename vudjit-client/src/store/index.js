import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged_in: false,
    total_accts: 0,
  },
  mutations: {
    set_logged_in(state, status) {
      state.logged_in = status;
    }
  },
  getters: {
    is_logged_in: state => {
      return state.logged_in;
    },
    get_jwt_token: function() {
      var jwt = localStorage.getItem('jwt');
      if (jwt) { return jwt; }
      else { return null; }
    },
    total_accts: state => {
      return state.total_accts;
    },
    is_account_setup: function () {
      var is_setup = localStorage.getItem('acct_setup');
      return is_setup;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
