<template>
  <div>
     <div class="center_con">
        <!-- 搜索歌曲列表 -->
        <div class='song_wrapper'>
          <ul class="song_list">
            <li v-for="(item,index) in musicLists" :key="index">
              <a href="javascript:;" @click='playMusic(item.id,item.name)'> 
              <b>{{item.name}}</b> 
              </a>
              <span v-show="item.mvid != 0" @click="playMv(item.mvid)"><i ref="music"></i></span>
              
            </li>
          </ul>
          <img src="~assets/img/line.png" class="switch_btn" alt="">
        </div>
        <!-- 歌曲信息容器 -->
        <div class="player_con" :class="{playing:isPlay}">
          <img src="~assets/img/player_bar.png" class="play_bar" />
          <!-- 黑胶碟片 -->
          <img src="~assets/img/disc.png" class="disc autoRotate" />
          <img class="cover autoRotate" v-if="srcImg" src='~assets/img/bg1.jpg' />
          <img class="cover autoRotate" v-else :src='musicImg' />
          <div class="musicName">{{name}}</div>
        </div>
        <!-- 评论容器 -->
        <div class="comment_wrapper">
          <h5 class='title'>热门留言</h5>
          <div class='comment_list'>
            <dl v-for="(item,index) in hotComments" :key="index">
              <dt><img :src="item.user.avatarUrl" alt=""></dt>
              <dd class="name">{{item.nickname}}</dd>
              <dd class="detail">
                {{item.content}}
              </dd>
            </dl>
          </div>
          <img src="~assets/img/line.png" class="right_line">
        </div>
      </div>
      <div class="audio_con">
        <audio ref='audio' :src='musicid' @play='play' @pause="pause" controls autoplay loop class="myaudio"></audio>
      </div>
      <div class="video_con" v-show="isShow" style="display: none;">
        <video  controls="controls" :src='mvurl'></video>
        <div class="mask" @click="mask"></div>
      </div>
  </div>
</template>

<script>
import {request} from '../../../network/request'

export default {
  name:'Content',
  props:{
    musicLists:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return{
      musicid:'',
      musicImg:'',
      srcImg:true,
      hotComments:[],
      isPlay:false,
      name:'',
      mvurl:'',
      isShow:false
    }
  },
  methods:{
    playMusic(musicId,name){
       request({
        url: '/song/url?id='+musicId
      }).then(res => {
       console.log(res);
       this.musicid = res.data[0].url
     },err => {})

    request({
        url: '/song/detail?ids='+musicId
      }).then(res => {
      //  console.log(res);
       this.musicImg = res.songs[0].al.picUrl
     },err => {})

    request({
        url: '/comment/hot?type=0&id='+musicId
      }).then(res => {
      //  console.log(res);
       this.hotComments = res.hotComments;
     },err => {})


      this.srcImg = false
      this.name = name
    },
    playMv(mvid){
      request({
        url: '/mv/url?id='+mvid
      }).then(res => {
      //  console.log(res);
       this.mvurl = res.data.url
     },err => {})
     
      this.isShow = true
      this.musicid = ''
      this.isPlay = false
    },
    play(){
      this.isPlay = true
    },
    pause(){
      this.isPlay = false
    },
    mask(){
      this.isShow = false
      this.mvurl = ''
    }
  }
}
</script>

<style scoped>
 @import '~assets/css/content.css';

</style>