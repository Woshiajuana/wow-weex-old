/**
 * 设置本地IP
 * */
import process from '../../tools/process'
import log from '../../tools/log'
import fs from '../../tools/fs'
import path from 'path'
let ip_arr = process.getParameter();
let ip = ip_arr[0];
let regular = /^\d+\.\d+\.\d+\.\d+$/;
if (!ip) {
    log(`没有获取到IP，即将获取本机器IP`);
    ip = getIp();
    if(!regular.test(ip)) {
        log(`获取本机器IP格式错误，IP为：${ip}`, '004');
    } else {
        log(`即将设置本地环境为该IP：${ip}`);
        setIp(ip);
        log(`设置IP操作完成`);
    }
} else if (regular.test(ip)) {
    log(`获取到ip：${ip}，即将设置本地环境为该IP`);
    setIp(ip);
    log(`设置IP操作完成`);
} else {
    log(`IP格式设置错误，IP为：${ip}`, '004');
}
function setIp(ip) {
    let content = `export default '${ip}';`;
    fs.writeFileSync(path.join(__dirname, '../../config/ip/index.js'), content)
}
function getIp() {
    let interfaces = require('os').networkInterfaces();
    for(let devName in interfaces){
        let iface = interfaces[devName];
        for(let i=0;i<iface.length;i++){
            let alias = iface[i];
            if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
                return alias.address;
            }
        }
    }
}

