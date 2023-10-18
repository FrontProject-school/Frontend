
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
      v-if="showModal"
      class="absolute inset-0 flex items-center justify-center z-50"
    >
      <div class="bg-white w-1/2 p-6 rounded shadow-lg">
        <h2 class="text-3xl mb-4">Sign Up</h2>

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
            <label for="email" class="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="이메일 주소를 입력하세요"
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
          <button
            type="submit"
            class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Sign Up
          </button>

          <button @click="closeModal" class="text-gray-400 hover:underline">
            Cancel
          </button>

          <router-link to="/modal" class="flex justify-between -mt-10">
            <button
              type="submit"
              class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-auto"
            >
              Back
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
    
    <script>
export default {
  data() {
    return {
      showModal: true,
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      if (!this.username || !this.email || !this.password) {
        // 사용자 이름, 이메일, 비밀번호 중 하나라도 입력되지 않은 경우 모달을 띄웁니다.
        alert("사용자 이름, 이메일, 비밀번호를 모두 입력해주세요!");
        return;
      }

      // 회원가입 처리 로직을 구현합니다.
      console.log("사용자 이름:", this.username);
      console.log("이메일:", this.email);
      console.log("비밀번호:", this.password);

      // 회원가입 완료 후 모달을 닫습니다.
      this.closeModal();
    },
    closeModal() {
      this.showModal = false;
      this.username = "";
      this.email = "";
      this.password = "";

      // 취소 버튼을 클릭하면 메인 페이지로 이동합니다.
      this.$router.push("/");
    },
  },
};
</script>
    

      
      