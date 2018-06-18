
/**
 * loading 模块
 */

const LoadingModule = weex.requireModule('loadingModule');

export default {
    /**
     * 显示
     * @param   options     [object]    参数
     * */
    show: (options = {touch: false}) => {
        LoadingModule.show(options);
    },

    /**
     * 隐藏
     * */
    hide: () => {
        LoadingModule.hide();
    }
};
