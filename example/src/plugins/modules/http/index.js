

import loading      from 'modules/loading'
import config       from 'config/env'
import auth         from 'service/auth'
import modal        from 'modules/modal'
import encrypt      from 'modules/encrypt'

const stream = weex.requireModule('stream');
const jfhttps = weex.requireModule('jfHttpsModule');

const DEFAULT_OPTIONS = {
    method: 'POST',
    mode: 'AFTER'
};

const DEFAULT_DATA = {
    appUser: 'newjfb2',
    signkey: 'd80da0de44ca0f478e87619887da835i',
    version: '4.1.6',
};

class Http {
    constructor(api, data, opt) {
        let options = Object.assign(DEFAULT_OPTIONS, opt);
        this.api = api;
        this.method = options.method.toLocaleLowerCase();
        this.mode = options.mode.toLocaleLowerCase();
        this.body = Object.assign(DEFAULT_DATA, data);
        console.log(this.mode)
        console.log(api, data, opt)
        return this['_' + this.mode] ();
    }

    /**
     * 无须token
     * */
    _before () {
        this.api = config.API_URL + this.api;
        return new Promise((resolve, reject) => {
            this._log('__请求参数：', this.body);
            jfhttps[this.method](this.api, this.body, (e) => {
                this._handle(e, resolve, reject)
            });
        });
    }

    /**
     * 需要token
     * */
    _after () {
        this.api = config.API_URL + this.api;
        return new Promise((resolve, reject) => {
            auth.getToken().then(info => {
                !this.body.mobileNo && (this.body.mobileNo = info.encryptMobileNo);
                this.body.token = info.token;
                this._log('__请求参数：', this.body);
                jfhttps[this.method](this.api, this.body, (e) => {
                    this._handle(e, resolve, reject)
                });
            }).catch(() => {
                reject('你还未登录请登录');
                this._logout();
            });

        });
    }

    /**
     * 调用福店创建订单
     */
    _order () {
        this.api = config.API_NEXTPAY + this.api;
        return new Promise((resolve, reject) => {
            auth.getToken().then(info => {
                !this.body.mobileNo && (this.body.mobileNo = info.encryptMobileNo);
                this.body.token = info.token;
                return encrypt.getUUID(info.mobileNo)
            }).then(uuid => {
                this.body.uuid = uuid;
                this.body.app_user = this.body.appUser;
                delete this.body.appUser;
                this._log('__请求UUID：', uuid);
                this._log('__请求参数：', this.body);
                return encrypt.md5({req: JSON.stringify(this.body)});
            }).then(md5 => {
                this._log('__请求MD5：', md5);
                let reqBody = {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    method: this.method,
                    url: this.api,
                    type: 'text',
                    timeout: 60000
                };
                if (this.method === 'get') {
                    reqBody.url = reqBody.url + '?req=' + md5.req + '&sign=' + md5.sign + '&ts=' + md5.ts;
                } else if (this.method === 'post') {
                    reqBody.body = 'req=' + md5.req + '&sign=' + md5.sign + '&ts=' + md5.ts;
                }
            })

        })
    }

    /**
     * 逻辑处理
     * */
    _handle(e, resolve, reject) {
        this._log('__请求返回参数：', e);
        if (e.code !== '0000') return reject({respDesc: '请求失败'});
        let result = e.data;
        let code = result.respCode;
        switch (code){
            case 'PE15':
                reject(result);
                this._logout();
                break;
            default:
                var data = result.respBody ? JSON.parse(result.data.respBody) : {};
                result.respBody ? resolve(data) : resolve(result);
                break;
        }
    }

    /**
     * 日志
     * */
    _log(str, data = '') {
        console.log(this.api + str, data);
    }

    /**
     * 清空用户登录信息
     * */
    _logout() {
        auth.logout().finally(() => modal.show('ds_login'));
    }
}


export default (api, data = {}, options) => {
    options.loading && loading.show();
    return new Http(api, data, options).finally(() => {
        options.loading && loading.hide();
    });
}
