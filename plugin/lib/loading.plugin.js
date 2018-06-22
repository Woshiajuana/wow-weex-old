
// loading 模块

import Handle                   from '../handle'

const LoadingModule = weex.requireModule('loadingModule');

export default {

    // 显示
    // @param   options     [object]    参数
    show: (opt = {touch: false}) => {
        let MAIN = Handle.checkKey();
        if (MAIN.msg) return Handle.error(MAIN);
        let options = { MAIN, ...opt };
        return Handle(LoadingModule.show, options);
    },

    // 隐藏
    // @param   options     [object]    参数
    hide: (opt = {}) => {
        let MAIN = Handle.checkKey();
        if (MAIN.msg) return Handle.error(MAIN);
        let options = { MAIN, ...opt };
        LoadingModule.hide(options, Handle);
    }
};
