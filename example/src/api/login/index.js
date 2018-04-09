import http     from 'modules/http'
import encrypt  from 'modules/encrypt'
import Tip      from 'api/extends/tip'

class Login extends Tip{
    constructor () {
        super();
    }

    login (mobileNo, user_password, checkCode = '') {
        return encrypt.encryptPassword(mobileNo, user_password).then((password) => {
            let params = { mobileNo, password };
            checkCode && (params.checkCode = checkCode);
            return http('NewUserLogin.Req', params, { mode: 'before' });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    refreshCode (mobileNo) {
        return http('GetCheckCode.Req', {mobileNo}, { mode: 'before' });
    }
}

export default new Login();
