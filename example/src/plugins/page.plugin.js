
/**
 * pageModule 页面管理模块
 */

const PageModule = weex.requireModule('pageModule');

export default {

    /**
     * 删除页面实例
     * @param options   [object]    参数
     */
    remove (options = { num_back: '1' }) {
        PageModule.remove(options, e => {});
    },

    /**
     * 回退到根页面实例
     * @param options   [object]    参数
     */
    root (options = '') {
        PageModule.root(options, e => {});
    }
}
