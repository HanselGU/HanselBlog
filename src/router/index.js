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
                component: () => import('@/pages/Note.vue'),

            },//文章列表
            {
                path: 'article/:id',
                name: 'NoteDetail',
                component: () => import('@/pages/NoteDetail.vue')
            },//文章详情
            {
                path: 'tools',
                name: 'Tools',
                component: () => import('@/pages/Tools.vue'),
                children: [
                    {
                        path: 'bing',
                        name: 'BING',
                        component: () => import('@/components/BING.vue')
                    }, {
                        path: 'ip',
                        name: 'IP',
                        component: () => import('@/components/IP.vue')
                    }, {
                        path: 'kfc',
                        name: 'KFC',
                        component: () => import('@/components/KFC.vue')
                    }, {
                        path: 'hotBoard',
                        name: 'HotBoard',
                        component: () => import('@/components/HotBoard.vue')
                    }, {
                        path: 'star',
                        name: 'STAR',
                        component: () => import('@/components/STAR.vue')
                    }, {
                        path: 'eleShow',
                        name: 'EleShow',
                        component: () => import ('@/components/EleShow.vue')
                    } ]
            },//分类页
        ]
    }, {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'Home' }, // name: 'NotFound',
        // component: () => import('@/pages/NotFound.vue')//404页面
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
