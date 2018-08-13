import Resource             from './../lib/resource.plugin'

export const methods = {
    // 获取页面地址
    resourceGet (arr_page) {
        arr_page.forEach((it) => {
            ((item) => {
                if(!item.src) return '';
                Resource.get({key: item.src}).then((url) => {
                    this.$set(item, 'url', url);
                }).catch((error) => {});
            })(it)
        })
    }
};

export default {
    methods,
}
