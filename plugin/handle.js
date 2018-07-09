
import Config                      from 'config'

const {
    MAIN,
    CODE_MAP_MESSAGE,
    SUCCESS_CALLBACK_CODE,
    HANDLE_RETURN_FORMAT,
    SUCCESS_CALLBACK,
    ERROR_CALLBACK,
    NONE_FUN_CODE,
    OTHER_CODE,
} = Config;

const Handle = (fire, options) => new Promise((resolve, reject) => {
    if (!fire) this.error(NONE_FUN_CODE, CODE_MAP_MESSAGE[NONE_FUN_CODE], reject);
    fire(options, (e) => {
        let code = e[HANDLE_RETURN_FORMAT.CODE] || e.result;
        let msg = e[HANDLE_RETURN_FORMAT.MSG] || CODE_MAP_MESSAGE[code] || 'none msg';
        let data = e[HANDLE_RETURN_FORMAT.DATA];
        let success = [...SUCCESS_CALLBACK_CODE, 'success'].indexOf(code) > -1;
        return success ? this.success({code, msg, data}, resolve) : this.error({code, msg}, reject);
    });
});

Handle.checkKey = () => {
    return MAIN || {code: OTHER_CODE, msg : 'must be set main'};
};

Handle.error = ({code, msg}, reject) => {
    if (!reject) return new Promise((resolve, reject) => {
        return reject(ERROR_CALLBACK(code, msg));
    });
    return reject(ERROR_CALLBACK(code, msg));
};

Handle.success = ({code, msg, data}, resolve) => new Promise((resolve, reject) => {
    return resolve(SUCCESS_CALLBACK(code, msg, data));
});

export default Handle;
