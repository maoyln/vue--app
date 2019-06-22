<template>
  <div class="content-box">
    <common-header :title="title"></common-header>
    <div class="finish-button" @click="finishEdit"><p>完成</p></div>
    <div class="page-content">
      <div class="list">
        <div>
          <p>机会主题*</p>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <p>客户名称*</p>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <p>联系人*</p>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <p>联系电话*</p>
          <input type="text" placeholder="请输入">
        </div>
        <div>
          <p>阶段*</p>
          <p class="selector">请选择   ></p>
        </div>
        <div>
          <p>阶段*</p>
          <p class="selector">请选择   ></p>
        </div>
        <div>
          <p>电量*</p>
          <input class="electric-quantity" type="text" placeholder="请输入">
          <p class="unit1">MWh</p>
        </div>
        <div>
          <p>电价*</p>
          <input class="electricity-prices" type="text" placeholder="请输入">
          <p class="unit2">元</p>
        </div>
        <div class="other">
          <p>其他</p>
          <textarea name="other" id="" rows="4" placeholder="请输入" maxlength="255"></textarea>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      title: '编辑添加销售机会',
      data: 0
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
    finishEdit(){
      this.$router.goBack()
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
.finish-button{
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
.page-content{
  overflow: hidden;
    .list{
      background: #ffffff;
      div{
        z-index: 9;
        border-bottom: 1px solid #eeeeee;
        .h(100);
        p{
          .lh(100);
          display: inline-block;
          .w(200);
          .fs(32);
          .ml(25);
          text-align: left;
          color: #666666;
        }
        input{
          outline: none;
          .w(490);
          display: inline-block;
          text-align: right;
          height: 95%;
          .fs(30);
        }
        .unit1{
          .w(80);
          .ml(0);
          color: #333333;
        }
        .unit2{
          .w(20);
          .ml(0);
          color: #333333;
        }
        .electric-quantity{
          .w(400);
        }
        .electricity-prices{
          .w(460);
        }
        .selector{
          color: #999999;
          .w(490);
          display: inline-block;
          text-align: right !important;
          height: 100%;
          .fs(30);
          .ml(0);
        }
      }
      .other{
        color: #666666;
        text-align: left;
        .pr(25);
        border: none;
        p{
          width: 100%;
          .fs(32);
          .ml(37);
          text-align: left;
          color: #666666;
        }
        textarea{
          .fs(30);
          color: #000000;
          .pl(37);
          outline: none;
          width: 100%;
          border: none;
        }
      }
    }
  }
//input框的默认字体颜色
input::-webkit-input-placeholder { /* WebKit browsers */
  color:#999999;
}
input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#999999;
  opacity:  1;
}
input::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#999999;
  opacity:  1;
}
input:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:  #999999;
}

  //文本框的默认字体颜色
textarea::-webkit-input-placeholder { /* WebKit browsers */
  color:#999999;
}
textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:#999999;
  opacity:  1;
}
textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:#999999;
  opacity:  1;
}
textarea:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:  #999999;
}
</style>
