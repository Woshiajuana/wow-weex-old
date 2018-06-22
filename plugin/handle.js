
import Config                      from 'config'

const {
    MAIN,
    CODE_MAP_MESSAGE,
    SUCCESS_CALLBACK_CODE,
    HANDLE_RETURN_FORMAT,
    SUCCESS_CALLBACK,
    ERROR_CALLBACK,
} = Config;

const Handle = (e) => {
    let code = e[HANDLE_RETURN_FORMAT.CODE];
    let msg = e[HANDLE_RETURN_FORMAT.MSG] || CODE_MAP_MESSAGE[code] || 'none msg';
    let data = e[HANDLE_RETURN_FORMAT.DATA];
    let success = SUCCESS_CALLBACK_CODE.indexOf(code) > -1;
    return success ? this.success(code, msg, data) : this.error(code, msg);
};

Handle.checkKey = () => {
    return MAIN || {code: '', msg : 'must be set main'};
};

Handle.error = (code, msg) => new Promise((resolve, reject) => {
    return reject(ERROR_CALLBACK(code, msg));
});

Handle.success = (code, msg, data) => new Promise((resolve, reject) => {
    return resolve(SUCCESS_CALLBACK(code, msg, data));
});

export default Handle;
