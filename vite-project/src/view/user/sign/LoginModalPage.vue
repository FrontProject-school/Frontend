<template>
  <div class="relative">
    <div
      class="bg-cover bg-no-repeat bg-center h-screen brightness-50"
      style="
        background-image: url('https://www.yju.ac.kr/sites/kr/atchmnfl_mngr/imageSlide/141/temp_1651124562424100.jpg');
        background-size: 100% 100%;
      "
    ></div>
    <div
      v-if="showModal || showLogin"
      class="absolute inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white w-1/2 p-6 rounded shadow-lg">
        <h2 class="text-3xl mb-4">Login</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-6">
            <label for="username" class="block mb-2 text-gray-700"
              >Username</label
            >
            <input
              type="text"
              id="username"
              v-model="username"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="사용자 이름을 입력하세요"
            />
          </div>
          <div class="mb-6">
            <label for="password" class="block mb-2 text-gray-700"
              >Password</label
            >
            <input
              type="password"
              id="password"
              v-model="password"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div class="flex justify-between mb-4">
            <router-link
              to="/signup"
              class="text-green-700 hover:underline"
              @click="closeModalAndNavigateToLink('/signup')"
              >Sign Up</router-link
            >
            <button
              type="submit"
              class="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
              @click="generateData()"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      v-if="showModalErrorMessage"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white w-1/2 p-6 rounded shadow-lg">
        <h2 class="text-3xl mb-4">알림</h2>
        <p class="text-red-600">아이디와 비밀번호를 모두 입력해주세요.</p>
        <button
          @click="closeModalErrorMessage"
          class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
        >
          확인
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { loginPost } from "../../../api/login.js";

export default {
  data() {
    return {
      showModal: false,
      showModalErrorMessage: false,
      username: "",
      password: "",
      showLogin: false,
    };
  },

  methods: {
    generateData() {
      loginPost(this.username, this.password)
        .then(async (response) => {
          console.log(response);
          const token = response.token;
          const user = response.user;
          await this.$store.dispatch("loginUser", { token, user }); // loginUser 액션 호출
          // this.$store.commit("setToken", response.token); // 토큰
          // this.$store.commit("setUsername", response.name); // 이름
        })

        .catch((error) => {
          console.error(error);
        });
    },

    closeModalAndNavigateToLink(link) {
      this.showModal = false;
      this.$router.push(link);
    },

    submitForm() {
      if (!this.username || !this.password) {
        this.showModalErrorMessage = true;
        return;
      }

      console.log("아이디:", this.username);
      console.log("비밀번호:", this.password);

      this.$router.push("/");
    },
    redirectToHome() {
      this.$router.push("/");
    },
    closeModalErrorMessage() {
      this.showModalErrorMessage = false;
    },
  },
  mounted() {
    this.showLogin = true;
  },
};
</script>
