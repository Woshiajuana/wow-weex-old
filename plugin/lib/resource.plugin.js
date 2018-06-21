
// resourceModule 页面js资源管理模块
//

import Config                   from '../config'
import Handle                   from '../handle'

const ResourceModule = weex.requireModule('resourceModule');

export default {

    // @param   options     [object]   页面js对应的key值
    // opt = {
    //      key:
    // }
    get: (opt) => new Promise((resolve, reject) => {
        let { MAIN, CODE_MAP_MESSAGE } = Config;
        if (!MAIN) return Handle.error(reject, CODE_MAP_MESSAGE);
        let options = { MAIN, ...opt };
        ResourceModule.get(options, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),

}
