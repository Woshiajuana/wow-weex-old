
// resourceModule 页面js资源管理模块
//

import Config                   from './config'

const ResourceModule = weex.requireModule('resourceModule');

export default {

    // @param   options     [object]   页面js对应的key值
    // options = {
    //      key:
    // }
    get: (options) => new Promise((resolve, reject) => {
        ResourceModule.get(key, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),

}
