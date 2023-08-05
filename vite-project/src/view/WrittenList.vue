<template>
  <div class="container m-auto">
    <div class="grid gird-cols-6 gap-4 my-5">
      <div class="col-start-2 col-span-4">
        <table class="container table-auto text-gray-900 text-center m-auto">
          <thead>
            <tr class="border-y-2">
              <th class="p-3">제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in noticeList" key="item.id" class="border-b ">
              <!-- <td class="py-2">{{ item.postId }}</td> -->
              <td colspan="2" class="float-left py-3 px-4"><router-link to="/read" >
                <span class="pr-10 ml-5">{{ item.postId }}</span>
                <span>{{ item.name }}</span>
              </router-link></td>
              <td>{{ item.id }}</td>
              <td>2023-05-19</td>
            </tr>
            <tr v-for="item in noticeList" key="item.id" class="border-b ">
              <!-- <td class="py-2">{{ item.postId }}</td> -->
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
      <div class="col-end-7 col-span-1"></div>
    </div>
  </div>

  <MyPageSide></MyPageSide>
</template>

<style scoped>
.container {
  position: absolute;
  width: 950px;
  top: 65px;
  left: 200px;
}
button {
  position: absolute;
  display: flex;
  top: 620px;
  left: 630px;
}
</style>


<script>
  const HOST = "https://jsonplaceholder.typicode.com/posts/1/comments";

  console.log("notice");

  import MyPageSide from '../components/MyPageSide.vue';

  export default {
    components: {
      MyPageSide
    },
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