/**
 * 增加H5版本
 * */
import process from '../../tools/process'
import log from '../../tools/log'
import fs from '../../tools/fs'
import path from 'path'
let version_arr = process.getParameter();
let version = version_arr[0];
let regular = /^\d+\.\d+\.\d+$/;
if (!version) {
    log(`没有获取到版本号，即将获取默认版本号`);
    version = getVersion();
    if(!regular.test(version)) {
        log(`默认版本号格式错误，版本号为：${version}`, '004');
    } else {
        log(`即将启用默认版本号：${version}`);
        log(`设置版本号操作完成`);
    }
} else if (regular.test(version)) {
    log(`获取到版本号：${version}，即将设置H5为该版本`);
    setVersion(version);
    log(`设置版本号操作完成`);
} else {
    log(`版本号格式设置错误，版本号为：${version}`, '004');
}
function setVersion(version) {
    let content = `export default '${version}';`;
    fs.writeFileSync(path.join(__dirname, '../../config/version/index.js'), content)
}
function getVersion() {
    let content = fs.readFileSync(path.join(__dirname, '../../config/version/index.js'));
    if (!content) return log(`没有获取到默认版本`, '004');
    content = content.substring(content.indexOf('\'') + 1, content.lastIndexOf('\''));
    return content;
}

