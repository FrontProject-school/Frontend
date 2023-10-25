import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";

import axios from "axios";

const app = createApp(App);
app.use(router);
app.use(store);

// 다른 컴포넌트에서는 import 없이 this.$axios로 사용가능
app.config.globalProperties.$axios = axios;
axios.defaults.baseURL = "http://localhost:8000";

app.mount("#app");
