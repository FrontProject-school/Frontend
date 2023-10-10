<script>
import BoardPage from './BoardPage.vue';
import SearchArray from './SearchArray.vue';

// import axios from 'axios';

let url = window.location.pathname;
console.log(url);
// 게시판 경로에 따른 api 경로
// const HOST = `http://localhost:5174${url}`;

const HOST = "https://jsonplaceholder.typicode.com/posts";
export default {

  name:'pagination',
  components: { BoardPage, SearchArray },
  data() {
    return {
      pageArray: [],
    }
  },
  created () {
    this.$axios
    .get(HOST)
    .then(response => {
      console.log(response);
      this.pageArray = response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }
}
</script>

<template>
  <div class="container m-auto">
    <!-- 검색 창 -->
    <div>
      <SearchArray /> 
    </div>
    <div>
      <BoardPage :list-array="pageArray"/>
    </div>
  </div>
</template>

<style>

</style>