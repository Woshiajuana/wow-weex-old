import http     from 'modules/http'
import encrypt  from 'modules/encrypt'
import Tip      from 'api/extends/tip'

class Register extends Tip{
    constructor () {
        super();
    }

    register (mobileNo, user_password, mobileMac = '') {
        return encrypt.encryptPassword(mobileNo, user_password).then((password) => {
            let params = { mobileNo, password, mobileMac, userName: mobileNo };
            return http('UserRegister.Req', params, { mode: 'before' });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    sendCode (mobileNo) {
        return http('GetMobileMac.Req', {mobileNo, appType: 'UserRegister'}, { mode: 'before' });
    }
}

export default new Register();
