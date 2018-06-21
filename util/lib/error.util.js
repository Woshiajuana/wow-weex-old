import DialogsPlugin                    from 'plugins/dialogs.plugin'
import ErrorConfig                      from 'config/error.config'
export default {

    // 插件error
    errorPlugin (error, reject) {
        let code = '0001';
        if (typeof error === 'string') return reject({code, msg: error});
        return reject({code, msg: 'plugin error'});
    },

    // 处理error
    handleError (error) {
        let { code, msg } = error;
        if (ErrorConfig.console.indexOf(code) > -1) console.log(error);
        if (ErrorConfig.toast.indexOf(code) > -1) DialogsPlugin.toast(msg);
    }
}
