import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../view/Home.vue'
import IntroPage from '../view/IntroPage.vue'
import NoticeBoard from '../view/NoticeBoard.vue'
import ReadPage from '../view/ReadPage.vue'
import ApplyPage from '../view/ApplyPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import WritePage from '../view/WritePage.vue'
import LoginModalPage from '../view/LoginModalPage.vue'



export default createRouter({
    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/intro',
            component: IntroPage
        },
        {
            path: '/notice',
            component: NoticeBoard
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
        }
       


    ]
})