
const _generateComputed = (config) => {
    let result = {};
    for (let key in config) {
        if (key.indexOf('style') > -1 && key.indexOf('checked') === -1) {
            let newKeyArr = key.split('_');
            let newKey = 'computed';
            newKeyArr.forEach((item) => {
                newKey += item.substring(0,1).toUpperCase() + item.substring(1);
            });
            result[newKey] = function () {
                return Object.assign({}, config[key], this[key])
            }
        }
    }
    return result;
};


export default {
    _generateComputed,
}
