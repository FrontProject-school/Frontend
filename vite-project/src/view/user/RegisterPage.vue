<template>
    <div>
      <div class="list flex justify-left indent-40">
        <p class="tit text-black text-xl italic my-6 text-left">
          신청 입력 페이지
        </p>
      </div>
  
      <div class="border-solid border-2 border-black mx-40 mt-[-20px]"></div>
  
      <div class="list flex justify-left indent-40 mt-[-30px]">
        <p class="tit text-gray-500 text-xl no-italic my-10 text-left">
          문항
        </p>
      </div>
  
      <div class="border-solid border-2 border-gray-300 mx-40 mt-[-30px]"></div>
  
      <div class="list flex justify-left indent-40 mt-[-30px]">
        <p class="tit text-black text-lg no-italic my-10 text-left">
          질문1. 학기 중이나 학교 입학 전에 해외에서 거주한 경험이 있습니까?
        </p>
      </div>
  
      <div class="flex justify-left ml-40 mt-[-30px]">
        <textarea
          name="text1"
          ref="text1"
          cols="90"
          rows="5"
          class="border-2 resize-none"
        ></textarea>
      </div>
  
      <div class="border-solid border-2 border-gray-300 mx-40 mt-[20px]"></div>
  
      <div class="list flex justify-left indent-40 mt-[-30px]">
        <p class="tit text-black text-lg no-italic my-10 text-left">
          질문2. 프로그램 참여할 시 각오
        </p>
      </div>
  
      <div class="flex justify-left ml-40 mt-[-30px]">
        <textarea
          name="text2"
          ref="text2"
          cols="90"
          rows="5"
          class="border-2 resize-none"
        ></textarea>
      </div>
  
      <div class="border-solid border-2 border-black mx-40 mt-[20px]"></div>
  
      <button
        @click="submitForm"
        class="my-7 px-8 py-2 border border-solid border-green-500 rounded-5 text-sm font-bold text-green-500 leading-20 tracking-normal float-right mr-40"
      >
        신청
      </button>
      <button
        @click="goBack"
        class="my-7 px-8 py-2 border border-solid border-gray-300 rounded-5 text-sm font-bold text-gray-500 leading-20 tracking-normal float-right mr-8"
      >
        취소
      </button>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
  
  export default {
    methods: {
      submitForm() {
        const textInput1 = this.$refs.text1.value;
        const textInput2 = this.$refs.text2.value;
        if (textInput1.trim() === '' || textInput2.trim() === '') {
          Swal.fire({
            icon: 'warning',
            title: '글을 입력해주세요!',
          });
        } else {
          Swal.fire({
            icon: 'success',
            title: '신청이 완료되었습니다!',
          }).then(() => {
            this.goBack();
          });
        }
      },
      goBack() {
      window.history.back(-1);
    },
    },
  };
  </script>
  
  <style>

  
  </style>
  