
<template>
    <div class="list flex justify-center">
      <p class="tit text-black text-2xl font-semibold my-4 shadow-lg">
         신청 진행 현황
      </p>
    </div>

  
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
  import { createGet } from '../../../api/apply.js'
  
  
  
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

        
      createGet().then((response) => {
        console.log(response);
            this.applyList = response.programList.map(item => ({

              id: item.info.id,
              title: item.info.title,
              startDate: item.info.rDate,
              endDate: item.info.rDate,
            }));
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>