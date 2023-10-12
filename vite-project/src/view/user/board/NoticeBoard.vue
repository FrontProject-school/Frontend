<script>
  import BoardPage from './BoardPage.vue';  
  import SearchWord from './SearchWord.vue';
  import { getNoticeBoard } from '../../../api/Board';
  import { useRouter } from 'vue-router';


  export default {
    name:'notice_board',
    components: { SearchWord, BoardPage },
    data() {
    return {
      pageArray: [],
    }
    },
    created () {
      getNoticeBoard()
        .then((res) => {
          this.pageArray = res;
        })
    }
  }
</script>

<template>
  <div class="container m-auto">
    <div>
      <SearchWord />
    </div>
    <div class="container m-auto">
      <BoardPage :list-array="pageArray"/>
    </div>
  </div>
</template>