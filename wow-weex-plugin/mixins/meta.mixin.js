
import MetaPlugin                   from './../lib/meta.plugin'

export const methods = {
    metaGetData (key) {
        return MetaPlugin.get({key}).then((result) => {
            if (!result) return;
            result = JSON.parse(result);
            let { data } = result;
            for (let key in data) {
                this[key] = data[key];
            }
        })
    }
};

export default {
    methods,
}
