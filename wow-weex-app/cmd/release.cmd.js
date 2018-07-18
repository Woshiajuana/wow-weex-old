
import wowCool          from 'wow-cool'
import releaseConfig    from './../config/release.config'
import log              from './../tools/log.tool'
import common           from './../tools/common.tool'
import fs               from './../tools/fs.tool'
import path             from 'path'


/**
 * 发布环境
 * */
export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_release_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--release' || item === '-r';
    });
    let str_release = (num_release_index !== -1 && arr_parameter[num_release_index + 1]) || releaseConfig;
    str_release = str_release ? str_release.toLocaleLowerCase() : '';
    let regular = ['bd', 'cs', 'zsc', 'sc'];
    if (regular.indexOf(str_release) === -1) {
        log(`环境设置错误，环境为：${str_release}`, '004');
        return resolve();
    }
    if (num_release_index === -1) return resolve();
    log(`设置发布环境 => ${ str_release }`);
    const str_content = `module.exports = "${str_release.toUpperCase()}";`;
    common.setFun(str_content, 'release.config');
    log(`设置发布环境配置成功`);
    setRelease(str_release) ? log(`发布环境操作完成`) : log(`发布环境操作失败`, '004');
    return resolve();
}));

function setRelease(env) {
    let result = true;
    try {
        let content_env = fs.readFileSync(path.join(__dirname, `./../src/config/env.${env}.config.js`));
        log(`${env}环境内容如下：\n${content_env}`);
        content_env = `import env from './env.${env}.config';\nexport default env;`;
        fs.writeFileSync(path.join(__dirname, './../src/config/env.config.js'), content_env);
    } catch (e) {
        log(`环境设置错误，错误为：${e}`, '004');
        result = false;
    }
    return result;
}
