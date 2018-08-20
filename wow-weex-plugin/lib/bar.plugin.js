
// loading 模块

import Handle                           from '../handle'

const BarModule = weex.requireModule('barModule') || {};

export default {

    // 显示
    // @param   options     [object]    参数
    set (options = {color: '#5cc8ff'}) {
        return Handle(BarModule.set, options);
    },

};
