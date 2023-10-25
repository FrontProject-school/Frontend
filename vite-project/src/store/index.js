import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      username: "",
      token: "",
    };
  },
  getters: {
    isLogin(state) {
      return state.username !== "";
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUsername(state) {
      state.username = "";
    },
  },
});
