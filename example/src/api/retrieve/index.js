import http     from 'modules/http'
import encrypt  from 'modules/encrypt'

class Retrieve {
    retrieve (mobileNo, user_password, mobileMac = '', realName, certPid) {
        return encrypt.encryptPassword(mobileNo, user_password).then((password) => {
            let params = { mobileNo, password, mobileMac, realName, certPid};
            return http('RetrievePassword.Req', params, { mode: 'before' });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    sendCode (mobileNo, realName, certPid) {
        return http('GetMobileMac.Req', {
            mobileNo, appType: 'RetrievePassword',
            bizParam: JSON.stringify({
                realName,
                certPid,
            })
        }, { mode: 'before' });
    }
}

export default new Retrieve();
