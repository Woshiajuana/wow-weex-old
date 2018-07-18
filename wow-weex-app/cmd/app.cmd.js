import wowCool          from 'wow-cool'
import appConfig        from './../config/app.config'
import log              from './../tools/log.tool'

import common           from './../tools/common.tool'

/**
 * 配置app.config.js
 * */
export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_app_user_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--app_user' || item === '-a';
    });
    let str_app_user = (num_app_user_index !== -1 && arr_parameter[num_app_user_index + 1]) || appConfig.str_app_user;
    num_app_user_index !== -1 && log(`设置appUser => ${ str_app_user }`);
    let num_sign_key_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--sign_key' || item === '-s';
    });
    let str_sign_key = (num_sign_key_index !== -1 && arr_parameter[num_sign_key_index + 1]) || appConfig.str_sign_key;
    num_sign_key_index !== -1 && log(`设置signKey => ${ str_sign_key }`);
    let num_version_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--version' || item === '-v';
    });
    let str_version = (num_version_index !== -1 && arr_parameter[num_version_index + 1]) || appConfig.str_version;
    num_version_index !== -1 && log(`设置version => ${ str_version }`);
    if (num_app_user_index === -1 && num_sign_key_index === -1 && num_version_index === -1) return resolve();
    const obj_app_config = JSON.stringify({
        appUser: str_app_user,
        signkey: str_sign_key,
        version: str_version,
    });
    log(`设置app配置 => ${ obj_app_config }`);
    const str_content = `export default ${obj_app_config};`;
    common.setFun(str_content, 'app.config');
    log(`设置app基本信息配置成功`);
    return resolve();
}));
