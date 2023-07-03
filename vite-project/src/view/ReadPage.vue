<script >
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
  },
  // 컴포넌트 로직 작성
}
</script>

<template>
  <div class="container mx-auto">
    <div class="my-3">
      <h1 class="text-2xl underline underline-offset-8">제목</h1>
      <div class="flex justify-between">
        <div class="mt-5 font-semibold">작성자 : 글쓴이</div>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton class="hover:bg-gray-50">
              <svg class="origin-center rotate-90 " xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30" aria-hidden="true">
                <path d="M207.858-432Q188-432 174-446.142q-14-14.141-14-34Q160-500 174.142-514q14.141-14 34-14Q228-528 242-513.858q14 14.141 14 34Q256-460 241.858-446q-14.141 14-34 14Zm272 0Q460-432 446-446.142q-14-14.141-14-34Q432-500 446.142-514q14.141-14 34-14Q500-528 514-513.858q14 14.141 14 34Q528-460 513.858-446q-14.141 14-34 14Zm272 0Q732-432 718-446.142q-14-14.141-14-34Q704-500 718.142-514q14.141-14 34-14Q772-528 786-513.858q14 14.141 14 34Q800-460 785.858-446q-14.141 14-34 14Z"/>
              </svg>
            </MenuButton>
          </div>

          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">수정</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">삭제</a>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <div class="" style="min-height: 400px;">
      <div >content</div>
    </div>
    <!-- <router-link tag="button" to="/" class="write_btn">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">수정</button>
    </router-link>
    <router-link tag="button" to="/" class="write_btn">
      <button class="bg-blue-500 ml-3 hover:bg-blue-700 text-white font-bold py-1 px-4 border border-blue-700 rounded">삭제</button>
    </router-link> -->


    <div class="comment">
      <h1> 댓글 목록</h1>
    </div>
  </div>

</template>

<style>

</style>