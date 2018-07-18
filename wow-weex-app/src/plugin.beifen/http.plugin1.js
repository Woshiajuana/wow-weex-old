
import loading              from 'plugins/loading.plugin'
import Auth                 from 'plugins/auth.plugin'

import config               from 'config/env.config'
const stream = weex.requireModule('stream');

const DEFAULT_OPTIONS = {
    method: 'POST',
    mode: 'AFTER'
};


class Http {
    constructor(code, data, opt) {
        let options = Object.assign({}, DEFAULT_OPTIONS, opt);
        this.api = config.API_URL;
        this.method = options.method.toLocaleLowerCase();
        this.mode = options.mode.toLocaleLowerCase();
        this.code = code;
        this.body = data;
        return this['_' + this.mode] ();
    }
    // 登录之后
    _after () {
        return new Promise((resolve, reject) => {
            console.log('进入到http' , this.api);
            let token = '';
            let [version, tokenkey, random3, expire] = randomNumber();
            let datakey = token.substring(random3, Number(16) + Number(random3));
            let tokenM = Encrypt(token, tokenkey);
            let data_2 = Encrypt(this.body, datakey);
            let param = JSON.stringify({
                expire,
                version,
                token: tokenM,
                data: data_2,
            });
            console.log('请求参数' , param);
            let reqBody = {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer ' + tokenM,                //验证信息遵循jwt
                    'service_code': this.code,                          //服务编号
                },
                method: this.method,
                url: this.api,
                type: 'text',
                timeout: 20000
            };
            if (this.method === 'get') {
                reqBody.url = param;
            } else if (this.method === 'post') {
                reqBody.body = param;
            }
            stream.fetch(reqBody, result => {
                this._log('__请求返回结果：', result);
                if (result.status !== 200) { return reject(); };
                try {
                    let decode = decodeURIComponent(result.data);
                    const index = decode.indexOf('\{');
                    const lastIndex = decode.lastIndexOf('\}');
                    decode = decode.substr(index, lastIndex - index + 1);
                    const respData = JSON.parse(decode);
                    if (respData.code === '0001' || respData.code === '0002') {
                        reject(respData.msg);
                        auth.logout().finally(() => modal.show('dsnfc_login'));
                    } else {
                        resolve(respData);
                    }
                } catch(e) {
                    reject(e);
                }
            });
        })
    }

    // 逻辑处理
    _handle(e, resolve, reject) {

    }

    // 日志
    _log(str, data = '') {
        console.log(this.api + str, data);
    }

    // 清空用户登录信息
    _logout() {

    }
}

export default (code, data = {}, options = false) => {
    options.loading && loading.show();
    return new Http(code, data, options).finally(() => {
        options.loading && loading.hide();
    });
}
