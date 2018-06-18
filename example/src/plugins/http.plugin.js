
import loading                  from 'plugins/loading.plugin'
import Auth                     from 'plugins/auth.plugin'
import config                   from 'config/env.config'
import Dialogs                  from 'plugins/dialogs.plugin'
import Source                   from 'utils/source.util'

const stream = weex.requireModule('stream');
const MarketHttp = weex.requireModule('httpModule');
const DEFAULT_OPTIONS = {
    method: 'POST',
    mode: 'AFTER',
};


class Http {
    constructor(obj_type, data, opt) {
        let options = Object.assign({}, DEFAULT_OPTIONS, opt);
        this.code = obj_type.code || '';
        this.url = obj_type.url || '';
        this.api = this.code ? config.API_URL : config.OLD_API_URL + this.url;
        this.method = options.method.toLocaleLowerCase();
        this.mode = options.mode.toLocaleLowerCase();
        this.body = data;
        return this['_' + this.mode] ();
    }

    // 登录之后
    _after () {
        return new Promise((resolve, reject) => {
            Auth.getToken().then((info) => {
                if (!MarketHttp[this.method]) return resolve({});
                !this.body.token && (this.body.token = info.token);
                !this.body.userNo && (this.body.userNo = info.userNo);
                MarketHttp[this.method]({
                    url: this.api,
                    service_code: this.code,
                    time_out: 15000,
                }, this.body, (result) => {
                    let { code, data } = result;
                    if (code !== '0000') reject(data);
                    resolve(JSON.parse(data));
                }).catch((error) => {
                    reject(error);
                })
            }).then(() => {
                this._logout();
                Auth.showLogin();
            })
        })
    }

    // 日志
    _log(str, data = '') {
        console.log(this.api + str, data);
    }

    // 清空用户登录信息
    _logout() {

    }

    // 获取城市
    _city () {
        return new Promise((resolve, reject) => {
            let reqBody = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'GET',
                url: Source.getJson('city.json'),
                type: 'json',
                timeout: 10000
            };
            stream.fetch(reqBody, result => {
                if (result.status !== 200) return reject();
                resolve(result.data);
            });
        })
    }
}

export default (obj_type, data = {}, options = false) => {
    options.loading && loading.show();
    return new Http(obj_type, data, options).finally(() => {
        options.loading && loading.hide();
    });
}
