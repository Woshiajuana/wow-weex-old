
// modal 提示弹层模块

import Config                           from '../config'
import Handle                           from '../handle'

const Modal = weex.requireModule('modal');
const {
    HANDLE_RETURN_FORMAT,
} = Config;

export default {

    // 弱提示（默认3s）
    // @param   options     [Object|String]     参数
    toast (options = {}) {
        options = formatOption(options);
        Modal.toast(options);
    },

    // 警告框
    // @param   options     [Object|String]     参数
    // @param   callback    [fn]                回调函数
    alert (options = {}) {
        return handleCallback(options, 'alert');
    },

    // 确认框
    // @param   options     [Object|String]     参数
    // @param   callback    [fn]                回调函数
    confirm (options = {}) {
        return handleCallback(options, 'confirm');
    },


    // 提示框
    // @param   options     [Object|String]     参数
    // @param   callback    [fn]                回调函数
    prompt (options = {}) {
        return handleCallback(options, 'prompt');
    },

}

function handleCallback (options, fn) {
    return new Promise((resolve, reject) => {
        options = formatOption(options);
        Modal[fn](options, (result) => {
            if (options.okTitle === result) Handle.success(resolve);
            if (options.cancelTitle === result) Handle.error(reject);
        });
    });
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

