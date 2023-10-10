import { createRouter, createWebHashHistory } from "vue-router";

// User
import UserHome from '../view/user/UserHome.vue'
import IntroPage from '../view/user/IntroPage.vue'
import BoardArray from '../view/user/board/BoardArray.vue'
import ReadPage from '../view/user/read/ReadPage.vue'
import ApplyPage from '../view/user/apply/ApplyPage.vue'
import RegisterPage from '../view/user/RegisterPage.vue'
import WritePage from '../view/user/write/WritePage.vue'
import LoginModalPage from '../view/user/sign/LoginModalPage.vue'
import SignUpPage from '../view/user/sign/SignUpPage.vue'

// Admin
import AdminHome from '../view/admin/AdminHome.vue'


// 마이페이지
import MemberInfo from '../view/user/user_page/MemberInfo.vue'
import WrittenList from '../view/user/WrittenList.vue'
import ApplyingNow from '../view/user/apply/ApplyingNow.vue'
import ResignVue from '../view/user/user_page/ResignVue.vue'

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        // AdminPage
        {   path: '/admin', component: AdminHome },

        // UserPage
        {   path: '/', component: UserHome },
        {   path: '/intro', component: IntroPage },
        {   path: '/board/notice', component: BoardArray },
        {   path: '/board/bulletin', component: BoardArray },
        {   path: '/board/inquiry', component: BoardArray },
        {   path: '/read', component: ReadPage },
        {   path:'/apply', component:ApplyPage },
        {   path:'/register', component:RegisterPage },
        {   path: '/write', component:WritePage },
        {   path:'/modal' , component:LoginModalPage },
        {   path :'/signup', component: SignUpPage },

        // MyPage
        { path :'/memberInfo', component: MemberInfo },
        { path :'/writtenList', component: WrittenList },
        { path :'/applyingNow', component: ApplyingNow },
        { path :'/resign', component: ResignVue },
    ]
})