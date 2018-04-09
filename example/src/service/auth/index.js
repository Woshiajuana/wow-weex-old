import store    from 'modules/store';
import _        from 'utils/lodash';

const AUTH_KEY_NAME = 'DD_AUTH_STORE_DATA';
const AUTH_CACHE_KEY_NAME = 'DD_AUTH_CACHE_STORE_DATA';
const TOKEN_INFO_DEFAULT = {
    realName: '',
    mobileNo: '',
    encryptMobileNo: '',
    userType: '', // 用户类型(00个人 01企业 02公共 03其他)
    certPid: '', // 身份证号或企业机构代码证号
    certType: '', // 实名认证类型(01身份证 02企业机构代码证)
    token: '',
    authenFlag: '', // 实名认证状态
    email: '',
    customerId: '',
    payCustomerId: '', //用户商户号
    status: '',//用户会员费交钱状态
    collection_or_payment: false,//收付款页面状态
    authScanRecognizeTimeoutCount: '', //实名认证活体超时次数
};

export default {
    login: info => store.set(AUTH_KEY_NAME, _.defaults(info, TOKEN_INFO_DEFAULT)).catch(error => { throw '登录失败'; }),

    update: (input) => {
        if (!_.isObject(input)) return Promise.reject('update input must be object');
        return store.get(AUTH_KEY_NAME).then(data => {
            data = _.isObject(data) ? data : {};
            data = Object.assign(data, input);
            return store.set(AUTH_KEY_NAME, data);
        });
    },

    getToken: () => store.get(AUTH_KEY_NAME).catch(error => { throw '用户未登录'; }),

    cache: {
        set: (key, value) => {
            if (!_.isString(key)) return Promise.reject('cache must has key');
            if (_.isEmpty(key)) return Promise.reject('cache must has value');
            return store.get(AUTH_CACHE_KEY_NAME).then(data => {
                data = _.isObject(data) ? data : {};
                data[key] = value;
                return store.set(AUTH_CACHE_KEY_NAME, data);
            }).catch(error => {
                return store.set(AUTH_CACHE_KEY_NAME, { [key]: value });
            })
        },

        get: key => {
            if (!_.isString(key)) return Promise.reject('cache must has key');
            return store.get(AUTH_CACHE_KEY_NAME).then(data => {
                return _.isObject(data) && data[key] ? Promise.resolve(data[key]) : Promise.reject('cache don\'t has' + key);
            })
        },
    },

    logout: () => {
        return Promise.all([store.remove(AUTH_KEY_NAME), store.remove(AUTH_CACHE_KEY_NAME), store.remove('pay_history')]).catch(error => { throw '缓存清除失败'; })
    },
};
