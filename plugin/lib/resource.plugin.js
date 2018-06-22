
// resourceModule 页面js资源管理模块

import Handle                   from '../handle'

const ResourceModule = weex.requireModule('resourceModule');

export default {

    // @param   options     [object]   页面js对应的key值
    // opt = {
    //      key:
    // }
    get: (opt) => {
        let MAIN = Handle.checkKey();
        if (MAIN.msg) return Handle.error(MAIN);
        let options = { MAIN, ...opt };
        ResourceModule.get(options, Handle);
    },

}
