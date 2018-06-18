<template>
    <wow-view
        view_header_background_color="#ddd"
        view_background_color="#f2f2f2"
        :view_use_scroll="false"
        view_header_center_txt="选择支行">
        <div class="search-wrap">
            <div class="search-inner">
                <input type="text" class="search-input" placeholder-color="#999" placeholder="搜索" v-model="str_key_world"/>
                <div class="search-button">
                    <image class="search-button-image" :src="src_search"></image>
                </div>
            </div>
            <text class="search-prompt">如无法选择准确的网点，建议尝试选择同城任一网点</text>
        </div>
        <wow-scroll
            class="result-wrap"
            @loading="handleLoading"
            @refresh="handleRefresh">
            <cell class="result-item"
                 v-for="(item, index) in arr_branch"
                 @click="handleSelect(item)"
                 :key="index">
                <text class="result-name">{{ item.bankName }}</text>
                <text class="result-code">{{ item.directBankCode }}</text>
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

    const $$SELECT_SUBBRANCH_BANK = '$$SELECT_SUBBRANCH_BANK';

    export default {
        data () {
            return {
                str_key_world: '',
                obj_params: '',
                num_current_index: 1,
                num_page_size: 10,
                arr_branch: [],
                src_search: Source('market_ic_search.png'),
            }
        },
        created () {
            // 获取页面参数
            this.fetchPageParams();
            // 获取列表数据
            this.fetchBranchBankList();
        },
        methods: {
            // 刷新页面
            handleRefresh (callback) {
                this.num_current_index = 1;
                this.fetchBranchBankList(callback);
            },
            // 加载页面
            handleLoading (callback) {
                this.num_current_index++;
                this.fetchBranchBankList(callback);
            },
            // 获取页面参数
            fetchPageParams () {
                this.obj_params = Router.getParams(this) || {};
            },
            // 获取列表数据
            fetchBranchBankList (callback = '') {
                let options = {
                    categoryCode: this.obj_params.category_code || '103',
                    cityCode: this.obj_params.city_code || '3330',
                    bankName: this.str_key_world,
                    pageIndex: this.num_current_index + '',
                    count: this.num_page_size + '',
                };
                Api.fetchBranchBankList(options, !callback).then((result) => {
                    console.log(result);
                    let { code, count, data, message } = result;
                    if (code !== 200) throw message;
                    if (this.num_current_index === 1) {
                        this.arr_branch = data || [];
                    } else if (data.length){
                        this.arr_branch = [
                            ...this.arr_branch,
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
                Channel.post($$SELECT_SUBBRANCH_BANK, item);
                Router.pop();
            },
        },
        components: {
            WowView,
            WowScroll,
        }
    }
</script>
<style>
    .search-wrap{
        background-color: #ddd;
        padding-right: 40px;
        padding-left: 40px;
        height: 180px;
    }
    .search-inner{
        flex-direction: row;
        align-items: center;
        background-color: #fff;
        height: 80px;
        border-radius: 8px;
        margin-top: 35px;
    }
    .search-input{
        flex: 1;
        height: 80px;
        line-height: 80;
        font-size: 32px;
        color: #333;
        padding-left: 32px;
    }
    .search-button{
        justify-content: center;
        align-items: center;
        padding-right: 32px;
        padding-left: 32px;
        height: 80px;
    }
    .search-button-image{
        width: 40px;
        height: 40px;
    }
    .search-prompt{
        margin-top: 20px;
        font-size: 24px;
        color: #fff;
    }
    .result-wrap{
        flex: 1;
    }
    .result-item{
        padding-right: 40px;
        padding-left: 40px;
        background-color: #fff;
        border-color: #ddd;
        border-bottom-width: 1px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .result-name{
        line-height: 44px;
        font-size: 32px;
        color: #333;
    }
    .result-code{
        line-height: 40px;
        font-size: 28px;
        color: #999;
    }
</style>
