
import MetaPlugin                   from './../lib/meta.plugin'

const methods = {
    metaGetData (key) {
        return MetaPlugin.get({key}).then((result) => {
            let { data } = result;
            for (let key in data) {
                this[key] = data[key];
            }
        }).catch(() => {})
    }
};

export default {
    methods,
}
