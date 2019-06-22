<template>
  <div class="content-box">
    <!-- <common-header :title="title" :showmore="true"></common-header> -->
    <Calendar
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      v-on:isToday="clickToday"
      :markDateMore="markData"
    ></Calendar>
    <div>
      <div class="select" >
        <div class="selectDate">6/17</div>
      </div>
    </div>
    <div class="page-content">
      <!-- <h1>{{newdata}}</h1> -->
      <div>
        日程
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header';
import Calendar from 'vue-calendar-component';
import  selector from 'common/selector';

export default {
  data() {
    return {
      title: '详情',
      markData:[{date:'2019/6/21', className:"unmark"}, {date:'2019/6/23',className:"marked"}],
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
    Calendar,
    selector
  },
  computed: {
    // newdata: function() {
    //   return this.data + 1
    // }
  },
  methods: {
    tohome() {
      this.$router.goBack()
    },
    add() {
      this.data++
    },
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.wh_container{
  background-color: rgb(42, 87, 154);
   .wh_content_all{
     background-color: rgb(250, 250, 250)!important;
    .wh_top_changge{
      height: 1.33333333rem;
      background-color: rgb(42, 87, 154);
    }
    .wh_content{
      .wh_content_item{
        color: #000000;
      }
      // 当天
      .wh_isToday{
        background: #6495ED;
        border-radius: 100px;
      }
      // 选中
      .wh_chose_day{
        background: #cccccc;
        border-radius: 100px;
        // border-bottom: 1px solid #575757;
      }
    }
   }
}

.unmark{
    // background-color:#008000;
    color:#00EE00;
    border-radius: 10px;
}
.marked{
    // background-color:#FF3030;
    color:#FF0000;
    border-radius: 10px;
}

.select{width: 100%;height: 7%;border-top: 3px solid #eee;border-bottom: 1px solid #eee;
  .selectDate{border-bottom: 1px solid #eee;}
  div{border: none;outline:none;height: 100%;.lh(60);width: 100%;background: #fff; .fs(30);}
}
</style>
