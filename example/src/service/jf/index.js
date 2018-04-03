const jfservice = weex.requireModule('jfServiceModule');
const openpay = weex.requireModule('openPayModule');
import location from './plugins/location';
import auth from './auth';
import config from './config';
import dialogs from './plugins/dialogs';
import _ from './utlis/lodash';

export default {
  md5: string => new Promise((resolve, reject) => {
    jfservice.md5(string, e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),

  getUUID: mobileNo => new Promise((resolve, reject) => {
    jfservice.getUUID(mobileNo, e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),
  getParameter:()=>new Promise((resolve, reject) => {
    jfservice.getParameter(e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),


  pay (params) {
      return new Promise((resolve, reject) => {
          location.get().then(loc => {
              if(!params.orgCode){
                  params.orgCode = config.ORG_CODE;
                  params.orgId = config.ORG_CODE;
              }
              let payInfo = {
                  amount: '', // 金额
                  merchantOrderId: '', // 订单信息
                  goodsDesc: '', // 商品描述(暂不传)
                  merchantCode: '', // 收款人商户号8667071901290139
                  fromMerchantCode: '', // 付款人商户号8667071901290139
                  merchantName: '', // 店铺名
                  merchantMessage: '', //认证参数
                  mobileNo: '', // 收款人
                  fromMobileNo: '', // 付款人
                  city: `${loc.province}|${loc.city}|${loc.subLocality}`,

                  // 机构号
                  // orgCode: '170324112750', // 测试
                  // orgCode: '170324193247', // 准生产
                  // orgCode: config.ORG_CODE,

                  payType: '0,1,2', // 支付类型 '0'表示只支持扫码  '1'表示只支持刷卡  '01'表示都支持
                  latitude: loc.latitude,
                  longitude: loc.longitude,
                  reOrPayFlag: '0', //收款：0 付款：1
                  ...params
              };
              console.log('调用支付参数',payInfo)
              setPayEnvEnv().then(() => {
                  openpay.pay(payInfo, e => {
                      if (e.code !== '0000') return reject(e);
                      const data1 = getJson(e.data);
                      if (data1.code === '0001') return reject({
                          code: 'ds_system',
                          msg: '网络异常'
                      });
                      if (data1.code === '0002') return reject({
                          code: 'ds_system',
                          msg: '交易取消'
                      });
                      const data2 = getJson(data1.result);
                      const mate = getJson(data2.mate);
                      const result = getJson(data2.result);
                      // if (mate.code === 'OP35') return reject(mate);
                      // if (mate.code === 'OP36') return reject(mate);
                      if (mate.code !== '0000') return reject(mate);

                      // 无卡
                      let link = '';
                      if (data1.type == '0') {
                          link = decodeImageUrl(result.codeImgUrl);
                      }
                      resolve({
                          type: data1.type,
                          msg: mate.msg,
                          link: link
                      });
                  });
              });
          }).catch((error) => {
              reject({msg: error})
          })
      })
  },



  pay1: params => location.get().then(loc => new Promise((resolve, reject) => {
    if(!params.orgCode){
      params.orgCode = config.ORG_CODE;
      params.orgId = config.ORG_CODE;
    }
    let payInfo = {
      amount: '', // 金额
      merchantOrderId: '', // 订单信息
      goodsDesc: '', // 商品描述(暂不传)
      merchantCode: '', // 收款人商户号8667071901290139
      fromMerchantCode: '', // 付款人商户号8667071901290139
      merchantName: '', // 店铺名
      merchantMessage: '', //认证参数
      mobileNo: '', // 收款人
      fromMobileNo: '', // 付款人
      city: `${loc.province}|${loc.city}|${loc.subLocality}`,

      // 机构号
      // orgCode: '170324112750', // 测试
      // orgCode: '170324193247', // 准生产
      // orgCode: config.ORG_CODE,

      payType: '0,1,2', // 支付类型 '0'表示只支持扫码  '1'表示只支持刷卡  '01'表示都支持
      latitude: loc.latitude,
      longitude: loc.longitude,
      reOrPayFlag: '0', //收款：0 付款：1
      ...params
    };
      console.log('调用支付参数',payInfo)
    setPayEnvEnv().then(() => {
      openpay.pay(payInfo, e => {
        if (e.code !== '0000') return reject(e);
        const data1 = getJson(e.data);
        if (data1.code === '0001') return reject({
          code: 'ds_system',
          msg: '网络异常'
        });
        if (data1.code === '0002') return reject({
          code: 'ds_system',
          msg: '交易取消'
        });
        const data2 = getJson(data1.result);
        const mate = getJson(data2.mate);
        const result = getJson(data2.result);
        // if (mate.code === 'OP35') return reject(mate);
        // if (mate.code === 'OP36') return reject(mate);
        if (mate.code !== '0000') return reject(mate);

        // 无卡
        let link = '';
        if (data1.type == '0') {
          link = decodeImageUrl(result.codeImgUrl);
        }
        resolve({
          type: data1.type,
          msg: mate.msg,
          link: link
        });
      });
    });
  })).catch((error) => {
      return dialogs.alert({
          message: error + '',
          okTitle: '知道了'
      });
  }),

  query: () => new Promise((resolve, reject) => {
    auth.getToken().then(info => {
      setPayEnvEnv().then(() => {
        openpay.queryBalance({
          // mobileNo: info.mobileNo,
          mobileNo: info.encryptMobileNo,
          merchantCode: info.payCustomerId,
          // 机构号
          // orgCode: '170324112750', // 测试
          // orgCode: '170324193247', // 准生产
          orgCode: config.ORG_CODE,
          orgId : config.ORG_CODE,
        }, e => {
          if (e.code !== '0000') return reject(e);

          const data1 = getJson(e.data);
          if (data1.code === '0001') {
            return reject({
              code: 'ds_system',
              msg: '网络异常'
            });
          }
          const data2 = getJson(data1.result);
          const mate = getJson(data2.mate);
          const result = getJson(data2.result);
          const endData = getJson(result.message);
          if (mate.code !== '0000') return reject(mate);

          resolve(endData)

          // result.code === '0000' && result.data.status === '查询成功'
          // ? resolve(JSON.parse(result.data.result.message))
          // : reject(result.data.status);
        });
      }).catch(function (error) {
        reject('环境设置失败！')
      });
    }).catch(function (error) {
      // reject('用户未登录！')
      reject();
    });
  }).handle(),

  encryptPassword: (password, mobile) => new Promise((resolve, reject) => {
    jfservice.encryptPwd(password, mobile, e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    })
  }).handle(),

  drawMoney: amount => new Promise((resolve, reject) => {
    auth.getToken().then(info => {
      setPayEnvEnv().then(() => {
        openpay.drawMoney({
          mobileNo: info.encryptMobileNo,
          merchantCode: info.payCustomerId,
          amount: amount,
          secondToFlag: 'T0',
          orgCode: config.ORG_CODE,
          orgId : config.ORG_CODE,
        }, e => {
          console.log(e);
          if (e.code != '0000') return reject(e);
          if (e.data.code === '0001') {
            return reject({
              code: 'ds_system',
              msg: '网络异常'
            });
          }

          const { mate } = e.data.result;
          if (mate.code !== '0000') return reject(mate.msg);
          resolve(mate)
        });
      }).catch(function (error) {
        reject('环境设置失败！')
      });
    }).catch(function (error) {
      // reject('用户未登录！')
      reject();
    });
  }).handle()


};

let PAY_ENV_SET_STATUS = false; // 是否设置环境

const setPayEnvEnv = () => new Promise((resolve, reject) => {
  if (PAY_ENV_SET_STATUS) return resolve();
  openpay.setOpenPayUrl(config.OPEN_PAY, config.OPEN_PAY_UPLOAD, result => {
    if (result.code != '0000') return reject();
    PAY_ENV_SET_STATUS = true;
    resolve();
  });
});

function getJson(input) {
  if (_.getType(input) === 'object') return input
  try {
    return JSON.parse(input);
  } catch (e) {
    return {}
  }
}

function decodeImageUrl(input) {
  var output = input;
  try {
    if (input.indexOf('jfzf') !== -1) {
      output = output.replace(/jfzf/g,"h5pay.html?ur=jfzf");
    } else {
      output = output.replace(/weixin/g,"h5pay.html?ur=weixin");
    }
  } catch (e) {

  }
  return output
}
