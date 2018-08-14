import Router                   from './../lib/router.plugin'
const data = () => {
    return {
        params$: ''
    }
};

export const methods = {
    // 跳转URL页面
    routerPush (url, params = {}, callback = '') {
        let type = true;
        if (typeof callback === 'function') type = callback();
        else type = callback === '' ? true : callback;
        type && Router.push(url, params)
    },

    // 获取路由参数
    routerGetParams() {
        this.params$ = Router.getParams(this);
    }
};

export default {
    data,
    methods,
}
