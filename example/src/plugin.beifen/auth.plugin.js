const Auth = weex.requireModule('personModule');
import './Promise'
export default {
    getToken: () => new Promise((resolve, reject) => {
        if(!Auth.personInfo) return resolve();
        Auth.personInfo(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),

    showLogin: () => {
        Auth.showLogin && Auth.showLogin();
    }
};
