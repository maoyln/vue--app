<template>
  <div class="content-box">
    <common-header :title="title" :showback="false"></common-header>
      <div class="page-content">
        <p>合作客户</p>
        <ul>
          <!-- 提供商business -->
          <li  @click="toDetail(1)">
            <img src="../../assets/imgs/u53.png" title="">
            <span>电源侧提供商</span>
          </li>
          <!-- 售电sell -->
          <li  @click="toDetail(2)">
            <img src="../../assets/imgs/u54.png" title="">
            <span>居间售电公司</span>
          </li>
          <!-- 用电企业electricity -->
          <li  @click="toDetail(3)">
            <img src="../../assets/imgs/u52.png" title="">
            <span>用电企业</span>
          </li>
        </ul>
        <p>潜在客户</p>
        <ul>
          <li  @click="toDetail(4)">
            <img src="../../assets/imgs/u53.png" title="" class="opcityimg">
            <span>电源侧提供商</span>
          </li>
          <li  @click="toDetail(5)">
            <img src="../../assets/imgs/u54.png" title="" class="opcityimg">
            <span>居间售电公司</span>
          </li>
          <li  @click="toDetail(6)">
            <img src="../../assets/imgs/u52.png" title="" class="opcityimg">
            <span>用电企业</span>
          </li>
        </ul>
        <p>销售机会</p>
        <ul>
          <li @click="toOpportunity">
            <img src="../../assets/imgs/u187.png" title="">
            <span>销售机会</span>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'

export default {
  data () {
    return {
      title: '客户信息',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),

    toDetail(flag) {
      let path ='/Customer/Cooperation/AreaList';
      if (flag <= 3) {
        path ='/Customer/Cooperation/AreaList';
      } else {
        path ='/Customer/Potential/AreaList';
      };
      let funcode = 'business';
      if (flag === 1) {
        funcode = 'business';     // 电源侧提供商
      } else if (flag === 2) {
        funcode = 'sell';         // 居间售电公司
      } else if (flag === 3) {
        funcode = 'electricity';  // 用电企业
      } else if (flag === 4) {
        funcode = 'business';     // 电源侧提供商
      } else if (flag === 5) {
        funcode = 'sell';         // 居间售电公司
      } else if (flag === 6) {
        funcode = 'electricity';  // 用电企业
      };
      this.$router.togo(path, {funcode: funcode})
    },

    //售电机会
    toOpportunity() {
      this.$router.togo('/Customer/Opportunity/IndexPage', {funcode: 'opportunity'})
    }
  },
  components: {
    commonHeader,
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .mb(98);background: #fff;.padding(40,30,0,30);box-sizing:border-box;
  p{
    font-size: 14px;width: 100%;text-align: left;
  }
  ul{display: flex;width: 100%;justify-content: space-between;.mt(30);.mb(45);
    li{width:30%;.b-radius(10);.border-solid(2,#000);.h(180);font-size: 14px;text-align: center;
      img{height: 22%;margin-top: 20%;margin-bottom: 5%;}
      .opcityimg{opacity: .5;}
      span{display: block;}
    }
  }
}
</style>
