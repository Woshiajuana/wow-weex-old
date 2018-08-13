
import MetaPlugin                   from './../lib/meta.plugin'
import Dialogs                      from './../lib/dialogs.plugin'

const methods = {
    metaGetData (key) {
        return MetaPlugin.get({key}).then((result) => {
            Dialogs.alert(result);
            let { data } = result;
            for (let key in data) {
                this[key] = data[key];
            }
        }).catch(() => {
            Dialogs.alert('1');
        })
    }
};

export default {
    methods,
}
