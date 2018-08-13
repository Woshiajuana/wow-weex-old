
import MetaPlugin                   from './../lib/meta.plugin'
const data = () => {
    return {
        $meta: '',
    }
};

export const methods = {
    metaGetData (key) {
        return MetaPlugin.get({key}).then((result) => {
            if (!result) return;
            result = JSON.parse(result);
            let { data } = result;
            for (let key in data) {
                // this.$set(this.$meta, key, data[key]);
            }
        })
    }
};

export default {
    data,
    methods,
}
