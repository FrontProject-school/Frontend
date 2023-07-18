

   <template>
    <div>
      <div v-if="showModal || showLogin" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-white w-1/2 p-6 rounded shadow-lg">
          <h2 class="text-3xl mb-4">로그인</h2>
        
          <form @submit.prevent="submitForm">
            <div class="mb-6">
              <label for="username" class="block mb-2 text-gray-700">사용자 이름</label>
              <input type="text" id="username" v-model="username" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="사용자 이름을 입력하세요">
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-gray-700">비밀번호</label>
              <input type="password" id="password" v-model="password" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="비밀번호를 입력하세요">
            </div>
            <button type="submit" class="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
             
              <router-link to="/">로그인</router-link> 
              
              
            </button>
          
            
            
            

            <a href="#" class="text-green-600 hover:underline " @click="redirectToHome">비밀번호를 잊으셨나요?</a>
            
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showModal: false,
        username: "",
        password: "",
        showLogin: false
      };
    },
    methods: {
      submitForm() {
        if (this.username === "" && this.password === "") {
          alert("아이디와 비밀번호를 입력해주세요!");
          return;
        }
  
        if (this.username === "") {
          alert("아이디를 입력해주세요!");
          return;
        }
  
        if (this.password === "") {
          alert("비밀번호를 입력해주세요!");
          return;
        }
  
       
        console.log("아이디:", this.username);
        console.log("비밀번호:", this.password);
        
  
    
        this.$router.push('/');
      },
      redirectToHome() {
        this.$router.push('/');
      }
    },
    mounted() {
     
      this.showLogin = true;
    }
  };
  </script>
  