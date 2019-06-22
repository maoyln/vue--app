<template>
  <div class="content-box">
    <common-header :title="title" :showmore="true"></common-header>
    <div class="page-content">
      <ul>
        <li><span>所在区域</span><span>所在区域</span></li>
        <li><span>公司简称</span><span>公司简称</span></li>
        <li><span>公司名称</span><span>公司名称</span></li>
        <li><span>公司电话</span><span>公司电话</span></li>
        <li><span>电源侧提供等级</span><span>电源侧提供等级</span></li>
        <li><span>发电类型</span><span>发电类型</span></li>
        <li><span>经度</span><span>经度</span></li>
        <li><span>纬度</span><span>纬度</span></li>
        <li><span>公司所在地</span><span>公司所在地</span></li>
        <li><span>详细地址</span><span>详细地址</span></li>
        <li><span>公司标识</span><span>公司标识</span></li>
      </ul>
      <p>联系人信息</p>
      <ul>
        <li><span>姓名</span><span>姓名</span></li>
        <li><span>联系电话1</span><span>联系电话1</span></li>
        <li><span>联系电话2</span><span>联系电话2</span></li>
        <li><span>备注</span><span>备注</span></li>
        <li v-show="this.business !== 'business'"><span>电子邮箱</span><span>maoyali@163.com</span></li>
        <li v-show="this.business !== 'business'"><span>邮政编码</span><span>邮政编码</span></li>
        <li v-show="this.business !== 'business'"><span>传真号码</span><span>传真号码</span></li>
      </ul>
      <p>
        <span>客户状态：</span>
        <button v-show="this.business === 'electricity'" @click="todetail">查看拜访记录</button>
      </p>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      funcode:  '',               // 页面标识 business电源侧提供商，sell居间售电公司，electricity用电企业
      title: this.$route.query.funcode === 'business' ? '查看电源侧提供商信息' : this.$route.query.funcode === 'sell' ? '查看居间售电公司信息' : '查看用电企业信息',

    }
  },
  created() {
    this.business = this.$route.query.funcode;
  },
  components: {
    commonHeader
  },
  computed: {

  },
  methods: {
    tohome() {
      this.$router.goBack()
    },
    todetail() {
      this.$router.togo('/Customer/Cooperation/VisitRecords', {funcode: this.$route.query.funcode});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.content-box{background: #fff;
  p{background: #eee;.padding(30,30,30,30);
    span{display: block;.lh(60)}
    button{width: 40%;.h(60);background: #fff;outline: none;border:1px solid #000;border-radius: 5px;.margin(20,20,20,20)}
  }
  ul{width: 100%;
    li{width: 100%;.padding(30,30,30,30);border-bottom: 2px solid #eee;display: flex;justify-content: space-between;box-sizing: border-box;}
  }
}
</style>
