const location = weex.requireModule('jfLocationModule');

export default {
    get: () => new Promise((resolve, reject) => {
        // return resolve({})
        location.getLocation(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),
};
