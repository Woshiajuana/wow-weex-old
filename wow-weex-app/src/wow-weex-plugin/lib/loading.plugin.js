
// loading 模块

import Handle                           from '../handle'

const LoadingModule = weex.requireModule('loadingModule') || {};

export default {

    // 显示
    // @param   options     [object]    参数
    show (options = {touch: false}) {
        return Handle(LoadingModule.show, options);
    },

    // 隐藏
    // @param   options     [object]    参数
    hide (options = {}) {
        return Handle(LoadingModule.hide, options);
    }
};
