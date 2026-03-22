<template>
  <div class="Note">
    <div class="NoteCon">
      <div class="NoteCode">
        <div class="codeHeader">code & device</div>
        <div class="codeList">
          <div v-for="item in mdArray.codeList" :id="item.id" class="codeText" @click=" routePush(item.id)">
            <div class="textTitle">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="NoteLife">
        <div class="noteHeader">life</div>
        <div class="noteList">
          <div v-for="item in mdArray.lifeList" :id="item.id" class="codeText" @click=" routePush(item.id)">
            <div class="textTitle">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import {computed, onBeforeMount, onMounted, ref} from 'vue';
import router from '@/router/index.js';
import {mdList} from '@/stores/mdData.js';

const mdArray=ref(mdList())
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