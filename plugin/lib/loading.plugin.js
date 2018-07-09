
// loading 模块

import Handle                           from '../handle'

const LoadingModule = weex.requireModule('loadingModule');

export default {

    // 显示
    // @param   opt     [object]    参数
    show (opt = {touch: false}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(LoadingModule.show, options);
    },

    // 隐藏
    // @param   opt     [object]    参数
    hide (opt = {}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(LoadingModule.hide, options);
    }
};
