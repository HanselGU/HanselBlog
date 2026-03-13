<template>
  <div class="Con">
    <div class="leftPart">
      <div>IP信息：{{IP}}</div>
      <div>地理位置：{{region}}</div>
      <div>经纬度：{{lonlat}}</div>
    </div>
    <div class="rightPart">
      <div>天气：{{weather}}</div>
      <div>温湿度：{{temhum}}</div>
      <div>风力：{{wind}}</div>
      <div>报告时间：{{repTime}}</div>
    </div>
  </div>
</template>

<script setup>
import {getIP, getWeather} from '@/api/api.js';
import {onBeforeMount, ref} from 'vue';
import {toolSign} from '@/stores/index.js'

const SIGN=toolSign()
const IP=ref('')
const region=ref('')
const lonlat=ref('')
const weather=ref('')
const temhum=ref('')
const wind=ref('')
const repTime=ref()

async function getIN() {
    try {
        SIGN.setSign(true)
        let res1=await getIP()
        let res2=await getWeather()
        IP.value=res1.ip
        region.value=`${res2.province} ${res2.city} ${res2.district}`
        lonlat.value=`${res1.longitude} & ${res1.latitude}`
        weather.value=res2.weather
        temhum.value=`${res2.temperature}℃ ${res2.humidity}%`
        wind.value=`${res2.wind_direction}${res2.wind_power}`
        repTime.value=res2.report_time
    } catch (error) {
        console.log('err', error)
        alert('请求失败');
    } finally {
        SIGN.setSign(false)
        // alert('请求失败');
    }
}

onBeforeMount(() => {
    getIN()
})
</script>

<style scoped>
.Con {
    width: 100%;
    padding: 20px 0;
    /* 文字排版优化 */
    line-height: 1.7;
    color: oklch(25% 0.025 240); /* 深一点的同色系文字，保证可读性 */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
</style>