<template>
  <!-- 开屏加载动画容器：v-show控制显示/隐藏 -->
  <div
          v-show="isLoading"
          :class="{ 'loader-fade-out': !isLoading }"
          class="loader-container"
  >
    <!-- 加载动画核心元素 -->
    <div class="loader spinner clip-sm-4">
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'

// 控制加载动画显示/隐藏的响应式变量
const isLoading=ref(true)

// 页面加载完成后隐藏动画
const hideLoader=() => {
    // 先标记为false（触发淡出动画），动画结束后完全隐藏
    isLoading.value=false
    // 动画时长1s，这里延迟确保动画完成后清理DOM（可选）
    setTimeout(() => {
        isLoading.value=false // 双重保险
    }, 2000)
}

// 监听页面加载完成事件
onMounted(() => {
    if (document.readyState==='complete') {
        setTimeout(hideLoader, 1000)
    } else {
        window.addEventListener('load', () => {
            setTimeout(hideLoader, 1000)
        })
    }
    setTimeout(hideLoader, 5000)
})
onUnmounted(() => {
    window.removeEventListener('load', () => {})
})
</script>

<style scoped>
.spinner {
    width: 40px;
    height: 40px;
    background-color: black;
    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@keyframes sk-rotateplane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}

.clip-sm-4 {
    clip-path: polygon(0px 12px, 6px 12px, 6px 6px, 12px 6px, 12px 0, calc(100% - 12px) 0, calc(100% - 12px) 6px, calc(100% - 6px) 6px, calc(100% - 6px) 12px, 100% 12px, 100% calc(100% - 12px), calc(100% - 6px) calc(100% - 12px), calc(100% - 6px) calc(100% - 6px), calc(100% - 12px) calc(100% - 6px), calc(100% - 12px) 100%, 12px 100%, 12px calc(100% - 6px), 6px calc(100% - 6px), 6px calc(100% - 12px), 0px calc(100% - 12px));
}

.loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: all 0.8s ease-out; /* 淡出动画过渡 */
}

.loader-fade-out {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    pointer-events: none; /* 隐藏后不响应点击 */
}
</style>