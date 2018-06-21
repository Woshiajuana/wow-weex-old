import config from 'config/wow-weex-plugin.config'
export default Object.assign({
    // 主键
    MAIN: '',

    // CODE码对应的信息
    CODE_MAP_MESSAGE: {
        '0000': 'success',
        '1000': 'must be set main',
        '2001': '网络错误',
        '2002': '下载失败',
        '2003': '文件删除失败',
        '2004': '文件存储失败',
        '9999': '未知错误',
    },

    // 成功码
    SUCCESS_CALLBACK_CODE: ['0000'],

    // 插件返回格式
    HANDLE_RETURN_FORMAT: {
        CODE: 'code',
        MSG: 'msg',
        DATA: 'data',
    },

    // 错误回调参数格式
    ERROR_CALLBACK: (code, msg) => {
        return { code, msg};
    },

    // 成功回调参数格式
    SUCCESS_CALLBACK: (code, msg, data) => {
        return data;
    },

}, config);
