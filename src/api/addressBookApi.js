import {HttpService} from '../services/http'
/*
* 获取通讯录接口
*/
import { server_root } from '../services/commonApi.js'

export const addressBookApi = {
  api:{
    addressBook: server_root + 'contacts/list',
  },
  //获取通讯录
  getAddressBookList(param) {
    return HttpService.postForm(this.api.addressBook, param, false, true);
  },
}
