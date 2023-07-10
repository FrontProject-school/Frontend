<!-- <script>
   
const HOST = "https://jsonplaceholder.typicode.com/posts/1/comments";


 
export default {
    
    data(){
        return {
            applyList: [],
        };
    },
    mounted(){
        this.generateDate();
    },
    methods: {
        generateDate() {
            const newData = [
                {
                    id:1,
                    title:'제 2회 한일공동고등교육',
                    startDate:'2023-07-14',
                    endDate: '2023-08-14',
                },
                {
                    id:2,
                    title:'영진 버디프로그램',
                    startDate:'2023-05-08',
                    endDate: '2023-06-02',
                },

                {
                    id:3,
                    title:'글로벌 존(zone)',
                    startDate:'2023-05-08',
                    endDate: '2023-06-02',
                },
                {
                    id:4,
                    title:'외국어 프레젠테이션 대회',
                    startDate:'2023-05-08',
                    endDate: '2023-06-02',
                },
                {
                    id:5,
                    title:'글로벌 센터',
                    startDate:'2023-05-08',
                    endDate: '2023-06-02',
                }

            
            ];
            this.applyList = newData;
        }
    }
    
   
   


 };

</script>


<template>
    <div class="list flex justify-center">
        <p class="tit text-black text-2xl font-semibold my-4 ">
             신청 진행 현황
        </p>
    </div>

    <div class="border-double border-4 border-black mx-60">
    </div>

  <div v-for="item in applyList" :key="item.id">
    <router-link to="/register" class="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 my-8">
        <div class="flex items-center space-x-3">
            <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                <h3 class="text-slate-900 group-hover:text-white font-semibold text-xl">{{ item.title }}</h3>
        </div>
       <p class="text-slate-500 group-hover:text-white text-sm"> 진행기간 : {{ item.startDate }} ~ {{ item.endDate }}</p>
       <p class="text-slate-500 group-hover:text-white text-xs">* 누르면 신청 페이지로 이동</p>
    </router-link>
   </div> 
    
  
  
   <router-link to="/register" class="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 my-8">
        <div class="flex items-center space-x-3">
            <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                <h3 class="text-slate-900 group-hover:text-white font-semibold text-xl">제 1회 버디프로그램</h3>
        </div>
       <p class="text-slate-500 group-hover:text-white text-sm"> 모집기간 : 2023-07-04 ~ 2023-07-14</p>
       <p class="text-slate-500 group-hover:text-white text-xs">* 누르면 신청 페이지로 이동</p>
    </router-link>

    <router-link to="/register"  class="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 my-8">
        <div class="flex items-center space-x-3">
            <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
                <h3 class="text-slate-900 group-hover:text-white font-semibold text-xl">글로벌 현장학습</h3>
        </div>
       <p class="text-slate-500 group-hover:text-white text-sm">일시 : 2023-09-21 오후 3시</p>
       <p class="text-slate-500 group-hover:text-white text-xs">* 누르면 신청 페이지로 이동</p>
    </router-link>


    


</template>



<style>

</style> -->

<template>
    <div class="list flex justify-center">
      <p class="tit text-black text-2xl font-semibold my-4">
        신청 진행 현황
      </p>
    </div>
  
    <div class="border-double border-4 border-black mx-60"></div>
  
    <div v-for="item in applyList" :key="item.id">
      <router-link
        to="/register"
        class="group block max-w-sm mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500 my-8"
      >
        <div class="flex items-center space-x-3">
          <svg
            class="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            
          </svg>
          <h3 class="text-slate-900 group-hover:text-white font-semibold text-xl">
            {{ item.title }}
          </h3>
        </div>
        <p class="text-slate-500 group-hover:text-white text-sm">
          진행기간: {{ item.startDate }} ~ {{ item.endDate }}
        </p>
        <p class="text-slate-500 group-hover:text-white text-xs">
          * 누르면 신청 페이지로 이동
        </p>
      </router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  
  export default {
    data() {
      return {
        applyList: [],
      };
    },
    mounted() {
    this.generateData();
    },
    methods: {
    
    generateData() {
        
        const url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
        axios
          .get(url)
          .then(response => {
            this.applyList = response.data.map(item => ({
              id: item.id,
              title: item.name,
              startDate: item.startDate,
              endDate: item.endDate,
            }));
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>