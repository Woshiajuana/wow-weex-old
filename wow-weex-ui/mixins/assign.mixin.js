const methods = {
    _wowAssign (obj_props, config) {
        for (let key in obj_props) {
            this[key] = Object.assign({}, config[key.replace('d_', '')], this[key.replace('d_', '')]);
        }
    }
};

export default {
    methods
}
