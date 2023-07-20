import { createRouter, createWebHistory } from "vue-router";

import Home from '../view/Home.vue'
import IntroPage from '../view/IntroPage.vue'
import BoardPage from '../view/BoardPage.vue'
import ReadPage from '../view/ReadPage.vue'
import ApplyPage from '../view/ApplyPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import WritePage from '../view/WritePage.vue'
import LoginModalPage from '../view/LoginModalPage.vue'
import SignUpPage from '../view/SignUpPage.vue'


const routes = [
  {
      path: '/',
      component: Home
  },
  {
      path: '/intro',
      component: IntroPage
  },
  {
      path: '/board/notice',  // 공지 게시판
      component: BoardPage
  },
  {
      path: '/board/Inquiry', // 문의 게시판
      component: BoardPage
  },
  {
      path: '/board/bulletin',    // 자유 게시판
      component: BoardPage
  },
  {
      path: '/read',
      component: ReadPage
  },
  {
      path:'/apply',
      component:ApplyPage
  },
  {
      path:'/register',
      component:RegisterPage
  },
  {
      path: '/write',
      component:WritePage
  },
  {
      path:'/modal' ,
      component:LoginModalPage
  },
  {
      path :'/signup',
      component: SignUpPage
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
})

export default router