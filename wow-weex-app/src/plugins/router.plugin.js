
import './Promise'
import path             from 'plugins/path.plugin'
import loading          from 'plugins/loading.plugin'
import dialogs          from 'plugins/dialogs.plugin'
import Defer            from 'utils/defer.util'
import _                from 'utils/lodash.util'

const navigator = weex.requireModule('navigator');
const manager = weex.requireModule('pageManagerModule');
const external = weex.requireModule('externalAppModule');
const defer = new Defer(1000);

export default {
    push: (input, parmas) => {
        if (!defer.do(input + JSON.stringify(parmas))) return null; // 过滤连续点击
        loading.show();
        let pagename = _.isObject(input) ? input.url : input;
        let animated = _.isObject(input) ? input.animated:  'true';
        let close = _.isObject(input) ? input.close:  '';
        path.page(pagename).then(nativepath => {
            nativepath = parmas ? nativepath + '?parmas=' + encodeURIComponent(JSON.stringify(parmas)) : nativepath;
            navigator.push({ url: nativepath, animated: animated, close: close }, e => {});
        }).catch(error => {
            dialogs.toast({ message: error });
        }).finally(() => { loading.hide(); });
    },

    pop: (animated = 'true') => {
        navigator.pop({ animated: animated }, e => {});
    },

    root: () => {
        manager.popToRootPage(e => {})
    },

    getParmas: weex => {
        var bundleUrl = weex.$getConfig().bundleUrl,
            params = bundleUrl.indexOf('?parmas=') > -1 ? bundleUrl.substr(bundleUrl.indexOf("?parmas=") + 8) : '';
        return params ? JSON.parse(decodeURIComponent(decodeURIComponent(params))) : '';
    },

    back: (back_index = 1, front_index = '') => {
        manager.popWithParam({popBack: back_index + '', popFront: front_index + ''}, e => {})
    },

    del: (back_index = 1, front_index = '') => {
        manager.deletePageWithParam({popBack: back_index + '', popFront: front_index + ''}, e => {})
    },

    external: options => {
        external.open(options);
    }
};
