<template>
  <div class="home">
    <titles class="title" @musicList='musicList'></titles>
    <content-all :musicLists='musicLists'></content-all>
  </div>
</template>

<script>
import Titles from './children/Title'
import ContentAll from './children/ContentAll'

export default {
  name:'Home',
  data(){
    return{
      musicLists:[]
    }
  },
  methods:{
    musicList(music){
      this.musicLists = music
      // console.log(this.musicLists);
      
    }
  },
  components:{
    Titles,
    ContentAll
  }
}
</script>

<style scoped>
  .home{
    width: 60%;
    height: 70%;
    position: fixed;
    left: calc(50% - 300px);
    top: 50%;
    margin-left: -600px;
    margin-top: -272px;
  }
</style>