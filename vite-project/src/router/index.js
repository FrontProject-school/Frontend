import { createRouter, createWebHashHistory } from "vue-router";

// User
import UserHome from '../view/user/UserHome.vue'
import IntroPage from '../view/user/IntroPage.vue'
import BulletinBoard from '../view/user/board/BulletinBoard.vue'
import NoticeBoard from '../view/user/board/NoticeBoard.vue'
import RequireBoard from '../view/user/board/RequireBoard.vue'
import ReadPage from '../view/user/read/ReadPage.vue'
import ApplyPage from '../view/user/apply/ApplyPage.vue'
import RegisterPage from '../view/user/RegisterPage.vue'
import WritePage from '../view/user/write/WritePage.vue'
import LoginModalPage from '../view/user/sign/LoginModalPage.vue'
import SignUpPage from '../view/user/sign/SignUpPage.vue'


// Admin
import AdminHome from '../view/admin/AdminHome.vue'
import PolicyManagement from'../view/admin/PolicyManagement.vue'


// 마이페이지
import MemberInfo from '../view/user/user_page/MemberInfo.vue'
import WrittenList from '../view/user/WrittenList.vue'
import ApplyMyPage from '../view/user/apply/ApplyMyPage.vue'


export default createRouter({
    history: createWebHashHistory(),

    routes: [
        // AdminPage
        {   path: '/admin', component: AdminHome },
        {   path: '/policy', component: PolicyManagement },

        // UserPage
        {   path: '/', component: UserHome },
        {   path: '/intro', component: IntroPage },
        {   path: '/board/notice', component: NoticeBoard },
        {   path: '/board/bulletin', component: BulletinBoard },
        {   path: '/board/require', component: RequireBoard },
        {   path: '/read', component: ReadPage },
        {   path:'/apply', component:ApplyPage },
        {   path:'/register', component:RegisterPage },
        {   path: '/write', component:WritePage },
        {   path:'/modal' , component:LoginModalPage },
        {   path :'/signup', component: SignUpPage },

        // MyPage
        { path :'/memberInfo', component: MemberInfo },
        { path :'/writtenList', component: WrittenList },
        { path:'/applymy', component:ApplyMyPage }
        
        
    ]
})