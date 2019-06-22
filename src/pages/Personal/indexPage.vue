<template>
  <div class="content-box">
    <!-- <common-header :title="title" :showback="false"></common-header> -->
    <div class="page-content">
      <div class="address-book">
        <mt-button type="default" @click.native="handleAddressBook">
          <img src="../../assets/imgs/addressBook.png" height="20" width="20"/>
          通讯录
        </mt-button>
      </div>
      <div class="my-message">
        <div class="head-picture">
          <div class="back-img">
            <img src="../../assets/imgs/u1554.png" height="100" width="100"/>
          </div>
         <div class="personal-img">
           <img src="../../assets/imgs/u1555.png" height="48" width="44"/>
         </div></div>
        <div class="my-name">
          <div class="personal-name">
            <p>张三三</p>
          </div>
          <div class="position-name">
            <p>总经理</p>
          </div>
        </div>
      </div>
      <div class="account-name">
        <p>账户名：zhangsansan</p>
      </div>
      <div class="exit-button">
        <!-- <button  click="handleLogout"> -->
        <mt-button type="default" @click.native="handleLogout">
          <img src="../../assets/imgs/u1573.png" height="27" width="30"/>
          退出登录
        </mt-button>
        <!-- </button> -->
      </div>
      <div class="version-number">
        <p>APP版本：V1.0</p>
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations, mapGetters, mapState} from 'vuex'
import commonHeader from 'common/common-header'
export default {
  data () {
    return {
      title: '个人中心',
      num: 0
    }
  },
  created() {},
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    todetail() {
      this.$router.togo('/Personal/Detail')
    },

    handleLogout() {
      this.$router.push({path: '/login'});
    },
    // handleAddressBook
    handleAddressBook() {
      this.$router.togo('/addressBook');
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
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
.page-content{
  .mb(98);
  background-color: rgba(42,87,154,1);
  width: 100%;
  height:100%;
  display: flex;
  justify-content: center;
  .address-book{
    height: 1.4rem;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0.5rem;
    right: -3rem;
    button{
      border-radius: 45px;
      background: #ffffff;
      width: 28%;
      .h(80);
      .fs(30);
      color: rgb(42, 87, 154);
      img{
        float: left;
        .ml(5);
      }
    }
  }
  .my-message{
    display: flex;
    justify-content: center;
    position: absolute;
    top: 3rem;
    .head-picture{
      .back-img{
        float: left;
        height: 100px;
        width: 100px;
      }
      .personal-img{
        position: relative;
        top:-74px;
        left: 0;
      }
    }
    .my-name{
      .ml(60);
      .mt(25);
      .personal-name{
        .fs(50);
        p{
          color: #ffffff;
        }
      }
      .position-name{
        .mt(20);
        float: left;
        .fs(35);
        p{
          color: #ffffff;
        }
      }
    }
  }
  .account-name{
    position: absolute;
    top: 6.5rem;
    .fs(35);
    p{
      color: #ffffff;
    }
  }
  .exit-button{
    height: 1.4rem;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 11rem;
    button{
      border-radius: 5px;
      background: #ffffff;
      width: 60%;
      .h(130);
      .fs(40);
      color: rgb(42, 87, 154);
      img{
        float: left;
        .ml(40);
      }
    }
  }
  .version-number{
    position: absolute;
    top: 15rem;
    .fs(30);
    p{
      color:rgb(204, 204, 204);
    }
  }
}
</style>
