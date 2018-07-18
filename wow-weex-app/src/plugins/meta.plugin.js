const loadMeta = weex.requireModule('loadMetaModule');
import './Promise'
export default {
    get: (pagename, component) => new Promise((resolve, reject) => {
        loadMeta.getSourceMeta((e) => {
            e.data = e.data.data ? e.data.data : e.data;
            if (!pagename) return resolve(e.data); // 不需要获取页面
            e.data.forEach(pages => {
                if (pagename === pages.name) {
                    if (!component) return resolve(pages.components); // 不需要获取组件
                    pages.components.forEach(cmpt => {
                        if (component === cmpt.type) return resolve(cmpt);
                    });
                }
            });
        });
    }).handle(),

    refresh: () => new Promise((resolve, reject) => {
        loadMeta.refreshSourceMeta(e => {
            e.code === '0000' ? resolve() : reject(e);
        });
    }).handle(),

};
