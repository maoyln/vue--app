<template>
  <div class="content-box">
    <common-header :title="title" :showback="true"></common-header>
      <form action="" v-on:submit.prevent="">
        <mt-search
          v-model="searchValue"
          cancel-text="取消"
          placeholder="查找"
          @keyup.enter.native="handleSearch"
          :show="false"
        >
        </mt-search>
      </form>
    <div class="page-content">
      <mt-loadmore
        :top-method="handleLoadTop"
        :bottom-method="handleLoadBottom"
        :bottom-all-loaded="allLoaded"
        ref="loadmore"
        @top-status-change="handleTopChange"
      >
        <div>
          <ul>
            <li v-for="(item, index) in userInfoList" :key="index">
              <div class="task-userInfo-wrap" style=" margin: 5px 0;">
                <!-- 头像 -->
                <div class="headPortrait">
                  头像
                </div>
                <!-- 个人信息 -->
                <div class="user-info">
                  <div class="user-info-personal">
                    <span class="username">{{item.contactName}}</span>
                    <span class="personal">{{item.gender}}</span>
                    <span class="personal">{{item.position}}</span>
                  </div>
                  <div class="user-info-personal">
                    <span class="movephone">
                      <img src="../../assets/imgs/u1479.png" alt="">{{item.telephone}}
                    </span>
                    <span class="telephone">
                      <img src="../../assets/imgs/u1474.png" alt="">{{item.telephone}}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </mt-loadmore>
      <!-- <mt-button @click="todetail">footprints</mt-button> -->
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapState} from 'vuex';
import commonHeader         from 'common/common-header';
import { Indicator, Toast } from 'mint-ui';
import { addressBookApi }         from '../../api/addressBookApi'
export default {
  data () {
    return {
      title:       '通讯录',
      num:          0,
      searchValue:  '',
      list:         [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,],
      userInfoList: [
        {
          name:             'zhangs',
          contactName:      '张三',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '懂事长',
          gender:           '男',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:             'zhangs',
          contactName:      '李四',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '副董事长',
          gender:           '男',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:           'zhangs',
          contactName:    '李四',
          telephone:      '1436864169',
          fixedLine:      '10122233331',
          position:       '总经理',
          gender:         '女',
          enterpriseName: '企业名称',
          age:  12
        },
        {
          name:             'zhangs',
          contactName:      '张三',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '总经理',
          gender:           '女',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:             'zhangs',
          contactName:      '李四',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '总经理',
          gender:           '女',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:             'zhangs',
          contactName:      '李四',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '总经理',
          gender:           '女',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:             'zhangs',
          contactName:      '李四',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '总经理',
          gender:           '女',
          enterpriseName:   '企业名称',
          age:              12
        },
        {
          name:             'zhangs',
          contactName:      '李四',
          telephone:        '1436864169',
          fixedLine:        '10122233331',
          position:         '总经理',
          gender:           '女',
          enterpriseName:   '企业名称',
          age:              12
        }
      ],
      pageNumber:   1,
      pageSize:     5,
      topStatus:    '',
      allLoaded:    false,      // 是否可以上拉属性
      scrollMode:   'auto',
      haveMore:     true,

      test:         1,
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/AddressBook/Detail')
    },

    // 上拉刷新
    handleLoadTop() {
      console.log(1);
      // 加载更多数据
      this.allLoaded = false;         // 上拉刷新页面
      this.loadPageList();
      this.$nextTick(()=>{
        this.$refs.loadmore.onTopLoaded();
      })
    },

    // 下拉加载更多
    handleLoadBottom() {
      // 加载更多数据
      console.log(2);
      this.allLoaded = true;          // 若数据已全部获取完毕
      this.queryMore();
      this.$nextTick(()=>{
        this.$refs.loadmore.onBottomLoaded();
      })
    },

    handleTopChange() {
      console.log(3);
    },

    // 查询数据
    loadPageList() {
      this.userInfoList = [];
      Indicator.open({
        text:         '加载中...',
        spinnerType:  'fading-circle'
      });
      // 查询数据
      this.pageNumber = 1;
      // 请求操作
      const param = {
        searchValue:    this.searchValue,
        size:           this.pageSize,
        offset:         (this.pageNumber - 1) * this.pageSize + 1,
      }
      // 查找接口
      // addressBookApi.getAddressBookList(param).then(res => {
      //   console.log(res);
      //   if (res.code === '200') {
      //     if (res.data && res.data.lenght > 0) {
      //       this.userInfoList = res.data;
      //     } else {
      //       this.haveMore = false;
      //     }
      //     this.isHaveMore(this.haveMore);
      //   }
      // });
      // 成功(模仿加载中)
      setTimeout(() => {
        Indicator.close();
        this.userInfoList = [
          {
            name:             'zhangs',
            contactName:      '张三',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '懂事长',
            gender:           '男',
            enterpriseName:   '企业名称',
            age:              12
          },
          {
            name:             'zhangs',
            contactName:      '李四',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '副董事长',
            gender:           '男',
            enterpriseName:   '企业名称',
            age:              12
          },
          {
            name:           'zhangs',
            contactName:    '李四',
            telephone:      '1436864169',
            fixedLine:      '10122233331',
            position:       '总经理',
            gender:         '女',
            enterpriseName: '企业名称',
            age:  12
          },
          {
            name:             'zhangs',
            contactName:      '张三',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '总经理',
            gender:           '女',
            enterpriseName:   '企业名称',
            age:              12
          },
          {
            name:             'zhangs',
            contactName:      '李四',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '总经理',
            gender:           '女',
            enterpriseName:   '企业名称',
            age:              12
          },
          {
            name:             'zhangs',
            contactName:      '张三',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '总经理',
            gender:           '女',
            enterpriseName:   '企业名称',
            age:              12
          },
          {
            name:             'zhangs',
            contactName:      '李四',
            telephone:        '1436864169',
            fixedLine:        '10122233331',
            position:         '总经理',
            gender:           '女',
            enterpriseName:   '企业名称',
            age:              12
          }
        ];
      }, 2000)

    },

    // 查找更多
    queryMore() {
      this.test += 1;
      this.pageNumber = parseInt(this.pageNumber) + 1;
      const param = {
        searchValue:    this.searchValue,
        size:           this.pageSize,
        offset:         (this.pageNumber - 1) * this.pageSize + 1,
      }
      // 查找接口
      // addressBookApi.getAddressBookList(param).then(res => {
      //   console.log(res);
      //   if (res.code === '200') {
      //     if (res.data && res.data.lenght > 0) {
      //       this.userInfoList = [
      //         ...this.userInfoList,
      //         ...res.data,
      //       ];
      //     } else {
      //       this.haveMore = false;
      //     }
      //   }
      // });
      // 如果没有数据,则标书没有更多数据了
      this.userInfoList = [
        ...this.userInfoList,
        ...this.userInfoList,
      ];
      console.log(this.userInfoList);
      // 模仿接口
      if (this.test > 4) {
        this.haveMore = false;
      }
      this.isHaveMore(this.haveMore);
    },

    // 是否有更多
    isHaveMore(isHaveMore) {
      this.allLoaded = true;      // true是禁止上拉加载
      if (isHaveMore) {
        // isHaveMore 为true有下一页, false 没有下一页，默认为true，可以加载
        this.allLoaded = false;      // true是禁止上拉加载
      } else {
        Toast('没有更多了');
      }
    },

    // 回车键搜索（手机确定键）
    handleSearch() {
      console.log(this.searchValue);
      this.loadPageList();
    }
  },
  // 监听select搜索事件
  watch:{
    searchValue: function(newValue,oldValue) {
      console.log("newvs",newValue);
      console.log("oldvs",oldValue);
      if(!newValue){
        // 调用查询通讯录接口
        // this.getList();
      }
    }
  },
  components: {
    commonHeader
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  // .mb(98);
  z-index: 0;                             // 解决input搜索框mint-search-list覆盖内容
  -webkit-overflow-scrolling: touch;      // 解决ios滑动问题
}
.mint-search{
  max-height: 1.4rem;
}
.mint-search-list{
  display: none !important;
  max-height: 0rem;
}
.task-userInfo-wrap{
  // border-bottom: 1px solid #575757;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 1.6rem;
  padding: 0.37037rem;
  background-color: #ffffff;
  .headPortrait{
    width: 1.574074rem;
    height: 1.574074rem;
    border-radius: 50%;
    background: #95ABCD;
    color: #ffffff;
    font-size: 0.444444rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .user-info{
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-left: 0.37037rem;
    .user-info-personal{
      // border:1px solid #000;
      float:left;
      .username{
        font-size: 20px;
        float: left;
        margin: 3px 10px;
        color: rgb(51, 51, 51);
      }
      .personal{
        font-size: 15px;
        float: left;
        margin: 3px 10px;
        color: rgb(102, 102, 102);
      }
      .telephone,.movephone{
        font-size: 12px;
        float:left;
        margin: 3px 10px;
        color: rgb(102, 102, 102);
        img{.mr(5);}
      }
    }
  }
}
</style>
