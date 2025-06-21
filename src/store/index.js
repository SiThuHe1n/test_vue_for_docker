import { createStore } from 'vuex'

export default createStore({
  state: {
    is_auth: false,
    is_loading: true,
    // api_url: "http://127.0.0.1:8000/api/",

    api_url: "https://master.215xbet.com/api/",
    authToken:localStorage.getItem('authToken'),
    


  },
  getters: {
  },
  mutations: {
    setAuthToken(state, token) {
      state.authToken = token;
    },
  },
  actions: {
   
  },
  modules: {
  }
})
