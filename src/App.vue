<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import '@/assets/css/index.css'
// import {useScale} from '@/stores/index.js';
import {debounce} from 'loadsh/function.js';
import {onMounted, onUnmounted, ref} from 'vue';

// const scaleCal=useScale()

/** * 窗口缩放适配函数：根据宽高比动态计算缩放因子
 * * 核心目标：宽屏合理缩小，非宽屏正常显示，极端宽屏限制最小缩放 */
let scale=0
const resize=() => {
    // 1. 定义标准尺寸与基准宽高比（设计稿参考尺寸）
    const standardWidth=1920;// 设计稿标准宽度
    const standardHeight=1000; // 设计稿标准高度
    const standardRatio=standardWidth/standardHeight; // 基准宽高比 = 1.92 //
// 2. 获取当前窗口实时宽高与实际宽高比
    const realWidth=window.innerWidth; // 窗口实际宽度（不含滚动条）
    const realHeight=window.innerHeight; // 窗口实际高度
    const realRatio=realWidth/realHeight; // 实际宽高比（越大越宽扁）
    // let scale; // 最终缩放因子，范围：0.3~1
    // 3. 定义关键比例阈值（控制缩放逻辑的边界）
    const minRatio=1920/1080; // 最小舒适比例（16:9）≈1.777，低于此为非宽屏
    const maxRatio=1920/900; // 最大舒适比例（21.3:9）≈2.133，高于此为宽屏
    const boundaryRatio=1920/300; // 极端宽屏边界（64:9）=6.4，超过此固定最小缩放 //
// 4. 核心缩放逻辑：分3种场景计算scale
    if (realRatio>=minRatio&&realRatio<=maxRatio) { // 场景1：屏幕比例在「舒适范围」内（16:9 ~ 21.3:9）
        scale=1; // 不缩放，保持设计稿尺寸
    } else {
        if (realRatio>standardRatio) { // 场景2：宽屏/超宽屏（实际比例 > 基准比例1.92）
            if (realRatio>=boundaryRatio) { // 子场景2.1：极端宽屏（比例 ≥6.4）→ 固定最小缩放
                scale=standardRatio/boundaryRatio; // 1.92/6.4 = 0.3（最小缩放阈值）
            } else { // 子场景2.2：普通宽屏（1.92 < 比例 <6.4）→ 混合缩放策略
// 步骤1：计算基础缩放（按高度、宽度分别计算，取最小值保证内容完整）
                const heightScale=realHeight/standardHeight; // 按高度适配的缩放比
                const widthScale=realWidth/standardWidth; // 按宽度适配的缩放比
                const baseScale=Math.min(heightScale, widthScale);
// 步骤2：限制最小缩放（避免内容过小，可根据需求调整minScale）
                const minScale=0.4; // 步骤3：按宽屏程度优化缩放（屏幕越宽，适当提高缩放比，抵消过度缩小）
                const ratioFactor=Math.min(realRatio/standardRatio, 3.0); // 宽屏程度（最大限制3倍，避免过度调整）
                const adjustedScale=baseScale*(1+(ratioFactor-1)*0.15); // 15%调整幅度，平衡缩放与可读性 // 最终缩放：取「优化后缩放」与「最小缩放」的最大值
                scale=Math.max(adjustedScale, minScale);
            }
        } else { // 场景3：非宽屏（实际比例 ≤1.92，如竖屏、正方形屏幕）
            scale=1; // 不缩放，避免内容压缩变形
        }
    } // 5. 存储缩放因子（供页面组件使用，Vue项目用store，原生可用全局变量）
    // scaleCal.setScale(scale);
}
const debounceResize=debounce(resize, 100)
onMounted(() => {
    resize()
    window.addEventListener('resize', debounceResize)
})
onUnmounted(() => {
    window.removeEventListener('resize', debounceResize)
})


</script>

<template>
  <!--  <div  class="main-div app-vbind">-->
  <div class="main-div ">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main-div {
    background-color: var(--color-bg);
    /*background-color: white;*/
    overflow: hidden;
    margin: 0 auto;
    /*background-color: oklch(21% .034 264.665);*/
    /*background-color: #101828;*/
    /*color: white;*/
    font-family: var(--font-sans);
}

.app-vbind {
    transform: v-bind("`scale(${scale})`");
    transform-origin: left top;
    transition: transform 0.3s ease;
}
</style>
