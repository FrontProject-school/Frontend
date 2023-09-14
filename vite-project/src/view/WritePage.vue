<script>
export default {

}
</script>

<template>
  <div class="container mx-auto">
    <!-- TITLE -->
    <div class="my-3">
      <input type="text" placeholder="Title" class="container text-2xl underline underline-offset-8">
      <hr>
      <div class="container mt-5 font-semibold">writer</div>
    </div>
    <!-- CONTENT -->
    <div>
      <textarea placeholder="내용을 입력하세요" class="container mt-5" style="min-height: 500px;"></textarea>
    </div>
    <div>
      <button class="rounded-md p-2 text-gray-700 float-right border">저장</button>
    </div>
  </div>
</template>

<style>

</style>