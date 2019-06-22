<template>
  <div class="content-box">
    <div class="header-box">
      <div class="left-icon">
        <span v-if="showback" @click="handleBack" class="icon-back"></span>
      </div>
      <div class="header-title">
        <span v-if="showinput">
          <div class="input-box">
            <span class="icon"></span>
            <input type="text" class="search" placeholder="搜索">
          </div>
        </span>
        <span v-if="!showinput">{{title}}</span>
      </div>
      <div class="right-icon">
        <span v-if="showmore" class="icon"></span>
      </div>
    </div>
    <div class="page-content">
      <div class="input-box">
        <span class="icon"></span>
        <input type="text" class="search" placeholder="搜索">
      </div>
      <mt-button @click="todetail">footprints</mt-button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex';
import commonHeader from 'common/common-header';
import cusInput     from 'common/cus-input'
export default {
  data () {
    return {
      title: '通讯录',
      num: 0,
      showinput:  true,
      showback:   true,
      showmore:   true,
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/AddressBook/Detail')
    }
  },
  components: {
    commonHeader
  },
  computed: {
    ...mapGetters([
      'number'
    ]),
    ...mapState({
      number: state => state.home.number
    }),
    handleBack() {
      this.$router.goBack()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .mb(98);
}
.header-box{
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  .h(100);
  .lh(100);
  background-color: @base-color;
  color: @base-header-color;
  .fs(@base-header-size);
  display: flex;
  z-index: 1;
  .left-icon{
    position: relative;
    flex: 1;
    .icon-back{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .left(25);
      .top(25);
      background-image: url("../../assets/imgs/w-back.svg");
      background-size: cover;
    }
  }
  .header-title{
    flex: 3;
    .input-box{
      position: relative;
      .icon{
        position: absolute;
        display: inline-block;
        .w(45);
        .h(45);
        top: 50%;
        .mt(-18);
        .left(-20);
        background-image: url("../../assets/imgs/search.svg");
        background-size: cover;
      }
      .search{
        .b-radius(8);
        .h(50);
        .lh(50);
        width: 100%;
        outline: none;
        .pl(50);
        .pt(5);
        .pt(5);
        .ml(-25);
        .fs(26);
      }
    }
  }
  .right-icon{
    position: relative;
    flex: 1;
    .icon{
      position: absolute;
      display: inline-block;
      .w(50);
      .h(50);
      .right(25);
      .top(25);
      background-image: url("../../assets/imgs/more.svg");
      background-size: cover;
    }
  }
}
</style>
