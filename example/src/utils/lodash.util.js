export default {

  fill: (length) => fill(length),

  keys: (object) => getKeys(object),
  keyBy: (array, key) => keyBy(array, key),
  catKeys: (object, array) => catKeys(object, array),
  catArrayKey: (array, key) => catArrayKey(array, key),
  defaults: (value, template) => defaults(value, template),

  isEmpty: (value) => isEmpty(value),

  getType: (value) => getType(value),
  checkType: (value, type) => checkType(value, type),

  isString: (check) => checkType(check, 'string'),
  isBoolean: (check) => checkType(check, 'boolean'),
  isArray: (check) => checkType(check, 'array'),
  isNumber: (check) => checkType(check, 'number'),
  isFunction: (check) => checkType(check, 'function'),
  isObject: (check) => checkType(check, 'object'),
  isError: (check) => checkType(check, 'error'),
};

/**
 * 创建单位长度的空数组
 */
const fill = length => Array.apply(null, Array(length));

/**
 * get object keys
 * [key1,key2]
 */
const getKeys = (object) => {
  let keys = [];
  if (getType(object) === 'object' && !isEmpty(object)) {
    for (var key in object) {
      keys.push(key);
    };
  };
  return keys;
};

/**
 * 判断对象是否为空
 * true: {},[],bool,"",null,undefined
 * false: {a:1},[1],"1"
 */
const isEmpty = value => {
  if (checkType(value,'string') || checkType(value,'array')) {
    return value.length === 0;
  }
  if (checkType(value,'object')) {
    for (let key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
  }
  return true;
};

/**
 * get 对象的类型
 */
const getType = value => {
  // Object.prototype.toString.call(Array) === '[object Array]'; 
  // [object String] [object Object] [object Number] [object Undefined] [object Null] [object Boolean]
  return Object.prototype.toString.call(value).toLowerCase().match(/\s\w+/)[0].trim();
};

/**
 * 判断对象的类型
 */
const checkType = (check, type) => {
  return getType(check) === type.toLowerCase();
};

/**
 * array 按 key 重组成对象
 * var arr = [{name:"lisa",sex:"man"},{name:"lucy",sex:"wom"}]
 * keyBy(arr,'name') ==> {lisa:{name:"lisa",sex:"man"},lucy:{name:"lucy",sex:"wom"}}
 */
const keyBy = (array, key, callBack = {}) => {
  if (checkType(array,'array')) {
    array.forEach(function (item) {
      callBack = {
        ...callBack,
        [item[key]]: item
      }
    })
    return callBack;
  }
};

/**
 * obj 取出 keys 键值
 */
const catKeys = (value, keys) => {
  var obj = {};
  if (checkType(value, 'object') && checkType(keys, 'array')) {
    keys.forEach(function (i) {
      obj[i] = value[i]
    })
  }
  return obj;
};

const catArrayKey = (value, key) => {
  var arr = [];
  if (checkType(value, 'array') && checkType(key, 'string')) {
    value.forEach(function (i) {
      if (i[key] && arr.indexOf(i[key]) == -1) {
        arr.push(i[key])
      }
    })
  }
  return arr;
};

const defaults = (value, template) => {
  return catKeys(value, getKeys(template));
};
