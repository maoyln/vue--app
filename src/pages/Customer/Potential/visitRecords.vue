<template>
  <div class="content-box">
    <common-header :title="title" :showmore="true"></common-header>
    <div class="page-content">
      <h3>合作客户</h3>
      <ul>
        <li v-for="(item,index) in mooklist" :key="index">
          <p class="top"><span>亚立 18888888888</span><span>2019/05/17</span></p>
          <p class="middle">达成意向内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容内容描述内容内容描述内容内容描述内容内容</p>
          <p class="bottom">负责人：</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import commonHeader from 'common/common-header'
export default {
  data() {
    return {
      title: '详情',
      data: 0,
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
              ]
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
    tohome() {
      this.$router.goBack()
    },
    add() {
      this.data++
    }
  }
}
</script>

<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.content-box{background: #fff;
  h3{border-bottom: 3px solid #eee;.lh(80)}
  ul{width: 100%;
    li{width: 100%;.padding(30,30,30,30);border-bottom: 1px solid #eee;box-sizing: border-box;
      .top{display: flex;justify-content: space-between;}
      .middle{text-align: left;.margin(25,0,25,0)}
      .bottom{text-align: left;}
    }
  }
}
</style>
