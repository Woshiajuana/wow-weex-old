/**
 * navigator
 * weex 自带模块
 *
 */

import ResourcePlugin               from 'plugins/resource.plugin'

const Navigator         = weex.requireModule('navigator');

export default {

    /**
     * 跳转页面
     * @param options   [object|string] 参数配置，页面key
     * @param params    [object]        页面传参
     * */
    push: (options, params) => new Promise(async (resolve, reject) => {
        try {
            let key = options.key || options;
            let animated = options.animated || 'true';
            let close = options.close || 'false';
            let url = await ResourcePlugin.get(key);
            !params && (url = `${url}?params=${encodeURIComponent(JSON.stringify(params))}`);
            Navigator.push({url, animated, close});
        } catch (e) {
            reject(e);
        } finally {

        }
    }),
}
