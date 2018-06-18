import wowCool          from 'wow-cool'
import log              from './../tools/log.tool'
import common           from './../tools/common.tool'

/**
 * ip.config.js
 * */
export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_ip_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--ip' || item === '-i';
    });
    if (num_ip_index === -1) return resolve();
    let str_ip = arr_parameter[num_ip_index + 1];
    let regular = /^\d+\.\d+\.\d+\.\d+$/;
    if (!regular.test(str_ip)) {
        log(`IP格式错误，IP为：${str_ip}`, '004');
        str_ip = common.getIp();
        log(`设置默认本地IP地址 => ${ str_ip }`);
    }
    log(`设置本地IP地址 => ${ str_ip }`);
    const str_content = `export default "${str_ip}";`;
    common.setFun(str_content, 'ip.config');
    log(`设置本地IP地址配置成功`);
    return resolve();
}));
