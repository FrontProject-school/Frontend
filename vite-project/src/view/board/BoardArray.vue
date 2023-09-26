<script>
import BoardPage from './BoardPage.vue';
// import axios from 'axios';

// let url = window.location.pathname
// 게시판 경로에 따른 api 경로
// const HOST = `http://localhost:5174${url}`;

const HOST = "https://jsonplaceholder.typicode.com/posts";
export default {

  name:'pagination',
  components: { BoardPage },
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
  <div>
    <BoardPage :list-array="pageArray"/>
  </div>
</template>

<style>

</style>