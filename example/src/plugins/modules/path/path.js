/**
 * 前端js资源获取
 * loadResurceModule
 *      addEventListener
 *      removeAllEventListeners
 *      getRoutePath
 * */
const loadResource = weex.requireModule('loadResurceModule');
import _ from 'utils/lodash';
export default {
    page: (argument) => {
        if (_.isString(argument)) {
            return getPagePath(argument).handle()
        }
        if (_.isArray(argument)) {
            let promises = [];
            argument.forEach(arg => promises.push(getPagePath(arg)));
            return Promise.all(promises).handle()
        }
    },
};
const getPagePath = (string = '') => new Promise((resolve, reject) => {
    const page_name = string.substr(string.lastIndexOf("/") + 1).split(".")[0];
    loadResource.getRoutePath(page_name, e => {
        e.code === '0000' ? resolve(e.data) : reject(e);
    });
});
