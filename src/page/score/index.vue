<template>
  <div>
    <div class="score-container">
      <header>
        <span class="score-num">{{score}}</span><span class="score">分！</span>
        <div class="result-tips">{{scoreTips}}</div>
      </header>
      <div class="share-btn" @click="showCover"></div>
      <div class="share-code">

      </div>
      <div class="share-cover" v-show="showHide" @click="showCover">
        sss
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'score',
    data() {
        return{
            showHide:false,
            score:0,
            scoreTips:'',
            scoreTipsArr:['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！'],
        }
    },
    methods:{
      showCover(){
          this.showHide = !this.showHide
      },
      getScoreTip(){
        if(this.score <= 50) {
          this.scoreTips = this.scoreTipsArr[0];
          return
        }
        if(this.score <= 70) {
          this.scoreTips = this.scoreTipsArr[1];
          return
        }
        if(this.score <= 80) {
          this.scoreTips = this.scoreTipsArr[2];
          return
        }
        if(this.score <= 90) {
          this.scoreTips = this.scoreTipsArr[3];
          return
        }
        if(this.score <= 100) {
          this.scoreTips = this.scoreTipsArr[4];
        }
      }
    },
    computed:{
//      score: state => state.score
    },
    components: {

    },
    created(){
      this.getScoreTip()
    }
  }

</script>

<style lang="less">
  .score-container{
    width: 100%;
    height:100%;
    position: relative;
    header{
      background: none;
      width: 100%;
      height:3rem;
      margin-top:2rem;
      text-align: center;

      .score-num{
        color: red;
        font-size: .7rem;
        line-height: 3rem;
      }
      .score{
        color: #333;
        font-size: .7rem;
        line-height: 3rem;
      }
    }
    .share-btn{
      width: 3rem;
      height:2rem;
      background: #a57c50;
      margin-top:3rem;
    }
    .share-cover{
      background: #333333;
      width: 100%;
      height:100%;
      position: absolute;
      left:0;
      top:0;
      color: #ffffff;
    }
  }
</style>
