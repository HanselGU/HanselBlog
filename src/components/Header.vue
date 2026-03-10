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
        if (activeRoute!=path) {
            router.push({ name: path })
            isScrolled.value=false
        }
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
    margin: 0 24px;
    height: 100%;
    background-color: white;
    width: calc(100% - 48px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.left-header {
    margin: 0 10px;
    display: flex;
    flex-direction: row;
}

.main-headerScrolled {
    box-shadow: 0 3px 8px rgba(19, 19, 22, 0.09);
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
    color: #1f1f1f;
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
    color: #1f1f1f;
    font-size: 32px;
    font-weight: 500;
    cursor: pointer; /* 鼠标变为手型 */
    animation: none; /* 默认无动画 */
    line-height: 32px;
    text-align: center;
    /*border: 1px solid #dee2e6*/
}


.route-header:hover {
    color: #0056b3;
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
    background-color: white;

}

.bg2 {
    position: absolute;
    top: 0;
    left: 12px;
    width: 12px;
    height: calc(100% - 12px);
    background-color: white;

}


.bg3 {
    position: absolute;
    top: 0;
    right: 12px;
    width: 12px;
    height: calc(100% - 12px);
    background-color: white;

}

.bg4 {
    position: absolute;
    top: 0;
    right: 0px;
    width: 12px;
    height: calc(100% - 24px);
    background-color: white;

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
    box-shadow: 0 3px 8px rgba(19, 19, 22, 0.09);
}
</style>