// resourceModule 页面js资源管理模块

import Handle                           from '../handle'

const MetaModule = weex.requireModule('metaModule') || {};
import Dialogs                      from './../lib/dialogs.plugin'

export default {

    // @param   options     [object]   页面js对应的key值
    // opt = {
    //      key: '',
    // }
    get (options) {
        Dialogs.alert('1')
        return Handle(MetaModule.get, options);
    },

}
