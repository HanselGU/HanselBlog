<template>
  <div class="Note">
    <div class="NoteCon">
      <div class="NoteCode">
        <div class="codeHeader">code & device</div>
        <div class="codeList">
          <div class="codeText" @click=" routePush(2)">
            <div class="textTitle">个人工作站搭建</div>
          </div>
          <div class="codeText" @click=" routePush(3)">
            <div class="textTitle">使用vitepress和markdownIT的体验</div>
          </div>
        </div>
      </div>
      <div class="NoteLife">
        <div class="noteHeader">life</div>
        <div class="noteList">
          <div class="codeText" @click=" routePush(1)">
            <div class="textTitle">成都游玩体验</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import {computed, onBeforeMount, onMounted, ref} from 'vue';
import router from '@/router/index.js';
// import {mdData} from '@/stores/index.js';
// const MD=mdData().mdArray
// console.log('MD', MD.mdArray[0].inner)
const mdArray=ref([
    {
        name: '成都游玩体验',
        id: 1,
        type: 'life'
    }, {
        name: '个人工作站搭建',
        id: 2,
        type: 'device'
    }, {
        name: '使用vitepress和markdownIT的体验',
        id: 3,
        type: 'code'
    } ])
const routePush=(id) => {
    let params={
        id: id
    }
    router.push({
        name: 'NoteDetail',
        state: { params }
    })
}
onBeforeMount(() => {

})
onMounted(() => {

})
</script>

<style scoped>
.Note {
    width: 100%;
    height: 100%;
    padding: 160px 0;

}

.NoteCon {
    height: 1000px;
    width: 800px;
    margin: 0 auto;
    border-radius: 15%;
    border: 3px #1f1f1f dotted;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.NoteCode {
    margin-bottom: 80px;
    width: 60%;
}

.codeHeader {
    color: #1f1f1f;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
}

.codeList {
    display: flex;
    flex-direction: column;
}

.codeText {
    margin-bottom: 16px;
    border-bottom: 0.7px #1f1f1f solid;
}

.NoteLife {
    width: 60%;
}

.noteHeader {
    color: #1f1f1f;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
}

.noteList {
    display: flex;
    flex-direction: column;
}

.textTitle {
    color: #1f1f1f;
    font-size: 20px;
}

.textTitle:hover {
    color: #0056b3;
    cursor: pointer; /* 鼠标变为手型 */
}
</style>