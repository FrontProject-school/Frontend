<script>
  const HOST = "https://jsonplaceholder.typicode.com/posts/1/comments";

  console.log("notice");
  export default {
    mounted() {
    console.log("notice");
    this.getData();
    },
    data() {
      return {
        noticeList: [], // 받아온 데이터를 저장할 배열
      };
    },
    methods: {
      getData() {
        this.$axios
          .get(HOST)
          .then((res) => {
            console.log(res);
            this.noticeList = res.data;
            console.log(this.noticeList);
          })
          .catch((error) => {
          console.log("Error occurred:");
          console.log(error);
          })
          .finally(() => {
            console.log("Finally block");
          });
      },
    },
  };
</script>

<template>
  <div id="notice_page">
    <h1> 공지사항 </h1>
    <div class="notice_board">
      <table class="container table-auto text-gray-900 text-center">
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in noticeList" key="item.id" class="p-12">
            <td>{{ item.postId }}</td>
            <td><router-link to="/read_page">{{ item.name }}</router-link></td>
            <td>{{ item.id }}</td>
            <td>2023-05-19</td>
          </tr>
        </tbody>
      </table>
    </div>
    <router-link tag="button" to="/write_page" class="write_btn">
      <slot>
        글쓰기
      </slot>
    </router-link>
  </div>
</template>

<style>

</style>