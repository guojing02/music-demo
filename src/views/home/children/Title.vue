<template>
  <div>
    <div class="titles">
      <span><i>Happyday</i></span>
      <div class="search">
      <img src="~assets/img/zoom.png" alt="">
      <input type="text" placeholder="华晨宇" v-model="search"
      @keyup.enter='searchMusic'>
      </div>
    </div>
  </div>
</template>

<script>
import {request} from '../../../network/request'

export default {
  name:'Title',
  data(){
    return{
      search:null,
      musicList:[]
    }
  },
  methods:{
    searchMusic(){
      request({
        url: '/search?keywords='+this.search
      }).then(res => {
      //  console.log(res);
       this.musicList = res.result.songs
       this.$emit('musicList',this.musicList)
     },err => {})
    }
  }
}
</script>

<style scoped>
  .titles{
    height: 60px;
    background-image: -webkit-linear-gradient(left,#e18091 0,#363658 70%);
    border-image: -webkit-linear-gradient(left,#e18091 0,#363658 100%);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 11;
  }
  .title span{
    font-size: 30px;
    color: #fff;
    margin-left: 20px;
  }
  .search{
    position: relative;
    left: -3%;
  }
  .title img {
    position: absolute;
    right: 4%;
    bottom: 16%;
  }
  .title input{
    border: none;
    border-radius: 20px;
    height: 30px;
    width: 300px;
    padding-left: 12px;
    outline-color: invert ;
	outline-style: none ;
	outline-width: 0px ;
	border: none ;
	border-style: none ;
	text-shadow: none ;
	-webkit-appearance: none ;
	-webkit-user-select: text ;
	outline-color: transparent ;
	box-shadow: 3px 5px 6px 2px;
  }
</style>