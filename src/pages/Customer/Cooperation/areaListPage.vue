<template>
  <div class="content-box">
    <common-header :title="title" :showmore="false"></common-header>
    <div class="page-content">
      <div class="select" >
        <selector :listData="listData" @selectData="selectData" style=""></selector>
      </div>
      <mt-loadmore
        :top-method="handleLoadTop"
        :bottom-method="handleLoadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        @top-status-change="handleTopChange"
      >
        <ul>
          <li v-for="(item,index) in mooklist" :key='index' @click="todetail">
            <div class="left">
              <p><span class="marginright">[{{item.province}}]</span><span>{{item.company}}</span></p>
              <p><span class="marginright">{{item.person}}</span><span class="marginright">{{item.phone}}</span>
                <span :class="$route.query.funcode === 'electricity' ? '' : 'hideDiv'">用电量：</span>
              </p>
            </div>
            <div class="right">{{item.status}}&nbsp;&nbsp;></div>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header';
import  selector from 'common/selector';
export default {
  data() {
    return {
      funcode:  '',       // 页面标识 business电源侧提供商，sell居间售电公司，electricity用电企业
      title: this.$route.query.funcode === 'business' ? '电源侧提供商' : this.$route.query.funcode === 'sell' ? '居间售电公司' : '用电企业',
      data: 0,
      listData:[
        '全部区域',
        '河北',
        '天津',
        '广东'
      ],
      mooklist:[
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'启用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
        {province:'河北',company:'宜春售电',person:'毛亚立',phone:'18888888888',status:'停用'},
      ],

      pageNumber:   1,
      pageSize:     5,
      topStatus:    '',
      allLoaded:    false,      // 是否可以上拉属性
      scrollMode:   'auto',
      haveMore:     true,
    }
  },
  components: {
    commonHeader,
    selector
  },
  created() {
    this.business = this.$route.query.funcode;
  },
  computed: {
  },
  methods: {
    tohome() {
      this.$router.goBack()
    },
    add() {
      this.data++
    },
    todetail() {
      this.$router.togo('/Customer/Cooperation/Detail', {funcode: this.business});
    },

    // 上拉刷新
    handleLoadTop(event) {
      console.log(event);
      console.log(1);
      // 加载更多数据
      this.allLoaded = false;         // 上拉刷新页面
      this.$nextTick(()=>{
        this.$refs.loadmore.onTopLoaded();
      })
    },

    // 下拉加载更多
    handleLoadBottom() {
      // 加载更多数据
      console.log(2);
      this.allLoaded = true;          // 若数据已全部获取完毕
      this.$nextTick(()=>{
        this.$refs.loadmore.onBottomLoaded();
      })
    },

    handleTopChange() {
      console.log(3);
    },
  }
}
</script>

<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{background: #fff;
  .select{width: 100%;height: 6%;
  }
  ul{width: 100%;height: 94%;overflow: auto;
    li{display: flex;justify-content: space-around;.h(110);border-bottom: 1px solid #ccc;font-size: 12px;width:100%;.padding(20,20,20,20);box-sizing:border-box;
      .left{width: 80%;height: 100%;text-align:left;
        p{.lh(40);
          .marginright{.mr(20)}
        }
      }
      .right{width: 20%;height: 100%;text-align:right;.lh(60)}
    }
  }
  .hideDiv{
    display: none;
  }
}
</style>
