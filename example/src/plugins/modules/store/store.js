const storage = weex.requireModule('storage');

/**
 * 存储方式 JSON
 * 实现:key: {type: Array, effect: Number, lastaccess: new Date().getTime(), storage: []}
 */

const set = (key, value, effect) => new Promise((resolve, reject) => {
    if (getType(key) !== 'string') return reject('key must be string');
    storage.setItem(key, encode(value, effect), e => {
        e.result === 'success' ? resolve() : reject('set store error');
    });
});

const get = key => new Promise((resolve, reject) => {
    if (getType(key) !== 'string') return reject('key must be string');
    storage.getItem(key, e => {
        e.result === 'success' ? resolve(decode(e.data)) : reject(key + ' is undefined');
    });
});

const has = key => new Promise((resolve, reject) => {
    if (getType(key) !== 'string') return reject('key must be string');
    storage.getAllKeys(e => {
        e.data.indexOf(key) !== -1 ? resolve() : reject(key + ' is undefined');
    });
});

const remove = key => new Promise((resolve, reject) => {
    if (getType(key) !== 'string') return reject('key must be string');
    storage.removeItem(key, e => {
        if (e.result === 'success') return resolve();
        has(key).then(() => reject('remove store error')).catch(() => resolve());
    });
});

const getAllKeys = () => new Promise((resolve, reject) => {
    storage.getAllKeys(e => {
        e.result === 'success' ? resolve(e.data) : reject(e);
    });
});

const getAll = () => getAllKeys().then(keys => {
    let promises = [];
    keys.forEach(key => promises.push(get(key).then(value => {
        return { [key]: value };
    })));
    return Promise.all(promises).then(result => {
        let info = {};
        result.forEach(item => {
            info = { ...info, ...item };
        });
        return info;
    });
});

const clear = () => getAllKeys().then(keys => {
    let promises = [];
    keys.forEach(key => promises.push(remove(key)));
    return Promise.all(promises);
});

export default {
    set: set,
    get: get,
    has: has,
    remove: remove,
    getAllKeys: getAllKeys,
    getAll: getAll,
    clear: clear
};

/**
 * 数据存储方式
 * @param  {any} value  数据
 * @param  {Number} effect 有效次数
 * @return {[type]}        JSON String
 */
const encode = (value, effect = 0) => JSON.stringify({
    _name_: 'store',
    type: getType(value),
    effect: effect,
    lastaccess: new Date().getTime(),
    // lastaccess: 1444521600000,
    storage: value
});

/**
 * 获取
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
const decode = value => {
    try {
        const store = JSON.parse(value);
        return store._name_ === 'store' ? store.storage : store;
    } catch (e) {
        return value;
    }
};

/**
 * get type
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
const getType = value => Object.prototype.toString.call(value).toLowerCase().match(/\s\w+/)[0].trim();
