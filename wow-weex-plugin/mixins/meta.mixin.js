
import MetaPlugin                   from './../lib/meta.plugin'
import Dialogs                   from './../lib/dialogs.plugin'

export const methods = {
    metaGetData (key) {
        return MetaPlugin.get({key}).then((result) => {
            if (!result) return;
            result = JSON.parse(result);
            let { data } = result;
            for (let key in data) {
                Dialogs.alert(this.$data)
                this.$set(this.$data, 'x1', '2');
                setTimeout(() => {
                    Dialogs.alert(this.$data)
                },2000)
                // this[key] = data[key];
            }
        })
    }
};

export default {
    methods,
}
