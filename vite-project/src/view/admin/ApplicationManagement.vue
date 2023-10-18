<template>
  <div class="container m-auto text-l">
    <div class="text-center text-3xl">
      <h1>신청 관리</h1>
    </div>
    <div class="text-center w-3/4 mx-auto my-4 p-3 bg-neutral-100">
      신청 선택
      <select v-model="selectedOption" class="p-1 border">
        <option value="">선택하세요</option>
        <option v-for="item in selectOptions" :value="item">{{ item }}</option>
      </select>
      <button class="py-1 bg-neutral-700 text-white m-2 px-3" @click="applyFilter">검색</button>
    </div>
    <div class="text-center w-3/4 mx-auto my-5 border-2 border-neutral-200 overflow-scroll">
      <table class="w-full">
        <tr>
          <td class="border p-2">
            <strong>이름</strong>
          </td>
          <td class="border p-2"> <strong>학번</strong> </td>
          <td class="border p-2"> <strong>이메일</strong> </td>
          <td class="border p-2"> <strong>전화번호</strong> </td>
        </tr>
        <tr v-for="admin in adminList" :key="admin.no">
          <td class="border p-2">
            <input type="radio" name="radioRow" class="mr-2">
            {{ admin.name }}
          </td>
          <td class="border p-2">
            {{ admin.studentNo }}
          </td>
          <td class="border p-2">
            {{ admin.email }}
          </td>
          <td class="border p-2">
            {{ admin.phoneNumber }}
          </td>
        </tr>
        <tr v-for="item in applyList" :key="item.id">
       </tr>
      </table>
    </div>
    <div class="m-auto w-3/4 text-right">
      <button class="bg-neutral-700 text-white px-3 py-1">delete</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      adminList: [],
      applyList: [],
      selectOptions: [],
      selectedOption: '',
    };
  },
  computed: {
    filteredAdminList() {
      return this.adminList.filter(admin => {
        return (
          admin.name.includes(this.selectedOption) ||
          admin.studentNo.includes(this.selectedOption) ||
          admin.email.includes(this.selectedOption) ||
          admin.phoneNumber.includes(this.selectedOption)
        );
      });
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
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
          // Select 태그의 옵션 데이터 설정
          this.selectOptions = this.applyList.map(item => item.title);
        })
        .catch(error => {
          console.error(error);
        });
     
        // 일단 하드코딩한 데이터
      this.adminList = [
        {
          no: 1,
          name: "배규현",
          studentNo: "1901238",
          email: "dlgyqls@g.yju.ac.kr",
          phoneNumber: "010-1234-5678",
        },
        {
          no: 2,
          name: "이효빈",
          studentNo: "1901111",
          email: "dlgyqls88@g.yju.ac.kr",
          phoneNumber: "010-9876-5432",
        },
        {
          no: 3,
          name: "강유영",
          studentNo: "202012",
          email: "gyqlsdk@g.yju.ack.kr",
          phoneNumber: "010-5555-5555",
        },
        {
          no: 4,
          name: "김민재",
          studentNo: "209938",
          email: "rlaalswo@g.yju.ac.kr",
          phoneNumber: "010-1234-5678",
        },
      ];
    },
    applyFilter() {
  
    },
  },
};
</script>

