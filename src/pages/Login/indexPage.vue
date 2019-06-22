<template>
  <div class="login">
    <div class="welcome">
      <img src="../../assets/imgs/login-logo.png">
      <span>
        京能电力
      </span>
    </div>
    <div class="login-title-account">
      <div class="login-title">账户登录</div>
      <img src="../../assets/imgs/login-hr.png">
    </div>
    <div class="login-form">
      <div class="login-inp">
        <img src="../../assets/imgs/u12.png" alt="" style="left:0">
        <mt-field
          placeholder="账户"
          v-model="userName"
          :attr="{ maxlength: 16 }"
        >
        </mt-field>
      </div>
      <div class="login-inp">
        <img src="../../assets/imgs/u4.png" alt="" style="left:0">
        <mt-field
          placeholder="密码"
          type="password"
          v-model="password"
          :onChange="test"
          :attr="{ maxlength: 16 }"
        ></mt-field>
      </div>
      <mt-button
        type="primary"
        :disabled="loginButtonDisabled"
        class="login-button"
        :style="loginButtonDisabled ? 'background: #CCCCCC;' : ''"
         @click.native="handleLogin"
      >
        登录
      </mt-button>
    </div>
  </div>
</template>

<script>
import { Toast }      from 'mint-ui';
import { loginApi }  from '../../api/loginApi'

export default {
  data() {
    return {
      userName:             '',
      password:             '',
      loginButtonDisabled: false,
    }
  },
  components: {
    // commonHeader
  },
  computed: {
    // newdata: function() {
    //   return this.data + 1
    // }
  },
  methods: {
    // 登录
    handleLogin() {
      const checkMessage = this.checkLoginMessage(this.userName, this.password);

      // 如果为true,则继续执行
      if (checkMessage) {
        this.loginButtonDisabled = true;      //点击登陆置灰
        const param = {
          userName: this.userName,
          password: this.password
        };
        this.$router.push({path: '/home'});

        // loginApi.login(param).then(res => {
        //   this.loginButtonDisabled = false;      //点击登陆置灰
        //   if (res.code === '200') {
        //     // 登录成功跳转页面
        //     this.$router.push({path: '/home'});
        //   } else {
        //     // 具体报错信息提示
        //   }
        // }).catch(res => {
        //   this.loginButtonDisabled = false;      //点击登陆置灰
        //   console.log(res);
        // });
      }
    },

    // 检测密码是否正确
    checkLoginMessage(userName, password) {
      if (userName === '') {
        Toast({
          message: '账户为空，提示账号不能为空',
          position: 'middle'
        });
        return false;
      }
      if (userName === '') {
        Toast({
          message: '密码为空或不正确，提示密码输入错误',
          position: 'middle'
        });
        return false;
      }
      return true;
    },

    test() {
      console.log(123);
    }
  },

  // 监听用户名和密码改变事件
  watch:{
    userName: function(newValue,oldValue) {
      this.loginButtonDisabled = false;
    },
    password: function(newValue,oldValue) {
      this.loginButtonDisabled = false;
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~styles/index.less";
@import "~styles/variable.less";
html,body,div,p,form,label,ul,li,dl,dt,dd,ol,img,button,b,em,strong,small,h1,h2,h3,h4,h5,h6{margin:0;padding:0;border:0;list-style:none;font-style:normal;}
body{font-family:SimHei,'Helvetica Neue',Arial,'Droid Sans',sans-serif;font-size:14px;color:#333;background:#f2f2f2;}
a, a.link{
  color:#666;
  text-decoration:none;
  font-weight:500;
}
a, a.link:hover{
  color:#666;
}
h1,h2,h3,h4,h5,h6{
  font-weight: normal;
}

.login{
  width:100%;
  height:100%;
  // background:url(../../assets/imgs/login-bg.png) no-repeat;
  background-color: rgba(42, 87, 154, 1);
  background-size:cover;
  position:fixed;
  z-index:-10;
  .welcome{
    width:100%;
    margin:10% 0;
    img{
      // width:100%;
      width: 60px;
      height: 54px;
      vertical-align: top;
    }
    span{
      color: rgb(255, 255, 255);
      font-size:30px;
    }
  }
  .login-title-account{
    width:100%;
    margin:3% 0;
    .login-title{
      margin:3% 0;
      color: rgb(204, 204, 204);
      font-size:18px;
    }
    img{
      width:80%;
    }
  }
  .login-form{
    .login-inp{background: #fff;display: flex;margin:20px 30px 15px 30px;border-radius:10px;
      img{.w(35);.h(40);.margin(35,30,30,30)}
      .mint-cell{
        height: 1.5rem;
      }
    }
    .login-button{
      margin:20px 30px 15px 30px;
      // border:1px solid #fff;
      width:60%;
      border-radius:10px;
      height: 1.5rem;
    }
  }
}
</style>
