/**
 * 发布环境版本
 * */
import process from '../../tools/process'
import log from '../../tools/log'
import fs from '../../tools/fs'
import path from 'path'
let env_arr = process.getParameter();
let env = env_arr[0];
let regular = ['BD', 'CS', 'ZSC', 'SC'];
env = env && env.toUpperCase();
if (!env) {
    log(`没有获取到发布环境，即将设置默认发布环境`);
    env = getEnv();
    if (regular.indexOf(env) < -1) {
        log(`默认环境设置错误，环境为：${env}`, '004');
    } else {
        log(`即将启用默认发布环境：${env}`);
        setEnv(env) ? log(`发布环境操作完成`) : log(`发布环境操作失败`, '004');

    }
} else if (regular.indexOf(env) > -1) {
    log(`获取到发布环境：${env}，即将设置发布环境`);
    setEnv(env);
    log(`发布环境操作完成`);
} else {
    log(`发布环境设置错误，环境为：${env}`, '004');
}
function setEnv(env) {
    let result = true;
    let content = `module.exports = '${env}';`;
    try {
        fs.writeFileSync(path.join(__dirname, '../../config/release/index.js'), content);
        let content_env = fs.readFileSync(path.join(__dirname, '../../src/config/env/'+ env +'.js'));
        log(`${env}环境内容如下：\n${content_env}`);
        fs.writeFileSync(path.join(__dirname, '../../src/config/env/index.js'), content_env);
    } catch (e) {
        log(`环境设置错误，错误为：${e}`, '004');
        result = false;
    }
    return result;
}
function getEnv() {
    let content = fs.readFileSync(path.join(__dirname, '../../config/release/index.js'));
    if (!content) return log(`没有获取到默认发布环境`, '004');
    content = content.substring(content.indexOf('\'') + 1, content.lastIndexOf('\''));
    return content;
}

