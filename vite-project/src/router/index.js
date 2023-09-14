import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../view/Home.vue'
import IntroPage from '../view/IntroPage.vue'
import BoardPage from '../view/board/BoardPage.vue'
import ReadPage from '../view/read/ReadPage.vue'
import ApplyPage from '../view/apply/ApplyPage.vue'
import RegisterPage from '../view/RegisterPage.vue'
import WritePage from '../view//write/WritePage.vue'
import LoginModalPage from '../view/sign/LoginModalPage.vue'
import SignUpPage from '../view/sign/SignUpPage.vue'

// 마이페이지
import MyPageSide from '../components/MyPageSide.vue'
import MemberInfo from '../view/user_page/MemberInfo.vue'
import WrittenList from '../view/WrittenList.vue'
import ApplyingNow from '../view/apply/ApplyingNow.vue'
import ResignVue from '../view/user_page/ResignVue.vue'


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

        },
        // 마이페이지
        { path :'/memberinfo', component: MemberInfo },
        { path :'/writtenList', component: WrittenList },
        { path :'/applyingNow', component: ApplyingNow },
        { path :'/resign', component: ResignVue },
    ]
})