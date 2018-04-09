import regx from 'dd-pipe/regx';
import _ from 'dd-pipe/utlis/lodash';
import store from 'dd-pipe/utlis/store';

const keyname = 'USERS_HISTORY';

export default {
    get: () => store.get(keyname),

    set: info => store.get(keyname).then(e => Promise.resolve(e)).catch(() => Promise.resolve([])).then(e => {
        let history = _.isArray(e) ? e : [];
        history.forEach((item, i) => {
            if (_.isObject(item) && regx.isPhone(item.mobileNo)) {
                if (item.mobileNo === info.mobileNo) {
                    history.splice(i, 1);
                }
            } else {
                history.splice(i, 1);
            }
        });
        history.unshift(info);
        return store.set(keyname, history);
    })
};
