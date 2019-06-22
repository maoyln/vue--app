import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 需要左方向动画的路由用this.$router.to('****')
Router.prototype.togo = function (path, query) {
  this.isleft = true;
  this.isright = false;
  const param = {
    path,
    query
  }
  this.push(param);
};
// 需要右方向动画的路由用this.$router.goRight('****')
Router.prototype.goRight = function (path, query) {
  this.isright = true;
  this.isleft = false;
  const param = {
    path,
    query
  }
  this.push(param);
}
// 需要返回按钮动画的路由用this.$router.goBack()，返回上一个路由
Router.prototype.goBack = function () {
  this.isright = true;
  this.isleft = false;
  this.go(-1);
}
// 点击浏览器返回按钮执行，此时不需要路由回退
Router.prototype.togoback = function () {
  this.isright = true;
  this.isleft = false;
}
// 点击浏览器前进按钮执行
Router.prototype.togoin = function () {
  this.isright = false;
  this.isleft = true;
}

//登陆页面
const loginIndex = resolve => require(['@/pages/Login/indexPage'], resolve);

// 统计报表主页面
const statisticsIndex = resolve => require(['@/pages/Statistics/indexPage'], resolve);
// 统计报表详情
const statisticsDetailPage = resolve => require(['@/pages/Statistics/detailPage'], resolve);

// 客户信息主页面
const customerIndex = resolve => require(['@/pages/Customer/indexPage'], resolve);

/**
 * 合作客户
 * @param {*} resolve
 */
// 合作客户信息详情
const cooperationDetailPage = resolve => require(['@/pages/Customer/Cooperation/detailPage'], resolve);
// 合作客户区域列表
const cooperationAreaListPage = resolve => require(['@/pages/Customer/Cooperation/areaListPage'], resolve);
// 合作客户拜访记录列表
const cooperationVisitRecords = resolve => require(['@/pages/Customer/Cooperation/visitRecords'], resolve);

/**
 * 潜在客户
 * @param {*} resolve
 */
// 潜在信息详情
const potentialDetailPage = resolve => require(['@/pages/Customer/Potential/detailPage'], resolve);
// 潜在客户区域列表
const potentialAreaListPage = resolve => require(['@/pages/Customer/Potential/areaListPage'], resolve);
// 合作客户拜访记录列表
const potentialVisitRecords = resolve => require(['@/pages/Customer/Potential/visitRecords'], resolve);

/**
 * 销售机会
 * @param {*} resolve
 */
// 销售机会查看
const opportunityIndexPage = resolve => require(['@/pages/Customer/Opportunity/indexPage'], resolve);
// 销售机会主页面
const opportunityDetailPage = resolve => require(['@/pages/Customer/Opportunity/detailPage'], resolve);
// 销售机会添加编辑
const opportunityModifyPage = resolve => require(['@/pages/Customer/Opportunity/modifyPage'], resolve);

// 通讯录主页面
const addressBookIndex = resolve => require(['@/pages/AddressBook/indexPage'], resolve);
// 通信录详情
const addressBookDetailPage = resolve => require(['@/pages/AddressBook/detailPage'], resolve);

/**
 * 日程
 * @param {*} resolve
 */
// 日程列表
const visitCalendarPage = resolve => require(['@/pages/visitCalendar/indexPage'], resolve);
// 编辑日程
const visitCalendarModifyPage = resolve => require(['@/pages/visitCalendar/ModifyPage'], resolve);

// 个人中心主页面
const personalIndex = resolve => require(['@/pages/Personal/indexPage'], resolve);
// 个人中心详情
const personalDetailPage = resolve => require(['@/pages/Personal/detailPage'], resolve);

export default new Router({
  routes: [
    // 首页详情
    {
      path: '/login',
      name: 'Login',
      component: loginIndex
    },
    {
      path: '/',
      name: 'index',
      component: (resolve) => require(['@/pages/index'], resolve),
      redirect: '/login',
      children: [
        {
          path: '/home',
          name: 'home',
          component: statisticsIndex
        },
        {
          path: '/customer',
          name: 'customer',
          component: customerIndex
        },
        // 日程列表
        {
          path: '/visitCalendar',
          name: 'Index',
          component: visitCalendarPage
        },
        // {
        //   path: '/addressBook',
        //   name: 'addressBook',
        //   component: addressBookIndex
        // },
        {
          path: '/personal',
          name: 'personal',
          component: personalIndex
        }
      ]
    },
    // 首页详情
    {
      path: '/Home/Detail',
      name: 'Detail',
      component: statisticsDetailPage
    },

    // 合作客户详情
    {
      path: '/Customer/Cooperation/Detail',
      name: 'CooperationDetail',
      component: cooperationDetailPage
    },
    // 合作客户区域列表
    {
      path: '/Customer/Cooperation/AreaList',
      name: 'CooperationAreaList',
      component: cooperationAreaListPage
    },
    // 合作客户拜访记录
    {
      path: '/Customer/Cooperation/VisitRecords',
      name: 'CooperationVisitRecords',
      component: cooperationVisitRecords
    },

    //潜在客户详情
    {
      path: '/Customer/Potential/Detail',
      name: 'CooperationDetail',
      component: potentialDetailPage
    },

    // 潜在客户区域
    {
      path: '/Customer/Potential/AreaList',
      name: 'PotentialAreaList',
      component: potentialAreaListPage
    },
    // 合作客户拜访记录
    {
      path: '/Customer/Potential/VisitRecords',
      name: 'PotentialAreaList',
      component: potentialVisitRecords
    },

    // 销售机会主页面
    {
      path: '/Customer/Opportunity/IndexPage',
      name: 'OpportunityIndexPage',
      component: opportunityIndexPage
    },
    // 销售机会详情
    {
      path: '/Customer/Opportunity/DetailPage',
      name: 'OpportunityDetailPage',
      component: opportunityDetailPage
    },
    // 销售机会编辑添加
    {
      path: '/Customer/Opportunity/ModifyPage',
      name: 'OpportunityModifyPage',
      component: opportunityModifyPage
    },


    // 通讯录详情
    {
      path: '/AddressBook/Detail',
      name: 'Detail',
      component: addressBookDetailPage
    },

    // 日程列表
    // {
    //   path: '/VisitCalendar/IndexPage',
    //   name: 'Index',
    //   component: visitCalendarPage
    // },

    // 编辑日程
    {
      path: '/VisitCalendar/ModifyPage',
      name: 'ModifyPage',
      component: visitCalendarModifyPage
    },

    // 个人模块详情
    {
      path: '/Personal/Detail',
      name: 'Detail',
      component: personalDetailPage
    },
    {
      path: '/addressBook',
      name: 'addressBook',
      component: addressBookIndex
    },
  ]
})
