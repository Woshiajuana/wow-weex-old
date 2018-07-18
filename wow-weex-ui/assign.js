export default (default_config, set_config) => {
    forEach(default_config, (item, key) => {
        if (typeof item === 'object' && typeof set_config[key] === 'object') {
            return default_config[key] = Object.assign(item, set_config[key])
        } else if (set_config[key]) {
            default_config[key] = set_config[key]
        }
    })
    return default_config;
}

function forEach(obj, callback) {
    for (let key in obj) {
        callback(obj[key], key);
    }
}
