
// modal 提示弹层模块

import Config                           from '../config'

const Modal = weex.requireModule('modal');
const {
    HANDLE_RETURN_FORMAT,
} = Config;

export default {

    // 弱提示（默认3s）
    // @param   options     [object]    参数
    toast (options) {
        let message = options[HANDLE_RETURN_FORMAT.MSG] || options.message || options;
        let duration = options.duration || 3;
        if (typeof message === 'object') message = JSON.stringify(message);
        message = message + '';
        Modal.toast({ message, duration });
    },

    // 警告框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    alert (options, callback) {
        let message = options.message || options;
        let okTitle = options.okTitle || '知道了';
        if (typeof message === 'object') message = JSON.stringify(message);
        message = message + '';
        Modal.alert({ message, okTitle }, callback);
    },

    // 确认框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    confirm (options, callback) {
        let message = options.message || options;
        let okTitle = options.okTitle || '确认';
        let cancelTitle = options.cancelTitle || '取消';
        if (typeof message === 'object') message = JSON.stringify(message);
        message = message + '';
        Modal.confirm({ message, okTitle, cancelTitle }, callback);
    },

    // 提示框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    prompt (options, callback) {
        let message = options.message || options;
        let okTitle = options.okTitle || '确认';
        let cancelTitle = options.cancelTitle || '取消';
        if (typeof message === 'object') message = JSON.stringify(message);
        message = message + '';
        Modal.prompt({ message, okTitle, cancelTitle }, callback);
    },

}

