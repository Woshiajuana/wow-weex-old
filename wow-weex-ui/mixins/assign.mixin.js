const methods = {
    _wowAssign (obj_props, config) {
        for (let key in obj_props) {
            this[key] = Object.assign(config[key], this[key]);
        }
    }
};

export default {
    methods
}
