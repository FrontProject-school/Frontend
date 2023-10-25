import { createStore } from "vuex";

export default createStore({
  state: {
    token: null,
  },
  getters: {
    // login check
    isLogin(state) {
      return state.token == null ? false : true;
    },
  },
  mutations: {
    // token 값 저장
    // commit 으로 부를 수 있다.
    setToken(state, _token) {
      state.token = _token;
    },
  },
  actions: {
    // dispatch 로 부를 수 있다.
    setToken: ({ commit }, _token) => {
      commit("setToken", _token);
    },
  },
});
