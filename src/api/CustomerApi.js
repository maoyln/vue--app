import {HttpService} from '../services/http'
/*
* 获取客户信息接口
*/
import { server_root } from '../services/commonApi.js'

export const addressBookApi = {
  api:{
    suppliersList: server_root + 'customer/suppliers/list',
    suppliersDetail: server_root + 'customer/suppliers/detail',
    agentsList: server_root + 'customer/agents/list',
    agentsDetail: server_root + 'customer/agent/detail',
    consumersList: server_root + 'customer/consumers/list',
    consumersDetail: server_root + 'customer/consumers/detail',
    visitsList: server_root + 'customer/visits/list',
    opportunitiesList: server_root + 'customer/opportunities/list',
    opportunitiesDetail: server_root + 'customer/opportunities/detail',
    opportunitiesAdd: server_root + 'customer/opportunities/add',
    opportunitiesEdit: server_root + 'customer/opportunities/edit',
  },
  //电源侧提供商列表页
  getSuppliersList(param) {
    return HttpService.postForm(this.api.suppliersList, param, false, true);
  },

  // 电源侧提供商详情页
  getSuppliersDetail(id) {
    return HttpService.postForm(this.api.suppliersDetail + `/${id}`, {}, false, true);
  },

  // 居间售电公司列表
  getAgentsList(param) {
    return HttpService.postForm(this.api.agentsList, param, false, true);
  },

  // 居间售电公司详情页
  getAgentsDetail(id) {
    return HttpService.postForm(this.api.agentsDetail + `/${id}`, {}, false, true);
  },

  // 用电企业列表
  getConsumersList(param) {
    return HttpService.postForm(this.api.consumersList, param, false, true);
  },

  // 用电企业详情页
  getConsumersDetail(id) {
    return HttpService.postForm(this.api.consumersDetail + `/${id}`, {}, false, true);
  },

  // 查看拜访记录
  getVisitsList(param) {
    return HttpService.postForm(this.api.visitsList, param, false, true);
  },

  // 销售机会列表
  getOpportunitiesList(param) {
    return HttpService.postForm(this.api.opportunitiesList, param, false, true);
  },

  // 销售机会详情页
  getOpportunitiesDetail(id) {
    return HttpService.postForm(this.api.opportunitiesDetail + `/${id}`, {}, false, true);
  },

  // 销售机会-新增
  getOpportunitiesAdd(param) {
    return HttpService.postForm(this.api.opportunitiesAdd, param, false, true);
  },

  // 销售机会-编辑
  getOpportunitiesEdit(param) {
    return HttpService.postForm(this.api.opportunitiesEdit, param, false, true);
  },
}
