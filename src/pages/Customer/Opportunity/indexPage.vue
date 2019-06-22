<template>
  <div class="content-box">
    <common-header :title="title"></common-header>
    <div class="add-button" @click="goEdit"><p>添加</p></div>
    <div class="page-content">
      <selector :listData="listData" @selectData="selectData"></selector>
      <!--<div class="select" @click="!isSelected">
        <p>所有状态</p>
        <div class="triangle"></div>
      </div>-->
      <div class="list">
        <ul>
          <li @click="todetail">
            <div class="client-name">
              <span>[客户名称]机会主题机会主题机会主题</span>
            </div>
            <div class="client-message">
              <span>200MWh,</span>
              <span>100元/MWh,</span>
              <span>前期沟通</span>
            </div>
            <div class="time">
              <span>2019-04-18 14:32</span>
              <span>张三</span>
            </div>
            <div class="client-status">
              <span>跟踪</span>
              <span> > </span>
            </div>
          </li>
        </ul>
<!--        <mt-cell-->
<!--          title="[客户名称]机会主题机会主题机会主题"-->
<!--          to=""-->
<!--          is-link-->
<!--          label="200MWh,100元/MWh,前期沟通 /br 2019-04-18 14:32 张三"-->
<!--          value="跟踪">-->
<!--        </mt-cell>-->
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header';
import  selector from 'common/selector';
export default {
  data() {
    return {
      isSelect:false,
      title: '销售机会',
      data: 0,
      listData:[
        '全部区域',
        '河北',
        '天津',
        '广东'
      ],
    }
  },
  components: {
    commonHeader,
    selector
  },
  computed: {
    newdata: function() {
      return this.data + 1
    }
  },
  methods: {
    selectData(data) {
      console.log('-----------');
      console.log(data);
    },
    goEdit(){
      this.$router.togo('/Customer/Opportunity/ModifyPage');
    },
    todetail() {
      this.$router.togo('/Customer/Opportunity/DetailPage');
    },
    tohome() {
      this.$router.goBack();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.add-button{
  .fs(32);
  .w(70);
  .h(50);
  color: #ffffff;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 99;
  p{
    width: 100%;
    height: 100%;
  };
}
.page-content {
  background: #fff;
  .select{
    .h(70);
    .fs(30);
    border-bottom: 3px solid rgba(121, 121, 121, 1);

    p{
      display: inline-block;
      .w(170);
      .lh(70);
    }
    .triangle{
      position: relative;
      top:4px;
      right: 9px;
      display: inline-block;
      width: 0;
      height: 0;
      border-width: 5px;
      border-style: solid;
      border-color: black  transparent transparent transparent;
    }
  }
  .list{
    ul{
      li{
        .h(170);
        border-bottom: 1px solid #eeeeee;
        .client-name{
          .mt(20);
          .h(50);
          .lh(50);
          .fs(32);
          .ml(20);
          span{
            float: left;
          }
        }
        .client-message{
          .h(50);
          .lh(50);
          .fs(26);
          span{
            float: left;
            .ml(20);
          }
        }
        .time{
          .fs(26);
          .h(50);
          .lh(50);
          span{
            float: left;
            .ml(20);
          }
        }
        .client-status{
          float: right;
          .mt(-86);
          .mr(30);
          .fs(26);
          span{
            .ml(20)
          }
        }
      }
    }
  }
}
</style>
