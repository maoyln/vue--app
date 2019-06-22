<template>
  <div class="content-box">
    <common-header :title="title"></common-header>
    <div class="edit-icon" @click="toEdit">
      <img src="../../../assets/imgs/u1349.png" height="20" width="25"/>
    </div>
    <div class="page-content">
      <div>
        <ul>
          <li>
            <span class="title">机会主题</span>
            <span class="value">机会主题显示</span>
          </li>
          <li>
            <span class="title">客户名称</span>
            <span class="value">客户名称显示</span>
          </li>
          <li>
            <span class="title">联系人</span>
            <span class="value">张三</span>
          </li>
          <li>
            <span class="title">联系电话</span>
            <span class="value"><a href="javascript:">18888888888</a></span>
          </li>
          <li>
          <span class="title">阶段</span>
          <span class="value">阶段显示</span>
        </li><li>
          <span class="title">客户状态</span>
          <span class="value">状态显示</span>
        </li>
          <li>
            <span class="title">电量</span>
            <span class="value">123.00  MWh</span>
          </li>
          <li>
            <span class="title">电价</span>
            <span class="value">123.00元</span>
          </li>
          <li class="postscript">
              <span class="title">其他</span>
          </li>
          <li class="other-value">
            备注文字显示备注文字显示备注文字显示备注文字显示备注文字显示备注文字显示
          </li>
          <li>
            <span class="title">创建人</span>
            <span class="value">李四</span>
          </li>
          <li>
            <span class="title">创建时间</span>
            <span class="value">时间显示</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      title: '查看销售机会'
    }
  },
  components: {
    commonHeader
  },
  computed: {
    newdata: function() {
      return this.data + 1
    }
  },
  methods: {
    toEdit() {
      this.$router.togo('/Customer/Opportunity/ModifyPage')
    },
    tohome() {
      this.$router.goBack()
    },
    add() {
      this.data++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.edit-icon{
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 99;
}
.page-content{
  height: 100%;

  div{
    ul{
      li{
        .h(85);
        .lh(85);
        .fs(35);
        border-bottom: 1px solid #eeeeee;
        background: #ffffff;
        .title{
          color: #666666;
          float: left;
          .ml(25)
        }
        .value{
          color: black;
          float: right;
          .mr(25)
        }
        a{
          color: #2A579A;
        }
      }
      .postscript{
        border-bottom: 0;
        // .title{
        // }
      }
      .other-value{
        .pl(25);
        .pr(50);
        .h(200);
        .lh(50);
        border-bottom: 5px solid #eeeeee;
        text-align: left !important;
        color: black;
      }
    }
  }
}
</style>
