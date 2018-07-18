import config from 'config/wow-weex-plugin.config'
export default Object.assign({
    // 主键
    MAIN: '',

    // 成功码
    ARR_SUCCESS_CALLBACK_CODE: ['0000'],
    ARR_SUCCESS_CALLBACK_MSG: ['success'],

    // 错误码
    ARR_ERROR_CALLBACK_CODE: ['9999'],
    ARR_ERROR_CALLBACK_MSG: ['error'],

    // 无对应方法错误码
    NONE_FUN_CODE: '-1',
    NONE_FUN_MSG: '请下载最新APP',

    // 插件返回格式
    HANDLE_RETURN_FORMAT: {
        CODE: 'code',
        MSG: 'msg',
        DATA: 'data',
    },

    // 错误回调参数格式
    ERROR_CALLBACK: (error = {}) => {
        return error;
    },

    // 成功回调参数格式
    SUCCESS_CALLBACK: ({code, msg, data}) => {
        return data;
    },

}, config);
