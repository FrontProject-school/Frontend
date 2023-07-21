
   <template>
    <div class="bg-cover bg-no-repeat bg-center h-screen  brightness-50" style="background-image: url('https://www.yju.ac.kr/sites/kr/atchmnfl_mngr/imageSlide/141/temp_1651124562424100.jpg');background-size: 100% 100%;"></div>
      <div v-if="showModal || showLogin" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white w-1/2 p-6 rounded shadow-lg">
          <h2 class="text-3xl mb-4">Login</h2>
            <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label for="username" class="block mb-2 text-gray-700">Username</label>
              <input type="text" id="username" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="사용자 이름을 입력하세요">
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-gray-700">Password</label>
              <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="비밀번호를 입력하세요">
            </div>
            <button type="submit" class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              <router-link to="/" v-if="username && password">Login</router-link>
              <span v-else>Login</span>
            </button>
  
            <a href="#" class="text-green-600 hover:underline" @click="redirectToHome">비밀번호를 잊으셨나요?</a>
  
            <div class="flex justify-end -mt-8">
              <router-link to="/signup" class="text-gray-400 hover:underline  ">Sign Up</router-link>
            </div>
          </form>
        </div>
      </div>
  
      <!-- 입력값을 둘 다 입력하지 않았을 경우에만 모달 창을 표시합니다 -->
      <div v-if="showModalErrorMessage" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white w-1/2 p-6 rounded shadow-lg">
          <h2 class="text-3xl mb-4">알림</h2>
          <p class="text-red-600">아이디와 비밀번호를 모두 입력해주세요.</p>
          <button @click="closeModalErrorMessage" class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4">확인</button>
        </div>
      </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        showModalErrorMessage: false,
        username: "",
        password: "",
        showLogin: false
      };
    },
    methods: {
      submitForm() {
        if (!this.username || !this.password) {
          this.showModalErrorMessage = true;
          return;
        }
  
        console.log("아이디:", this.username);
        console.log("비밀번호:", this.password);
  
        this.$router.push('/');
      },
      redirectToHome() {
        this.$router.push('/');
      },
      closeModalErrorMessage() {
        this.showModalErrorMessage = false;
      }
    },
    mounted() {
      this.showLogin = true;
    }
  };
  </script>
  