import Router                   from './../lib/router.plugin'

const methods = {
    // 跳转URL页面
    routerPush (url, params = {}, callback = '') {
        let type = true;
        if (typeof callback === 'function') type = callback();
        else type = callback === '' ? true : callback;
        type && Router.push(url, params)
    }
};

export default {
    methods,
}
