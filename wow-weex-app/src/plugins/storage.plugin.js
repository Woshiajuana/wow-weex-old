
/**
 * 存储模块
 * */

const storage = weex.requireModule('storage');

const DEFAULT_FORMAT = {
    data: '',
    effect_time: 0,
};

/**
 * 存储数据
 * @param   key     {string}    键值对KEY
 * @param   value   {string}    键值对VALUE
 * @param   option  {object}    参数配置
 * */
const set = (key, value, option) => new Promise((resolve, reject) => {
    storage.setItem(key, encode(value, option), e => {
        e.result === 'success' ? resolve() : reject('set store error');
    });
});

/**
 * 获取数据
 * @param   key     {string}    键值对KEY
 * */
const get = key => new Promise((resolve, reject) => {
    storage.getItem(key, e => {
        e.result === 'success' ? resolve(decode(e.data)) : reject(key + ' is undefined');
    });
});

/**
 * 判断数据是否有存储
 * @param   key     {string}    键值对KEY
 * */
const has = key => new Promise((resolve, reject) => {
    storage.getAllKeys(e => {
        e.data.indexOf(key) !== -1 ? resolve() : reject(key + ' is undefined');
    });
});

/**
 * 删除数据
 * @param   key     {string}    键值对KEY
 * */
const remove = key => new Promise((resolve, reject) => {
    storage.removeItem(key, e => {
        if (e.result === 'success') return resolve();
        hasItem(key).then(() => reject('remove store error')).catch(() => resolve());
    });
});

/**
 * 清除数据
 * */
const clear = () => new Promise((resolve, reject) => {
    return storage.getAllKeys(e => {
        if (e.result !== 'success') return reject(e);
        let keys = e.data;
        let promises = [];
        keys.forEach(key => promises.push(remove(key)));
        return Promise.all(promises);
    });
});


/**
 * 生成数据格式
 * @param   data    {object}    数据
 * @param   option  {object}    参数配置
 * @return          {string}    JSON String
 * */
const encode = (data = {}, option) => {
    data = Object.assign(DEFAULT_FORMAT, option, {data});
    data.update_time = new Date().getTime();
    return JSON.stringify(data)
};

/**
 * 获取数据格式
 * */
const decode = (data) => {
    data = JSON.parse(data);
    let effect_time = data.effect_time;
    let update_time = data.update_time;
    data = (effect_time + update_time < new Date().getTime()) ? '' : data.data;
    return data;
};

export default {
    set,
    get,
    has,
    remove,
    clear,
}
