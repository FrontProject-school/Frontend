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

// 마이페이지
import MyPageSide from '../components/MyPageSide.vue'
import MemberInfo from '../view/MemberInfo.vue'
import WrittenList from '../view/WrittenList.vue'
import ApplyingNow from '../view/ApplyingNow.vue'
import ResignVue from '../view/ResignVue.vue'


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
        },
        {
            path :'/signup',
            component: SignUpPage

        },
        // 마이페이지
        { path :'/memberinfo', component: MemberInfo },
        { path :'/writtenList', component: WrittenList },
        { path :'/applyingNow', component: ApplyingNow },
        { path :'/resign', component: ResignVue },
    ]
})