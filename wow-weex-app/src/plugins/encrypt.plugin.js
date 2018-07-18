import './Promise'
const encrypt = weex.requireModule('jfServiceModule');

export default {

    md5 (string) {
        return new Promise((resolve, reject) => {
            encrypt.md5(string, e => {
                e.code === '0000' ? resolve(e.data) : reject(e);
            });
        }).handle()
    },

    getUUID (mobileNo) {
        return new Promise((resolve, reject) => {
            encrypt.getUUID(mobileNo, e => {
                e.code === '0000' ? resolve(e.data) : reject(e);
            });
        }).handle()
    },

    getParameter () {
        return new Promise((resolve, reject) => {
            encrypt.getParameter(e => {
                e.code === '0000' ? resolve(e.data) : reject(e);
            });
        }).handle()
    },

    encryptPassword (password, mobile) {
        return new Promise((resolve, reject) => {
            encrypt.encryptPwd(password, mobile, e => {
                e.code === '0000' ? resolve(e.data) : reject(e);
            })
        }).handle()
    },
}

