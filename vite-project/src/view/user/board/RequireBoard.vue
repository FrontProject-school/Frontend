<script>
  import BoardPage from './BoardPage.vue';  
  import SearchWord from './SearchWord.vue';
  import { getNoticeBoard } from '../../../api/Board';

  export default {
    name:'require_board',
    components: { SearchWord, BoardPage },
    data() {
    return {
      pageArray: [],
      check: true,      
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
      <BoardPage :list-array="pageArray" :checked="check"/>
    </div>
  </div>
</template>