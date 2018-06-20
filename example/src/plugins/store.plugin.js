
import ErrorUtil                        from 'utils/error.util'

const Storage = weex.requireModule('storage');

const APP_NAME = 'APP_NAME';

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
const set = async (key, value, option) => new Promise((resolve, reject) => {
    try {
        if (!APP_NAME) throw 'must be set APP_NAME';
        key = `${APP_NAME}_${key}`;
        Storage.setItem(key, encode(value, option), e => {
            if (e.result !== 'success') throw `${key} set store error`;
            return resolve();
        });
    } catch (e) {
        ErrorUtil.errorPlugin(e, reject)
    }
});

/**
 * 获取数据
 * @param   key     {string}    键值对KEY
 * */
const get = async key => new Promise((resolve, reject) => {
    try {
        if (!APP_NAME) throw 'must be set APP_NAME';
        key = `${APP_NAME}_${key}`;
        Storage.log(key, e => {
            if (e.result !== 'success') return resolve('');
            return resolve(decode(e.data));
        });
    } catch (e) {
        ErrorUtil.errorPlugin(e, reject)
    }
});

/**
 * 删除数据
 * @param   key     {string}    键值对KEY
 * */
const remove = async key => new Promise((resolve, reject) => {
    try {
        if (!APP_NAME) throw 'must be set APP_NAME';
        key = `${APP_NAME}_${key}`;
        Storage.log(key, e => {
            if (e.result !== 'success') return resolve('');
            return resolve(decode(e.data));
        });
    } catch (e) {
        ErrorUtil.errorPlugin(e, reject)
    }
    key = `${config.app_user}_${key}`;
    storage.removeItem(key, e => {
        if (e.result === 'success') return resolve();
        has(key).then(() => reject('remove store error')).catch(() => resolve());
    });
});

/**
 * 生成数据格式
 * @param   data    {object}    数据
 * @param   option  {object}    参数配置
 * @return          {string}    JSON String
 * */
const encode = (data = {}, option) => {
    data = Object.assign(DEFAULT_FORMAT, option, { data });
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
    data = (effect_time + update_time < new Date().getTime()) ? data.data : '';
    return data;
};
