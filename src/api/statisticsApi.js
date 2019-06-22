import { HttpService } from '../services/http';
import { server_root } from '../services/commonApi';

/**
 * 客户报表用户统计
 */

export const statisticsApi = {
  api:{
    statistics: server_root + 'chart/customer/statistics',
    consumption: server_root + 'chart/customer/consumption',
    level: server_root + 'chart/customer/level',
    areaNumber: server_root + 'chart/customer/area/number',
    visitNumber: server_root + 'chart/customer/visit/number',
    visit: server_root + 'chart/customer/visit',

  },

  //客户用电统计
  getCustomerStatistics() {
    return HttpService.http(this.api.statistics, {}, false, true);
  },

  // 用电量饼状图接口
  getCustomerConsumption() {
    return HttpService.http(this.api.consumption, {}, false, true);
  },

  // 客户等级横向柱状统计图
  getLevel() {
    return HttpService.http(this.api.level, {}, false, true);
  },

  // 区域客户数量柱状图
  getAreaNumber() {
    return HttpService.http(this.api.areaNumber, {}, false, true);
  },

  // 区域客户数量柱状图
  getVisitNumber(param) {
    return HttpService.postForm(this.api.visitNumber, param, false, true);
  },

  // 当年每月拜访柱状统计图
  getVisit(param) {
    return HttpService.postForm(this.api.visit, param, false, true);
  }

}
