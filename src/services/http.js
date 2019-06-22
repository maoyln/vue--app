import $ from 'jquery';
const hookAjax = $ => {
  if ($.hooked) {
    return;
  }
  let doc = $(document);
  $.ajaxSetup({
    global: true,
    cache: false
  });
  doc.ajaxSend(function (evt, jqXHR, opts) {
    if (opts.hasOwnProperty('async') && !opts.async) {
    }

    if (opts.showLoading) {
      $('#globalLoading').show();
    }
  });
  doc.ajaxStop(function (evt) {
       $('#globalLoading').hide();
  });
  $.hooked = true;
};

const instaceHolder = {};

const getInstance = () => {
  if (!instaceHolder.instance) {
    instaceHolder.instance = new HttpService();
  }
  return instaceHolder.instance;
};

const errorHandler = r => {
  if (r.errorCode == 403) {
    console.log(r.message);
    return location.replace('#/system/home');
  } else if(r.errorCode == 603) {
    console.log(r.message);
  }
};

export class HttpService {
  constructor() {

  }
  _Get(url, params, Cache, showLoading, async, contentType){
    hookAjax($); // 之所以放在这里是因为在construct阶段，loading组件还没有渲染出来
    return new Promise((resolve, reject) => {
    let options = {
        url: url,
        data: params,
        type:'GET',
        async:async,
        cache: Cache,
        dataType: "json",
        success: r => {
          if (!r) {
            return reject('服务器没有返回数据');
          }
          if ('errorCode' in r && r.errorCode != 200) {
            errorHandler(r);
            return reject(r);
          }

          if ('errorCode' in r && r.errorCode == 0) {
            return resolve(r.data);
          }
          resolve(r);
        },
        error: (xhr, textStatus, error) => {
          reject(xhr.responseJSON);
        }
      }
    if (params._json) {
	    options.contentType = 'application/json';
	    delete options._json;
	    options.data = JSON.stringify(params);
	  }
    $.ajax(options)
    });
  }
  _get(url, params, noCache, showLoading,contentType) {
    hookAjax($); // 之所以放在这里是因为在construct阶段，loading组件还没有渲染出来
    return new Promise((resolve, reject) => {
    let options = {
        url: url,
        method: 'GET',
        data: params,
        dataType:'jsonp',
        jsonp:'onBack',
        jsonpCallback:'onBack',
        showLoading: showLoading,
        contentType:contentType ||'application/json',
        cache: !noCache, // 不需要缓存了
        success: r => {
          console.log(r);
          if (!r) {
            return reject('服务器没有返回数据');
          }
          if ('errorCode' in r && r.errorCode != 200) {
            errorHandler(r);
            return reject(r);
          }

          if ('errorCode' in r && r.errorCode == 0) {
            return resolve(r.data);
          }


          // //处理非法请求
          // if(r.statusCode == '200' && !r.status && r.errorMessage != ''){
          //   $('#errornetwork').show();
          // }
          //  // 重新请求隐藏页面
          //  $('#errornetwork').hide();

          resolve(r);
        },
        error: (xhr, textStatus, error) => {
          // 接口报错
          // $('#errornetwork').show();
          reject(xhr.responseJSON);
        }
      }
    if (params._json) {
	    options.contentType = 'application/json';
	    delete options._json;
	    options.data = JSON.stringify(params);
	  }
    $.ajax(options)
    });
  }
  _post(url, body, cache, showLoading) {
    hookAjax($); // 之所以放在这里是因为在construct阶段，loading组件还没有渲染出来
    return new Promise((resolve, reject) => {
      let options = {
        url: url,
        type: 'POST',
        data: body,
        dataType:'jsonp',
        jsonp:'onBack',
        jsonpCallback:'onBack',
        showLoading: showLoading,
        cache: cache, // 不需要缓存了
        success: (r,textStatus, request) => {
          if (!r) {
            return reject('服务器没有返回数据');
          }
          if ('errorCode' in r && r.errorCode != 0) {
            r.cusId=id;
            errorHandler(r);
            return reject(r);
          }
          if ('errorCode' in r && r.errorCode == 0) {
            return resolve(r.data);
          }


          // // 返回非法请求字段
          // if((r.statusCode == '200' && !r.status) || r.errorMessage != ''){
          //   $('#errornetwork').show();
          // }
          //  // 重新请求隐藏页面
          //  $('#errornetwork').hide();
          resolve(r);
        },
        error: (xhr, textStatus, error) => {
          // 接口报错
          // $('#errornetwork').show();
          reject(xhr.responseJSON);
        }
      };
      if (body._json) {
        options.contentType = 'application/json';
        delete body._json;
        options.data = JSON.stringify(body);
      }
      $.ajax(options)
    });
  }

  _postForm(url, formData, showLoading,Cookie) {
    hookAjax($); // 之所以放在这里是因为在construct阶段，loading组件还没有渲染出来
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        method: 'POST',
        data: formData,
        dataType:'json',
        json:'onBack',
        jsonCallback:'onBack',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8;text/html;'
        },
        showLoading: showLoading,
        success: r => {
          if (!r) {
            return reject('服务器没有返回数据');
          }
          if ('errorCode' in r && r.errorCode != 0) {
            errorHandler(r);
            return reject(r);
          }
          if ('errorCode' in r && r.errorCode == 0) {
            return resolve(r.data);
          }

          // //
          // if((r.statusCode == '200' && !r.state) || r.errorMessage != ''){
          //   $('#errornetwork').show();
          // }
          // // 重新请求隐藏页面
          // $('#errornetwork').hide();
          resolve(r);
        },
        error: (xhr, textStatus, error) => {
          // 接口报错
          // $('#errornetwork').show();
          reject(error);
        }
      })
    });
  }

  static get(url, params, noCache, showLoading) {
    console.log(url);
    return getInstance()._get(url, params, noCache, showLoading);
  }
  static http(url, params, noCache, showLoading, async){
    return getInstance()._Get(url, params, noCache, showLoading, async)
  }
  static post(url, body, cache, showLoading) {
    // 默认的contentType是application/x-www-form-urlencoded
    // 如果想发送application/json，需要在body中增加_json:true，如 {id:1, _json:true}
    return getInstance()._post(url, body, cache, showLoading);
  }
  static postForm(url, formData, showLoading, Cookie) {
    // 直接提交包含文件的formData
    return getInstance()._postForm(url, formData, showLoading, Cookie);
  }
}
