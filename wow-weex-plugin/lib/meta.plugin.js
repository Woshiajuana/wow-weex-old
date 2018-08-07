
// resourceModule 页面js资源管理模块

import Handle                           from '../handle'

const MetaModule = weex.requireModule('metaModule') || {};

export default {

    // @param   options     [object]   页面js对应的key值
    // opt = {
    //      key: '',
    // }
    get (options) {
        return Handle(MetaModule.get, options);
    },

}
