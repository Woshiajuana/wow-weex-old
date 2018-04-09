const stream = weex.requireModule('stream');
import request from 'dd-pipe/request';
import auth from 'dd-pipe/auth';
import router from 'dd-pipe/plugins/router';
import gesture from 'dd-pipe/plugins/gesture';
import modal from 'dd-pipe/plugins/modal';
import store from 'dd-pipe/utlis/store';
import _ from 'dd-pipe/utlis/lodash';
import  source from 'dd-pipe/imgSource.js';
// import dialogs from 'dd-pipe/plugins/dialogs'
export default {
  checkToken: () => new Promise((resolve, reject) => {
    auth.getToken().then(info => {
      if (!info.mobileNo || !info.token) throw 'token formal error';
      return request('CheckToken.Req', {
        method: 'POST',
        https: true
      }).then(result => result.respCode === '0000' ? resolve(info) : reject());
    }).catch(function(error) {
      reject(error);
    })
  }),

  authenRealName: function() {
    auth.getToken().then(info => {
      switch (info.authenFlag) {
        // case '0': // 无用户信息         新认证
        // case '1': // 已完善信息（图片没上传）
        // case '5': // 图片上传不完整
        //   router.push('certification');
        //   break;
        case '2': // 图片已提交审核      审核中
          router.push('authenticating');
          break;
        case '3': // 认证通过
          router.push('authenticationOK');
          break;
        case '4': // 认证失败
          router.push('authenticationFailure');
          break;
        case 'B': // 用户被拉黑
          router.push('authenticationOK');
          break;
        case 'D': // 信用卡认证成功     复审中(也算认证中)   递推宝替你开通
          router.push('authenticatfsz');
          break;
        default:
          router.push('certification');
          break;
      }
    });
  },

  showLogin: () => {
    auth.getToken()
      .then(info => gesture.delete(info.mobileNo))
      .then(() => auth.logout())
      .finally(() => {
        modal.show('ds_login');
      });
  },

  /**
   * 查询用户商户号
   * @userPhone      [string]   查询用户商户号的手机号（明文）
   * */
  queryMerchantNumber (userPhone) {
      let options = {
          method: 'POST',
          body: {
              userPhone
          },
          https: true,
      };
      return new Promise((resolve, reject) => {
          auth.getToken().then(info => {
              request("selectOtherUserInfo.Req", options).then((result) => {
                  var obj = result.respBody ? JSON.parse(result.respBody) : {};
                  if (result.respCode !== '0000') return resolve(result);
                  var payCustomerId = obj.payCustomerId;
                  // var payCustomerId = '8667071901290139';
                  console.log('获取到的商户号:', payCustomerId);
                  // dialogs.toast({message: '获取到的商户号:' + payCustomerId});
                  if(info.mobileNo === userPhone && payCustomerId) {
                      auth.update({payCustomerId}).then(() => {
                          resolve(result)
                      }).catch(() => {
                          reject();
                      });
                      return;
                  }
                  resolve(result)
              })
          });
      });
  },


    //查询用户信息
    queryUserInfo () {
        var options = {
            method: 'POST',
            https: true
        };
        return new Promise((resolve, reject) => {
            auth.getToken().then(info => {
                request("UserInfoQuery2.Req", options).then((result) => {
                    if (result.respCode !== '0000') return reject(result);
                    const {
                        authenFlag,
                        certPid,
                        realName,
                        customerId,
                        // payCustomerId,
                    } = result.data;
                    auth.update({
                        authenFlag,
                        certPid,
                        realName,
                        customerId,
                        // payCustomerId,
                    }).then(() => {
                        resolve(result)
                    }).catch(() => {
                        reject(result);
                    });
                })
            });
        });
    },

  //查询用户信息
  queryUserInfo2: () => auth.getToken().then(info => {
    var options = {
      method: 'POST',
      https: true
    };
    return request('UserInfoQuery2.Req', options);
  }).then(e => {
    if (e.respCode !== '0000') return Promise.reject(e);
    const {
      authenFlag,
      certPid,
      realName,
      customerId,
      // payCustomerId,
    } = e.data;
    return auth.update({
      authenFlag,
      certPid,
      realName,
      customerId,
      // payCustomerId,
    })
  }),

  getTipInfo: () => new Promise((resolve, reject) => {
    store.get('APPTIPINFO').then(function(e) {
      resolve(e);
    }).catch(function(error) {
      var options = {
        method: 'POST',
        https: true,
      };
      request('getAppTip.Req', options).then(function(e) {
        if (e.respCode === '0000') {
          var tipInfo = _.keyBy(e.data, 'tipType');
          store.set('APPTIPINFO', tipInfo);
          resolve(tipInfo);
        }
      }).catch(function(error) {
        reject(error);
      });
    });
  }),
  getCity: () => new Promise((resolve, reject) => {
    let reqBody = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'GET',
      url: source('city.json'),
      type: 'json',
      timeout: 10000
    };
    stream.fetch(reqBody, result => {
      if (result.status !== 200) {
        return reject();
      };
      resolve(result.data);
    });
  })
};
