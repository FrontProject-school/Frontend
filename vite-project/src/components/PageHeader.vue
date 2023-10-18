<script>
export default{
  data() {
    return {
      isAdmin: false,
      isLogin: false
    }
  }
}
</script>

<template>
  <header class="container m-auto inset-x-0">
    <nav class="flex items-center py-4 px-3" aria-label="Global">
      <router-link to="/">
        <img src="../assets/영진전문대 마크.png" alt="logo" style="width: 70px; height: 70px;" class="me-6">
      </router-link>
        <div v-if="isAdmin" class="lg:flex lg:gap-x-16 lg:justify-start">
          <router-link to="/admin" class="text-m font-semibold leading-6 text-gray-900">관리자 관리</router-link>
          <router-link to="/board/bulletin" class="text-m font-semibold leading-6 text-gray-900">문의 관리</router-link>
          <router-link to="/applyManage" class="text-m font-semibold leading-6 text-gray-900">신청 관리</router-link>
          <router-link to="/policy" class="text-m font-semibold leading-6 text-gray-900">정책 관리</router-link>
          <router-link to="/" class="text-m font-semibold leading-6 text-gray-900" @click="() => {isAdmin = false}">사용자 페이지</router-link>
        </div>
        <div v-else class="container flex items-center justify-between py-4 px-3">
          <div class="hidden lg:flex lg:gap-x-16 lg:justify-start">
            <router-link to="/intro" class="text-m font-semibold leading-6 text-gray-900">소개</router-link>
            <router-link to="/board/notice" class="text-m font-semibold leading-6 text-gray-900">공지사항</router-link>
            <router-link to="/board/bulletin" class="text-m font-semibold leading-6 text-gray-900">자유게시판</router-link>
            <router-link to="/board/require" class="text-m font-semibold leading-6 text-gray-900">문의게시판</router-link>
            <router-link to="/apply" class="text-m font-semibold leading-6 text-gray-900">신청</router-link>
            <router-link to="/apply" class="text-m font-semibold leading-6 text-gray-900" @click="() => {isAdmin = true}">관리자 페이지</router-link>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end bottom-0">
            <router-link to="/modal"  v-if="!isLogin" class="text-m font-semibold leading-6 text-gray-900">Log in</router-link>
            <router-link to="/memberInfo" v-else class="text-m font-semibold leading-6 text-gray-900">마이페이지</router-link>
          </div>
        </div>
    
    </nav>
  </header>
</template>

<style>
  /* header {
    position: relative;
  }
  h1 {
    padding: 30px 0;
    text-align: left;
    font-size: 35px;
  }
  .main_bar{
    position: relative;
  }
  ul {
    position: absolute;
    width: 100%;
    background-color: #afafaf;
  }
  ul li {
    float: left;
    width: 20%;
    margin: 15px 0;
  } */
</style>