
// modal 提示弹层模块

import Config                           from '../config'

const Modal = weex.requireModule('modal');
const {
    HANDLE_RETURN_FORMAT,
} = Config;

export default {

    // 弱提示（默认3s）
    // @param   options     [object]    参数
    toast (options = {}) {
        options = formatOption(options);
        Modal.toast(options);
    },

    // 警告框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    alert (options = {}, callback) {
        options = formatOption(options);
        Modal.alert(options, callback);
    },

    // 确认框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    confirm (options = {}, callback) {
        options = formatOption(options);
        Modal.confirm(options, callback);
    },

    // 提示框
    // @param   options     [object]    参数
    // @param   callback    [fn]        回调函数
    prompt (options = {}, callback) {
        options = formatOption(options);
        Modal.prompt(options, callback);
    },

}

function formatOption (options) {
    let message = options[HANDLE_RETURN_FORMAT.MSG] || options.message || options;
    let duration = options.duration || 3;
    let okTitle = options.okTitle || '确认';
    let cancelTitle = options.cancelTitle || '取消';
    if (typeof message === 'object') message = JSON.stringify(message);
    message = message + '';
    return {
        duration,
        message,
        okTitle,
        cancelTitle,
    }
}

