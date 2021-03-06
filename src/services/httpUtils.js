require('es6-promise').polyfill()
import 'whatwg-fetch'

// 前置拼接url
const api = '***'

// 自定义headers
const headers = {
  'Accept': 'application/json; version=3.13.0',
  'Access-Control-Allow-Origin': '*'
}

// 处理get请求，传入参数对象拼接
const formatUrl = obj => {
  const params = Object.values(obj).reduce((a, b, i) => `${a}${Object.keys(obj)[i]}=${b}&`, '?')
  return params.substring(0, params.length - 1)
}

/**
 * @param url    (String) 接口URL
 * @param option (Object) 参数对象，包括method(请求方式，不填默认'get')，headers(设置请求头，选填)，data(请求参数，所有请求方式均适用)
 */
const recoFetch = (url, option = {}) => {
  // 设置请求超时的时间，默认10秒
  const timeout = option.timeout || 10000

  option.headers = option.headers || headers
  option.method = (option.method || 'get').toLocaleLowerCase()

  // 格式化get请求的数据(fetch的get请求需要需要将参数拼接到url后面)
  if (option.method === 'get') {
    if (option.data) {
      url = url + formatUrl(option.data)
    }
  }

  // 对非get类请求头和请求体做处理
  if (option.method === 'post' || option.method === 'put' || option.method === 'delete') {
    option.headers['Content-Type'] = option.headers['Content-Type'] || 'application/json'

    // 非get类请求传参时，需要将参数挂在body上
    option.body = JSON.stringify(option.data)

    // 根据后台要求，如果有时候是java请求会用qs转
    // option.body = qs.stringify(option.data)
  }
  delete option.data

  return addTimeout(fetch(url, option), timeout)
}

// 对请求结果进行处理：fetch请求成功后返回的是json对象
function parseJSON (response) {
  return response.json()
}

//
/**
 * 增加超时处理：fetch本身是没有请求超时处理的，所以可以通过
 * @param fetchPromise (Promise) fetch请求
 * @param timeout      (Number)  请求超时的时间
 */
function addTimeout (fetchPromise, timeout) {
  let timeoutFn = null

  // 请求超时的Promise
  var timeoutPromise = new Promise((resolve, reject) => {
    timeoutFn = function () {
      reject({
        code: 'timeOut',
        text: '请求超时，请重试'
      })
    }
  })

  // 声明Promise.race
  const racePromise = Promise.race([
    fetchPromise,
    timeoutPromise
  ])

  setTimeout(function () {
    timeoutFn()
  }, timeout)

  const racePromiseResult = new Promise((resolve, reject) => {
    let status = 0

    racePromise
      .then(response => {
        status = response.status
        return response
      })
      .then(parseJSON)
      .then(response => {
        // 将状态码添加到返回结果中，以备后用
        response.status = status

        // 如果返回码在300到900之间，将以错误返回，如果需要对错误统一处理，可以放在下面判断中
        if (/^[3-9]\d{2}$/.test(response.status)) {
          reject(response)
        }

        // 否则以正确值返回
        resolve(response)
      })
      .catch(error => {
        // 请求出错则报错 recoFetch Error: ***
        console.log('recoFetch Error:', error)
      })
  })

  // 将racePromise的结果返回
  return racePromiseResult
}

export default recoFetch
