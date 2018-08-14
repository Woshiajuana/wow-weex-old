
import { data, methods as metaMethods }         from '../mixins/meta.mixin'
import { methods as resourceMethods }           from '../mixins/resource.mixin'
import Dialogs                                  from '../lib/dialogs.plugin'

const methods = {
    ...resourceMethods,
    ...metaMethods,
    renderView (key, prop) {
        this.metaGetData(key).then(() =>{
            Dialogs.alert(this.meta$)
            // return this.resourceGet(this.meta$[prop]);
        }).catch((error) => {
            Dialogs.alert(error)
        });
    }
};

export default {
    data,
    methods,
}
