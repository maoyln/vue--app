import {HttpService} from '../services/http'
/*
*
*/
import { server_root } from '../services/commonApi.js'

export const publicApi = {
  api:{
    saleOpportunity: server_root + 'screen/common/interface/sale/opportunity',
    area: server_root + 'screen/common/interface/area'
  },

  //销售机会下拉筛选
  getSaleOpportunity() {
    return HttpService.http(this.api.saleOpportunity, {}, false, true);
  },

  //区域下拉筛选
  getArea() {
    return HttpService.http(this.api.area, {}, false, true);
  }
}
