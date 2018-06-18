<template>
    <wow-view
        view_header_background_color="#ddd"
        view_background_color="#f2f2f2"
        :view_use_scroll="false"
        view_header_center_txt="选择类目">
        <wow-scroll
            class="result-wrap"
            @loading="handleLoading"
            @refresh="handleRefresh">
            <cell class="result-item"
                  v-for="(item, index) in arr_category"
                  @click="handleSelect(item)"
                  :key="index">
                <text class="result-name">{{ item.bankName }}</text>
            </cell>
        </wow-scroll>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowScroll                from 'wow-weex/lib/wow-scroll'
    import Channel                  from 'plugins/channel.plugin'
    import Router                   from 'plugins/router.plugin'
    import Source                   from 'utils/source.util'
    import Api                      from 'api/old.api'
    import Dialogs                  from 'plugins/dialogs.plugin'

    const $$SELECT_CATEGORY = '$$SELECT_CATEGORY';

    export default {
        data () {
            return {
                str_key_world: '',
                obj_params: '',
                num_current_index: 1,
                num_page_size: 10,
                arr_category: [],
            }
        },
        created () {
            // 获取页面参数
            this.fetchPageParams();
            // 获取列表数据
            this.fetchCategoryList();
        },
        methods: {
            // 刷新页面
            handleRefresh (callback) {
                this.num_current_index = 1;
                this.fetchCategoryList(callback);
            },
            // 加载页面
            handleLoading (callback) {
                this.num_current_index++;
                this.fetchCategoryList(callback);
            },
            // 获取页面参数
            fetchPageParams () {
                this.obj_params = Router.getParams(this) || {};
            },
            // 获取列表数据
            fetchCategoryList (callback = '') {
                let options = {
                    categoryCode: this.obj_params.category_code || 'app',
                    cityCode: this.obj_params.city_code || 'app_city_code',
                    pageIndex: this.num_current_index + '',
                    count: this.num_page_size + '',
                };
                Api.fetchList(options, !callback).then((result) => {
                    console.log(result);
                    let { code, count, data, message } = result;
                    if (code !== 200) throw message;
                    if (this.num_current_index === 1) {
                        this.arr_category = data || [];
                    } else if (data.length){
                        this.arr_category = [
                            ...this.arr_category,
                            ...data,
                        ];
                    }
                }).catch((error) => {
                    Dialogs.toast({message: error})
                }).finally(() => {
                    callback && callback();
                });
            },
            // 点击选择支行信息
            handleSelect (item) {
                Channel.post($$SELECT_CATEGORY, item);
                Router.pop();
            },
        },
        components: {
            WowView,
        }
    }
</script>
<style>
    .result-item{
        flex-direction: row;
        padding-left: 32px;
        padding-right: 32px;
        height: 100px;
        background-color: #fff;
        border-color: #ddd;
        border-bottom-width: 1px;
    }
    .result-name{
        line-height: 100px;
        font-size: 28px;
        color: #333;
    }
</style>
