/*
 * @Description: 引入mock.js及配置文件
 * @Author: MrMao
 * @LastEditors: MaoYaLi
 * @Date: 2019-06-10 10:35:08
 * @LastEditTime: 2019-06-10 15:57:56
 */

import Mock from 'mockjs'
import User from './user'
// 此处会劫持/root/login/checkMemberLogin接口，并返回数据
Mock.mock('/root/login/checkMemberLogin', 'post', () => {
  // 返回模拟数据
  return User.userInfo
})
