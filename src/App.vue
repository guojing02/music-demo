<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import Home from './views/home/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style scoped>
 @import '~assets/css/base.css';
 #app{
   position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("assets/img/bg.jpg") no-repeat;
  background-size: 100% 100%;
 }
</style>
