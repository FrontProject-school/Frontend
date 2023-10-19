<script>
export default {
  methods: {
    // 검색 api 요청
    // handlePostSearch(e) {
    //   console.log(e.target.value)
    // this.$axios
    //   .get(HOST)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => console.log(error))
    handlePostSearch() {
      const inputValue = document.getElementById("myInput").value;
      console.log(inputValue);
    },
  },
};
</script>

<template>
  <div class="bg-neutral-100 p-4 my-5">
    <div class="flex justify-center">
      <div class="flex justify-center items-center">
        <section>
          <div class="flex items-center bg-white">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="mx-1" width="20" height="20" viewBox="0 -960 960 960"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg> -->
            <input
              type="text"
              id="myInput"
              class="w-80 p-2 outline-0"
              placeholder="검색어를 입력해주세요"
            />
          </div>
        </section>
        <button
          class="bg-neutral-600 w-20 p-2 text-white"
          @click="handlePostSearch"
        >
          검색
        </button>
      </div>
    </div>
  </div>
</template>
