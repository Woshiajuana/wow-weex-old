import http     from 'modules/http'
import encrypt  from 'modules/encrypt'

class Login {
    login (mobileNo, user_password, check_code = '') {
        return encrypt.encryptPassword(mobileNo, user_password).then((password) => {
            return http('', { mobileNo, password }, { mode: 'before' });
        });
    }
}

export default new Login();
