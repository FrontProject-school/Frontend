<script>
export default{
  
}
</script>

<template>
  <header class="inset-x-0">
    <nav class="flex items-center justify-between py-4 px-6 lg:px-8" aria-label="Global">
      <router-link to="/">
        <img src="../assets/vue.svg" alt="logo" style="width: 70px; height: 70px;" class="me-6">
      </router-link>
      <div class="hidden lg:flex lg:gap-x-16">
        <router-link to="/intro" class="text-m font-semibold leading-6 text-gray-900">소개</router-link>
        <router-link to="/notice" class="text-m font-semibold leading-6 text-gray-900">공지사항</router-link>
        <router-link to="/introPage" class="text-m font-semibold leading-6 text-gray-900">자유게시판</router-link>
        <router-link to="/introPage" class="text-m font-semibold leading-6 text-gray-900">문의게시판</router-link>
        <router-link to="/introPage" class="text-m font-semibold leading-6 text-gray-900">신청</router-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end bottom-0">
        <a href="#" class="text-m font-semibold leading-6 text-gray-900">Log in</a>
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