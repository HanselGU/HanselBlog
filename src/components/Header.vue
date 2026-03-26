<template>
  <div
          :class="[isScrolled ?' HeaderPosition' : 'Header']">
    <div :class="[isScrolled ?' scrolled' : 'bg-scrolled']" class="bg1 "></div>
    <div :class="[isScrolled ?' scrolled' : 'bg-scrolled']" class="bg2"></div>
    <div :class="[isScrolled ?' scrolled ' : 'main-headerScrolled']" class="main-header ">
      <div class="left-header">
        <div class="headImg">
          <img alt="" class="round-image" src="../assets/img/head.jpg">
        </div>
        <div class="headText">HanselRoot</div>
      </div>
      <div class="right-header">
        <div class="headRoute">
          <div v-for="(item, index) in routesArray"
               :key="index"
               class="route-header"
               @click="routePush(item.path)">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <div :class="[isScrolled ?' scrolled' : 'bg-scrolled']" class="bg3"></div>
    <div :class="[isScrolled ?' scrolled' : 'bg-scrolled']" class="bg4"></div>
  </div>
</template>

<script setup>

import {onMounted, onUnmounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const router=useRouter()
const route=useRoute()
let activeRoute=route.name
// console.log(route.name)
let isScrolled=ref(true)
//true 未滚动
const handleScroll=() => {
    if (activeRoute!='Home') {
        isScrolled.value=false
    } else {
        // 滚动超过 50px 时改变导航栏背景
        isScrolled.value=window.scrollY<120
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    if (activeRoute!='Home') {
        isScrolled.value=false
    }
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const routesArray=ref([
    {
        name: 'Home',
        path: 'Home'
    }, {
        name: 'Note',
        path: 'Note'
    }, {
        name: 'Tools',
        path: 'Tools'
    } ])
const routePush=(path) => {

    if (path=='Home') {
        isScrolled.value=true
        router.push({ name: path })
    } else {
        // if (activeRoute!=path) {
        router.push({ name: path })
        isScrolled.value=false
        // }
    }
    activeRoute=path
}

</script>

<style scoped>
.scrolled {
    background-color: rgba(255, 255, 255, 0) !important; /* 白色，50% 透明度 */
}

.HeaderPosition {
    position: absolute;
    top: 0;
    opacity: 1;
    width: 100%;
    height: 80px;

    z-index: 1000;
}

.Header {
    opacity: 1;
    width: 100%;
    height: 80px;

    position: fixed;
    z-index: 1000;
    top: 0;
    animation: slideFromTop 0.5s ease-out;
}

@keyframes slideFromTop {
    0% {
        transform: translateY(-100%);
    }
    100% {
        transform: translateY(0);
    }
}


.main-header {
    /* 满屏宽度用于匹配两侧锯齿小方块 */
    margin: 0 24px;
    height: 100%;
    background-color: var(--color-surface);
    width: calc(100% - 48px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    transition: box-shadow var(--transition-med) ease;
}

.left-header {
    margin: 0 10px;
    display: flex;
    flex-direction: row;
}

.main-headerScrolled {
    box-shadow: var(--shadow-sm);
}

.headImg {
    width: 46px;
    height: 46px;
}

.round-image {
    width: 100%; /* 设置图片宽度 */
    height: 100%; /* 设置图片高度 */
    border-radius: 50%; /* 设置圆角半径为50%，产生圆形效果 */
    overflow: hidden; /* 隐藏超出圆形边界的部分 */
}

.headText {
    font-family: "Doto", sans-serif;
    font-size: 32px;
    color: var(--color-text);
    letter-spacing: -0.06em;
    font-weight: 800;
    text-transform: uppercase;
    margin-left: 36px;
}

.right-header {
    height: 100%;
    margin-right: 24px;

}

.headRoute {
    height: 100%;
    width: 400px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.route-header {
    width: 100px;
    height: 32px;
    margin: 0 10px;
    color: var(--color-text);
    font-size: 32px;
    font-weight: 500;
    cursor: pointer; /* 鼠标变为手型 */
    animation: none; /* 默认无动画 */
    line-height: 32px;
    text-align: center;
    /*border: 1px solid #dee2e6*/
    transition: color var(--transition-fast) ease;
}


.route-header:hover {
    color: var(--color-primary);
    animation: moveLeft 0.5s ease;
}

@keyframes moveLeft {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-20%); /* 向左移动20% */
    }
    100% {
        transform: translateX(0);
    }
}

.bg1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: calc(100% - 24px);
    background-color: var(--color-surface);

}

.bg2 {
    position: absolute;
    top: 0;
    left: 12px;
    width: 12px;
    height: calc(100% - 12px);
    background-color: var(--color-surface);

}


.bg3 {
    position: absolute;
    top: 0;
    right: 12px;
    width: 12px;
    height: calc(100% - 12px);
    background-color: var(--color-surface);

}

.bg4 {
    position: absolute;
    top: 0;
    right: 0px;
    width: 12px;
    height: calc(100% - 24px);
    background-color: var(--color-surface);

}

.bg-scrolled::after {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    z-index: -1;
    box-shadow: var(--shadow-sm);
}

@media (max-width: 700px) {
    .headText {
        font-size: 26px;
        margin-left: 18px;
    }
    .route-header {
        width: 80px;
        margin: 0 6px;
        font-size: 22px;
        line-height: 22px;
        height: 22px;
    }
    .headRoute {
        width: 300px;
    }
}
</style>