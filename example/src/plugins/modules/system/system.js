const system = weex.requireModule('systemModule');

export default {
    sendSMS: (content = '') => new Promise((resolve, reject) => {
        system.sendSMS(content, e => {
            e.code === '0000' ? resolve() : reject(e);
        });
    }).handle(),

    callTel: (telNo = '') => {
        system.callTel(telNo.toString());
    },

    save: (url = '') => new Promise((resolve, reject) =>{
        system.savePhotoAlbum(url, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),

    ip: () => new Promise((resolve, reject) => {
        system.getIpAddress(e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),
    /**禁用*/
    setTouchPop: (type = 'true') => new Promise((resolve, reject) => {
        system.setTouchPop(type, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        })
    }),
};

