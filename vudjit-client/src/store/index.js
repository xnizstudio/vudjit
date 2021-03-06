import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({
    logged_in: state.logged_in,
    total_accts: state.total_accts,
    jwt_token: state.jwt_token,
    is_account_setup: state.is_account_setup,
    setup_step: state.setup_step
  }),
})

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    logged_in: false,
    total_accts: 0,
    jwt_token: '',
    is_account_setup: false,
    setup_step: 0
  },

  mutations: {
    set_logged_in(state, status) {
      state.logged_in = status;
    },
    set_jwt_token(state, token) {
      state.jwt_token = token;
    },
    set_total_accts(state, total_accts) {
      state.total_accts = total_accts;
    },
    set_acct_setup(state, is_setup) {
      state.is_account_setup = is_setup;
    },
    set_setup_step(state, step) {
      state.setup_step = step;
    }
  },

  getters: {
    is_logged_in: state => {
      return state.logged_in;
    },
    get_jwt_token: state => {
      return state.jwt_token;
    },
    get_total_accts: state => {
      return state.total_accts;
    },
    get_setup_step: state => {
      return state.setup_step;
    },
    is_account_setup: state => {
      return state.is_account_setup;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
