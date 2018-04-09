import http     from 'modules/http'
import _        from 'utils/lodash'

class Tip {
    getTip () {
         return new Promise((resolve, reject) => {
             http('getAppTip.Req', {}, { mode: 'before' }).then((result) => {
                 if(result.respCode !== '0000') return reject(result.respDesc);
                 let tip_info = _.keyBy(result.data, 'tipType');
                 resolve(tip_info);
             }).catch((error) => {
                 reject(error);
             });
         })
    }
}

export default Tip;
