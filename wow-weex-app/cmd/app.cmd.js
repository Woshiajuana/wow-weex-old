import wowCool          from 'wow-cool'
import appConfig        from './../config/app.config'
import log              from './../tools/log.tool'

import common           from './../tools/common.tool'

/**
 * 配置app.config.js
 * */
export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_app_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--app' || item === '-a';
    });
    let str_app = (num_app_index !== -1 && arr_parameter[num_app_index + 1]) || appConfig.str_app;
    num_app_index !== -1 && log(`APP => ${ str_app }`);
    let num_entry_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--entry' || item === '-e';
    });
    let str_entry = (num_entry_index !== -1 && arr_parameter[num_entry_index + 1]) || appConfig.str_entry;
    num_entry_index !== -1 && log(`设置entry => ${ str_entry }`);
    let num_version_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--version' || item === '-v';
    });
    let str_version = (num_version_index !== -1 && arr_parameter[num_version_index + 1]) || appConfig.str_version;
    num_version_index !== -1 && log(`设置version => ${ str_version }`);
    let num_base_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--base' || item === '-b';
    });
    let str_base = (num_base_index !== -1 && arr_parameter[num_base_index + 1]) || appConfig.str_version;
    num_base_index !== -1 && log(`设置base => ${ str_base }`);
    if (num_app_index === -1 && num_entry_index === -1 && num_version_index === -1 && num_base_index === -1) return resolve();
    const obj_app_config = JSON.stringify({
        app: str_app,
        version: str_version,
        entry: str_entry,
        base: str_base,
    });
    log(`设置app配置 => ${ obj_app_config }`);
    const str_content = `export default ${obj_app_config};`;
    common.setFun(str_content, 'app.config');
    log(`设置app基本信息配置成功`);
    return resolve();
}));
