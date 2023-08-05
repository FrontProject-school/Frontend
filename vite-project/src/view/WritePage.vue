<script>
export default {

}
</script>


<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

  <div class="container w-3/5 mx-auto">
    <!-- TITLE -->
    <div>
      <input type="text" placeholder="Title" class="container text-2xl">
      <div class="container mt-2">writer</div>
    </div>
    <hr>


    <!-- TOOL BAR -->
    <div class="tools-group">
      <ul>
        <li class="font-type">글꼴</li>
        <li class="font-size">크기</li>
        <li class="bold">
          <span class="material-symbols-outlined">format_bold</span>
        </li>
        <li class="italic">
          <span class="material-symbols-outlined">format_italic</span>
        </li>
        <li class="underline">
          <span class="material-symbols-outlined">format_underlined</span>
        </li>
        <li class="cancel">
          <span class="material-symbols-outlined">strikethrough_s</span>
        </li>
        <li class="color">
          <span class="material-symbols-outlined">format_color_text</span>
        </li>
        <li class="back-color">
          <span class="material-symbols-outlined">colors</span>
        </li>
      </ul>
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
/* TOOL BAR */
li {
  list-style: none;
  display: inline-block;
  cursor: pointer;
}
.tools-group {
  margin-top: 10px;
  margin-bottom: -10px;
  display: flex;
}
.tools-group ul {
  border: 1px solid #555;
}
.tools-group ul .font-type {
  padding: 3px 40px;
  border-right: 1px solid #555;
}
.tools-group ul .font-size {
  padding: 3px 40px;
  border-right: 1px solid #555;
}
.tools-group ul .bold {
  padding: 0 10px;
}
.tools-group ul .italic {
  padding: 0 10px 0 0;
}
.tools-group ul .underline {
  padding: 0 10px 0 0;
}
.tools-group ul .cancel {
  padding: 0 10px 0 0;
}
.tools-group ul .color {
  padding: 0 10px 0 0;
}
.tools-group ul .back-color {
  padding: 0 10px 0 0;
}
</style>