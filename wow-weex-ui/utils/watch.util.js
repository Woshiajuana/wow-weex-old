
const _generateWatch = (obj) => {
    let result = {};
    for (let key in obj) {
        let new_key = key.replace('d_', '');
        result[new_key] = {
            handler(val, oldval){
                this[key] = Object.assign(this[key], this[new_key]);
            },
        }
    }
    return result;
};

export default {
    _generateWatch,
}
