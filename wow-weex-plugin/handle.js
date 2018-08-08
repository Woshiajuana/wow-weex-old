
// 插件处理器
import './es6-promise.util'
import Config                      from './config'

// import Dialogs                          from './lib/dialogs.plugin'
const {
    APP,                           // 主键
    ARR_SUCCESS_CALLBACK_CODE,      // 成功码
    ARR_SUCCESS_CALLBACK_MSG,       // 成功对应提示
    ARR_ERROR_CALLBACK_CODE,        // 错误码
    ARR_ERROR_CALLBACK_MSG,         // 错误对应提示
    NONE_FUN_CODE,                  // 无对应方法错误码
    NONE_FUN_MSG,                   // 无对应方法错误提示
    HANDLE_RETURN_FORMAT,           // 插件返回格式
    ERROR_CALLBACK,                 // 错误回调参数格式
    SUCCESS_CALLBACK,               // 成功回调参数格式
} = Config;


// handle 处理
// @params  fire    [Function]      插件方法
// @params  opt     [Object]        参数
const Handle = (fire, options = {}) => new Promise((resolve, reject) => {
    let app = Handle.checkKey(options);
    if (app.msg) return Handle.error(reject, app);
    options = { app, ...options };
    if (!fire) return Handle.error(reject, { code: NONE_FUN_CODE, msg: NONE_FUN_MSG });
    fire(options, (e) => {
        let code = e[HANDLE_RETURN_FORMAT.CODE]
            || e.result;
        let msg = e[HANDLE_RETURN_FORMAT.MSG]
            || ARR_SUCCESS_CALLBACK_MSG[ARR_SUCCESS_CALLBACK_CODE.indexOf(code)]
            || ARR_ERROR_CALLBACK_MSG[ARR_ERROR_CALLBACK_CODE.indexOf(code)]
            || 'none msg';
        let data = e[HANDLE_RETURN_FORMAT.DATA] || null;
        let success = [...ARR_SUCCESS_CALLBACK_CODE, 'success'].indexOf(code) > -1;
        return success ? Handle.success(resolve, {code, msg, data}) : Handle.error(reject, {code, msg});
    });
});

// key 检测
Handle.checkKey = (options = {}) => {
    return options.APP || APP || { code: ARR_ERROR_CALLBACK_CODE[0], msg: 'must be set app' };
};

// error 回调
Handle.error = (reject, error = { code: ARR_ERROR_CALLBACK_CODE[0], msg: ARR_ERROR_CALLBACK_MSG[0] }) => {
    if (!reject) return new Promise((resolve, reject) => {
        return reject(ERROR_CALLBACK(error));
    });
    return reject(ERROR_CALLBACK(error));
};

// success 回调
Handle.success = (resolve, success = { code: ARR_SUCCESS_CALLBACK_CODE[0], msg: ARR_SUCCESS_CALLBACK_MSG[0], data: null }) => {
    if (!resolve) return new Promise((resolve) => {
        return resolve(SUCCESS_CALLBACK(success));
    });
    return resolve(SUCCESS_CALLBACK(success));
};

export default Handle;
