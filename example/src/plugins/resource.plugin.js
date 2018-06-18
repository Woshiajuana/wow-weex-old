/**
 * resourceModule 页面js资源管理模块
 *
 */

const ResourceModule = weex.requireModule('resourceModule');

export default {

    /**
     * @param   key     [string]   页面js对应的key值
     */
    get: async (key) => new Promise((resolve, reject) => {
        ResourceModule.get(key, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),

}
