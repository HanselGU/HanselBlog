<template>
  <div class="main-layout">
    <Loader></Loader>
    <div class="header">
      <Header/>
    </div>
    <div class="layout-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
// import {ref} from 'vue';
import {onMounted} from 'vue';
import Loader from '@/components/Loader.vue';


</script>

<style scoped>
.main-layout {
    display: flex;
    position: relative;
    flex-direction: column;
    /*height: 100vh;*/
    min-height: 100vh;
}

.header {
    position: relative;
    width: 100%;
}

.layout-content {
    flex: 1;
    width: 100%;
    min-height: calc(100vh + 120px);
    /*margin: 0 20vw;*/
}

.container {
    width: min(var(--content-width), calc(100% - 32px));
    min-height: 100%;
    margin: 0 auto;
}

.footer {
    position: relative;
    width: 100%;
}

/*@media (max-width: 1200px) {*/
/*    .container {*/
/*        width: 900px;*/
/*    }*/
/*}*/

/*@media (max-width: 900px) {*/
/*    .container {*/
/*        width: 100% !important;*/
/*    }*/
/*}*/

@media (max-width: 600px) {
    .container {
        width: calc(100% - 20px);
    }
}
</style>