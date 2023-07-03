<script>

export default{
  
}
</script>

<template>
  <div class="container mx-auto">
    <div class="my-3">
      <h1 class="text-2xl underline underline-offset-8">제목</h1>
      <div class="mt-5 font-semibold">작성자 : 글쓴이</div>
    </div>
    <div class="" style="min-height: 400px;">
      <div >content</div>
    </div>
    <router-link tag="button" to="/" class="write_btn">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">수정</button>
    </router-link>
    <router-link tag="button" to="/" class="write_btn">
      <button class="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">삭제</button>
    </router-link>
    <div class="comment">
      <h1> 댓글 목록</h1>
    </div>
  </div>

</template>

<style>

</style>