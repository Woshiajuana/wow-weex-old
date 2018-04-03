import '../../fn/Promise';
const encrypt = weex.requireModule('jfServiceModule');
export default {
    md5: string => new Promise((resolve, reject) => {
        encrypt.md5(string, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),

    getUUID: mobileNo => new Promise((resolve, reject) => {
        encrypt.getUUID(mobileNo, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),
    getParameter:()=>new Promise((resolve, reject) => {
        encrypt.getParameter(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),
}
