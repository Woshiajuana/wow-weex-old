/**
 * 设置日志状态
 * */
import process from '../../tools/process'
import log from '../../tools/log'
import fs from '../../tools/fs'
import path from 'path'
let status_arr = process.getParameter();
let status = status_arr[0];
if (!status) {
    log(`没有获取到日志状态`);
} else if (typeof JSON.parse(status) === 'boolean') {
    log(`获取到日志状态：${status}，即将设置日志状态`);
    setStatus(status);
    log(`操作完成`);
} else {
    log(`日志状态设置错误，状态为：${status}`, '004');
}
function setStatus(version) {
    let content = `module.exports = ${version};`;
    fs.writeFileSync(path.join(__dirname, '../../config/log/index.js'), content)
}

