/**
 * navigator
 * weex 自带模块
 *
 */

import ResourcePlugin                   from './resource.plugin'
import LoadingPlugin                    from './loading.plugin'
import DialogsPlugin                    from './dialogs.plugin'

const Navigator         = weex.requireModule('navigator');

export default {

    // @param options   [object|string] 参数配置，页面key
    // @param params    [object]        页面传参
    push (options, params) {
        let key = options.key || options;
        let animated = options.animated || 'true';
        let close = options.close || 'false';
        LoadingPlugin.show();
        ResourcePlugin.get(key).then((url) => {
            !params && (url = `${url}?params=${encodeURIComponent(JSON.stringify(params))}`);
            Navigator.push({url, animated, close});
        }).catch((error) => {
            DialogsPlugin.toast(error);
        }).finally(() => {
            LoadingPlugin.hide();
        });
    },

    // 弹出页面
    // @param options   [object]    参数
    pop (options = { animated: 'true' }) {
        Navigator.pop(options, e => {})
    },

    // 获取页面传递的参数
    // @param weex      [object]    weex对象
    getParams (weex) {
        let url = weex.$getConfig().bundleUrl,
            params = url.indexOf('?params=') > -1 ? url.substr(url.indexOf("?params=") + 8) : '';
        return params ? JSON.parse(decodeURIComponent(decodeURIComponent(params))) : '';
    },

}
