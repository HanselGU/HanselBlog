<template>
  <div id="loadingMask" class="loading-mask show">
    <!-- 小方块圆形加载动画容器 -->
    <div class="square-spinner">
      <div class="square" style="--rotate-deg: 0deg;"></div>
      <div class="square" style="--rotate-deg: 30deg;"></div>
      <div class="square" style="--rotate-deg: 60deg;"></div>
      <div class="square" style="--rotate-deg: 90deg;"></div>
      <div class="square" style="--rotate-deg: 120deg;"></div>
      <div class="square" style="--rotate-deg: 150deg;"></div>
      <div class="square" style="--rotate-deg: 180deg;"></div>
      <div class="square" style="--rotate-deg: 210deg;"></div>
      <div class="square" style="--rotate-deg: 240deg;"></div>
      <div class="square" style="--rotate-deg: 270deg;"></div>
      <div class="square" style="--rotate-deg: 300deg;"></div>
      <div class="square" style="--rotate-deg: 330deg;"></div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* ========== 遮罩层 + 小方块圆形跳动加载动画 ========== */
.loading-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: oklch(97% 0.02 240 / 0.85);
    /*border-radius: 10px;*/
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

.loading-mask.show {
    opacity: 1;
    pointer-events: auto;
}

/* 小方块加载动画容器（核心） */
.square-spinner {
    width: 60px;
    height: 60px;
    position: relative; /* 为小方块提供定位参考 */
}

/* 单个小方块样式 */
.square-spinner .square {
    position: absolute;
    top: 0;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px; /* 居中 */
    background-color: oklch(70% 0.05 240); /* 主色调 */
    border-radius: 2px; /* 轻微圆角，更柔和 */
    transform-origin: center 30px; /* 旋转原点：中心向下30px（圆形半径） */
    animation: square-jump 1.2s ease-in-out infinite;
}

/* 给每个小方块设置不同的旋转角度和动画延迟 */
.square-spinner .square:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: 0s;
}

.square-spinner .square:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: 0.1s;
}

.square-spinner .square:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: 0.2s;
}

.square-spinner .square:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: 0.3s;
}

.square-spinner .square:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: 0.4s;
}

.square-spinner .square:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: 0.5s;
}

.square-spinner .square:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: 0.6s;
}

.square-spinner .square:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: 0.7s;
}

.square-spinner .square:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: 0.8s;
}

.square-spinner .square:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: 0.9s;
}

.square-spinner .square:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: 1.0s;
}

.square-spinner .square:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 1.1s;
}

/* 小方块跳动动画关键帧（缩放+透明度变化） */
@keyframes square-jump {
    0%, 100% {
        transform: rotate(var(--rotate-deg)) scale(1);
        opacity: 1;
    }
    50% {
        transform: rotate(var(--rotate-deg)) scale(0.4);
        opacity: 0.5;
    }
}
</style>