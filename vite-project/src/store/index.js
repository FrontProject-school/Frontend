import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      user: null,
      token: "",
    };
  },
  getters: {
    isLogin(state) {
      return state.username !== "", state.token !== "";
    },
  },
  mutations: {
    setUser(state, user) {
      state.username = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    loginUser({ commit }, { token, user }) {
      commit("setToken", token);
      commit("setUser", user);
    },
    logoutUser({ commit }) {
      commit("setToken", null);
      commit("setUser", null);
    },
  },
});
