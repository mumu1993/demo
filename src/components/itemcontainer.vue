<template>
    <div>
      <header class="top-tips">
        <span class="num-tip" v-if="fatherComponent == 'home'">{{level}}</span>
        <span class="num-tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
      </header>
      <div v-if="fatherComponent == 'home'">
        <img src="../images/1-2.png" alt="" class="home-logo">
        <router-link to="item" class="start button_style"></router-link>
      </div>
      <div v-if="fatherComponent == 'item'">
        <div class="item-container">
          <div class="item-list-container" v-if="this.$store.state.itemDetail.length > 0">
            <p>{{itemDetail[itemNum -1].topic_name}}</p>
            <ul>
              <li v-for="(item, index) in itemDetail[itemNum - 1].topic_answer"></li>
            </ul>

          </div>

        </div>
      </div>
    </div>
</template>

<script>

 import { mapState, mapActions } from 'vuex'

export default {
    name: 'itemcontainer',
    components: {},
    methods: {

    },
    created(){

    },
    props: ['fatherComponent'],
    data(){
      return {

      }
    },
    computed: mapState({
      level: state => state.level,
      itemNum: state => state.itemNum,
      itemDetail: state => state.itemDetail
    })
}

</script>

<style lang="less">
  html{
    width: 100%;
    height:100%;
  }
  body{
    background: url("../images/1-1.jpg");
    width: 100%;
    height:100%;
    background-size: 100% 100%;
  }
  header{
    position: absolute;
    height:7.35rem;
    width: 3.25rem;
    top:-3rem;
    right:1.6rem;
    background: url("../images/WechatIMG2.png") no-repeat 100% 100%;
    .num-tip{
      position: absolute;
      left: .9rem;
      bottom: .6rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.5rem;
      font-family: '黑体';
      font-weight: 600;
      color: #a57c50;
      text-align: center;

    }
  }
  .item-container{
    background-image: url('../images/2-1.png');
    background-size: 100% 100%;
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    .item-list-container{
      position: absolute;
      height: 7.0rem;
      width: 8.0rem;
      top: 2.4rem;
      left: 3rem;
      -webkit-font-smoothing: antialiased;
    }
  }
  .home-logo{
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .to-item{
    width: 10px;
    height: 10px;
  }
  .button_style{
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.2rem;
    background-repeat: no-repeat;
  }
  .start{
    background-image: url("../images/1-4.png");
  }
</style>
