<script>

export default {
    name: 'board_page',
    data() {
        return {
            pageNum: 0
        };
    },
    props: {
        listArray: {
            type: Array, // BoardArray 에서 받아오는 list
            required: true
        },
        pageSize: {
            type: Number,
            required: false,
            default: 10 // 넘오는 페이지 수의 기본 값
        },
        checked: {
            type: Boolean,
            required: false,
        }
    },
    methods: {
        prevPage() {
            this.pageNum -= 1;
        },
        nextPage() {
            this.pageNum += 1;
        }
    },
    computed: {
        pageCount() {
            let listLength = this.listArray.length, listSize = this.pageSize, page = Math.floor(listLength / listSize);
            listLength % listSize > 0 ? page += 1 : page;
            return page;
        },
        paginatedData() {
            const start = this.pageNum * this.pageSize, end = start + this.pageSize;
            if (this.listArray) {
                return this.listArray.slice(start, end);
            }
            else {
                return [];
            }
        }
    },
}
</script>

<template>
    <div class="grid gird-cols-6 gap-4 my-5">
      <!-- 테이블 박스 -->
      <div class="col-start-1 col-span-4">
        <!-- 게시판 -->
        <table class="container text-gray-900 text-center">
          <thead class="border-b-2">
            <tr>
              <th class="py-3 px-3">NO.</th>
              <th style="width: 900px;">제목</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <!-- 게시글 -->
            <tr v-for="p in paginatedData" :key="p.no" class="border-b bg-slate-10">
              
              <td>{{ p.id }}</td>
              <td class="py-4">
                <router-link to="/read" >
                  <span v-if="checked">------------------------------------------</span>
                  <span v-else>{{ p.title }}</span>
                </router-link>
              </td>
              <td>{{ p.userId }}</td>
              <td>2023-05-19</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- 페이징 & 글쓰기 버튼 -->
    <div class="flex items-center justify-between">
      <div class="m-auto text-center flex ">
        <button :disabled="pageNum === 0" @click="prevPage" class="mx-3">pre</button>
        <div>
          <h3>{{ pageNum + 1}} / {{ pageCount }}</h3>
        </div>
        <button :disabled="pageNum >= pageCount - 1" @click="nextPage" class="mx-3">next</button>
      </div>
      <div class="">
        <router-link to="/write" class="write_btn">
          <button class="bg-neutral-700 w-18 p-2 text-gray-700 text-white">글쓰기</button>
        </router-link>
      </div>
    </div>
</template>
