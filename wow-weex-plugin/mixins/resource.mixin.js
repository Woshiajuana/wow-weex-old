import Resource             from './../lib/resource.plugin'

const methods = {
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
