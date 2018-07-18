
const openPay = weex.requireModule('openPayModule');

let PAY_ENV_SET_STATUS = false; // 是否设置环境

export default {
    // 唤起支付SDK，支付
    pay: ( pay_info ) => new Promise((resolve, reject) => {
        openPay.pay(pay_info, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),
    // 查询余额
    query: ( option ) => new Promise((resolve, reject) => {
        openPay.queryBalance(option, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),
    // 提款
    draw: ( option ) => new Promise((resolve, reject) => {
        openPay.drawMoney(option, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),
    // 设置环境
    set: ( open_pay, open_pay_upload ) => new Promise((resolve, reject) => {
        if (PAY_ENV_SET_STATUS) return resolve();
        openPay.setOpenPayUrl(open_pay, open_pay_upload, e => {
            if (e.code !== '0000') return reject('设置环境失败');
            PAY_ENV_SET_STATUS = true;
            resolve();
        })
    }),
}



