import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue';


const routes=[
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                path: '',
                redirect: { name: 'Home' },
            },//首页重定向
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/pages/Home.vue')
            },//首页
            {
                path: 'note',
                name: 'Note',
                component: () => import('@/pages/Note.vue')
            },//文章列表
            {
                path: 'note/:id',
                name: 'NoteDetail',
                component: () => import('@/pages/NoteDetail.vue')
            },//文章详情
            {
                path: 'tools',
                name: 'Tools',
                component: () => import('@/pages/Tools.vue')
            },//分类页
        ]
    }, {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFound.vue')//404页面
    } ]
const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router
