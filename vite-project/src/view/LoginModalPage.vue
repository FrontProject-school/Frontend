 <template>
    <div>
      <div
        class="bg-cover bg-no-repeat bg-center h-screen brightness-50"
        style="background-image: url('https://www.yju.ac.kr/sites/kr/atchmnfl_mngr/imageSlide/141/temp_1651124562424100.jpg');background-size: 100% 100%;"
      ></div>
      <div v-if="showModal || showLogin" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white w-1/2 p-6 rounded shadow-lg">
          <h2 class="text-3xl mb-4">Login</h2>
          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label for="username" class="block mb-2 text-gray-700">Username</label>
              <input
                type="text"
                id="username"
                v-model="username"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="사용자 이름을 입력하세요"
              >
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="비밀번호를 입력하세요"
              >
            </div>
            <!-- <button
              type="submit"
              class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              <router-link to="/" v-if="username && password">Login</router-link>
              <span v-else>Login</span>
            </button> -->
  
            <!-- <a href="#" class="text-green-600 hover:underline" @click="redirectToHome">비밀번호를 잊으셨나요?</a> -->
  
            <!-- <div class="flex justify-end -mt-8">
              <router-link to="/signup" class="text-gray-400 hover:underline">Sign Up</router-link>
            </div> -->
            <div class="flex justify-end -mb-8">
             <router-link to="/signup" class="text-gray-400 hover:underline">Sign Up</router-link>
            </div>

  
            <!-- 구글 Sign-In 버튼 추가 -->
            <div id="google-signin-button"></div>
          </form>
        </div>
      </div>
  
      <div v-if="showModalErrorMessage" class="fixed inset-0 flex items-center justify-center z-50">
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
      },
    },
    mounted() {
      this.showLogin = true;
  
      // Google API 스크립트 로드
      const googleApiScript = document.createElement('script');
      googleApiScript.src = 'https://apis.google.com/js/platform.js';
      googleApiScript.onload = () => {
        // gapi.auth2 초기화
        gapi.load('auth2', () => {
          gapi.auth2.init({
            client_id: '612943861620-gprqacr2j8mgjbpi3jflq4d35nq58bis.apps.googleusercontent.com',
          });
        });
  
        // 구글 Sign-In 버튼 렌더링
        gapi.signin2.render('google-signin-button', {
          scope: 'email profile openid https://www.googleapis.com/auth/user.birthday.read',
          onsuccess: this.onGoogleSignInSuccess,
          onfailure: this.onGoogleSignInFailure,
        });
      };
      document.head.appendChild(googleApiScript);
    },
    methods: {
      onGoogleSignInSuccess(googleUser) {
        const profile = googleUser.getBasicProfile();
        console.log("구글 로그인 성공!");
        console.log("아이디: ", profile.getId());
        console.log("이름: ", profile.getName());
        console.log("이메일: ", profile.getEmail());
  
        // 여기서 구글 로그인 성공 처리를 추가하여 사용자 인증 처리를 수행할 수 있다.
        
      },
      onGoogleSignInFailure(error) {
        console.error("구글 로그인 실패:", error);
      },
    },
  };
  </script>
  
  <style>

  </style>
  