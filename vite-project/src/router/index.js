import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../view/Home.vue'
import IntroPage from '../view/IntroPage.vue'
import NoticeBoard from '../view/NoticeBoard.vue'
import ReadPage from '../view/ReadPage.vue'
import ApplyPage from '../view/ApplyPage.vue'
import WritePage from '../view/WritePage.vue'

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
            component: ApplyPage
        },
        {
            path:'/write',
            component: WritePage
        }


    ]
})