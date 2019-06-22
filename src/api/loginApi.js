import {HttpService} from '../services/http'
/*
* 登录/退出接口
*/
import { server_root } from '../services/commonApi.js'

export const loginApi = {
  api:{
    login: server_root + 'login/login',
    logout : server_root + 'login/logout ',
  },

  //登录
  login(param) {
    return HttpService.postForm(this.api.login, param, false, true);
  },

  // 登出
  logout() {
    return HttpService.http(this.api.logout, {}, false, true);
  },
}
