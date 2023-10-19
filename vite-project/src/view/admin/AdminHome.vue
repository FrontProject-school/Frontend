<script>
export default {
  data: () => {
    return {
      adminList: [
        {
          no: 1,
          name: "관리자 1"
        },
        {
          no: 2,
          name: "관리자 2"
        },
        {
          no: 3,
          name: "관리자 3"
        },
        {
          no: 4,
          name: "관리자 4"
        },
      ],
    }
  },
  methods: {
  }
}
</script>

<template>
  <div class="container m-auto text-l">
    <div class="text-center text-2xl">
      <h1 >관리자 등록/삭제</h1>
    </div>
    <div class="text-center w-3/4 mx-auto my-4 p-3 bg-neutral-100">
      <input type="text" class="p-1 border">
      <button class="py-1 bg-neutral-700 text-white m-2 px-3">add</button>
    </div>
    <div class="text-center w-3/4 mx-auto my-5 h-60 border-2 border-neutral-200 overflow-scroll">
      <div v-for="admin in adminList" :key="admin.no" class="flex justify-center p-5 border-b" >
        <input type="checkBox" class="default:ring-2 mx-2"  /> {{ admin.name }} <br />
        <button class="mx-4 border px-2">임명</button>
      </div>
    </div>
    <div class="m-auto w-3/4 text-right">
      <button class="bg-neutral-700 text-white px-3 py-1">delete</button>
    </div>
  </div>
</template>