Promise.prototype.handle = function() {
    const systems = ['0000', '0001', '0002', '0003', '0004', '1001'];
    const messages = {
        '0000': '成功',
        '0001': '网络错误',
        '0002': '下载失败',
        '0003': '文件删除失败',
        '0004': '文件存储失败',
        '1001': '扫描超时',
        '01': '缺少必填参数',
        '02': '参数格式不正确',
        '03': '找不到对应的值',
        '04': '未知错误',
        '05': '返回数据为空或解析错误',
    };
    return this.catch(reason => {
        if (Object.prototype.toString.call(reason).indexOf('Error') != -1) throw reason.message;
        if (reason && reason.code) {
            let code = reason.code;
            code = systems.indexOf(code) != -1 ? code : code.substr(2);
            throw messages[code] || reason.data || messages['04'];
        }
        throw reason;
    });
};

Promise.prototype.finally = function (callback) {
    let P = this.constructor;
    return this.then(
        value  => P.resolve(callback()).then(() => value),
        reason => P.resolve(callback()).then(() => { throw reason })
    );
};
