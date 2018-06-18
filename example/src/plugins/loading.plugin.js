const loading = weex.requireModule('jfLoadingModule');

export default {
    show: () => {
        loading.show();
    },

    hide: () => {
        loading.dismiss();
    }
};
