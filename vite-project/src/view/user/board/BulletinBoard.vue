<script>
import BoardPage from "./BoardPage.vue";
import SearchWord from "./SearchWord.vue";
import { getFreeBoard } from "../../../api/Board";

export default {
  name: "bulletin_board",
  components: { SearchWord, BoardPage },
  data() {
    return {
      pageArray: [],
    };
  },
  created() {
    getFreeBoard().then((res) => {
      this.pageArray = res.notices;
      console.log(res);
    });
  },
};
</script>

<template>
  <div class="container m-auto">
    <div>
      <SearchWord />
    </div>
    <div class="container m-auto">
      <BoardPage :list-array="pageArray" />
    </div>
  </div>
</template>
