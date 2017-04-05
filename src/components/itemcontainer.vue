<template>
    <div>
      <header class="top-tips">
        <span class="num-tip" v-if="fatherComponent == 'home'">{{level}}</span>
        <span class="num-tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
      </header>
      <div v-if="fatherComponent == 'home'">
        <router-link to="item" class="start button_style"></router-link>
      </div>

    </div>
</template>

<script>

 import { mapState, mapActions } from 'vuex'

export default {
    name: 'itemcontainer',
    components: {},
    created(){

    },
    props: ['fatherComponent'],
    data(){
      return {

      }
    },
    computed: mapState({
      level: state => state.level,
      itemNum: state => state.itemNum
    })
}

</script>

<style lang="less">
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
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
  .start{
    background-image: url("../images/1-4.png");
  }
</style>
