<script>
  let url = window.location.pathname

  // 게시판 경로에 따른 api 경로
  // const HOST = `http://localhost:5174${url}`;
  const HOST = "https://jsonplaceholder.typicode.com/posts/1/comments";

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
      // 검색 api 요청
      handlePostSearch(e) {
        console.log(e.target.value)
        // this.$axios
        //   .get(HOST)
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((error) => console.log(error))
      },
      // 페이지를 띄우는데 필요한 데이터 요청
      getData() {
        this.$axios
          .get(HOST)
          .then((res) => {
            console.log(res);
            this.noticeList = res.data;
            console.log(this.noticeList);
            console.log(url)
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
  <div class="container m-auto">
    <div class="grid gird-cols-6 gap-4 my-5">

      <!-- 테이블 박스 -->
      <div class="col-start-1 col-span-4">
        <!-- 게시판 -->
        <table class="container table-auto text-gray-900 text-center m-auto">
          <thead>
            <tr class="border-y-2 bg-slate-100">
              <th class="p-3">제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <!-- 게시글 -->
            <tr v-for="item in noticeList" key="item.id" class="border-b bg-slate-10">
              <td colspan="2" class="float-left py-3 px-4"><router-link to="/read" >
                <span class="pr-10 ml-5">{{ item.postId }}</span>
                <span>{{ item.name }}</span>
              </router-link></td>
              <td>{{ item.id }}</td>
              <td>2023-05-19</td>
            </tr>
            <!-- 더미 -->
            <tr v-for="item in noticeList" key="item.id" class="border-b ">
              <td colspan="2" class="float-left py-3 px-4"><router-link to="/read" >
                <span class="pr-10 ml-5">{{ item.postId }}</span>
                <span>{{ item.name }}</span>
              </router-link></td>
              <td>{{ item.id }}</td>
              <td>2023-05-19</td>
            </tr>
          </tbody>
        </table>
        <router-link to="/write" class="write_btn">
          <button class=" rounded-md p-2 text-gray-700 float-right border">글쓰기</button>
        </router-link>
      </div>
      
      <!-- 검색 창 -->
      <div class="col-end-6 col-span-1">
        <div class="border-2 h-1/2 ml-5">
          <div class="">
            <div class="text-2xl text-center m-5">검색창</div>
            <div class="flex justify-center">
              <section>
                <div class="flex items-center border-slate-550 border-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="20" height="20" viewBox="0 -960 960 960"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>
                  <input type="text" class=" p-1 outline-0" @input="this.handlePostSearch" placeholder="검색어를 입력해주세요.">
                </div>
              </section>
            </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>