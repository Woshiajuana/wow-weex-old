<template>
    <wow-view
        view_header_background_color="red"
        view_background_color="#f2f2f2"
        view_header_center_txt="选择银行">
        <div class="wrap">
            <div class="bank-item border-right border-bottom"
                 v-for="(item, index) in arr_bank"
                 @click="handleSelect(item)"
                 :key="index">
                <image class="bank-image" :src="item.rsv1"></image>
                <text class="bank-text">{{item.dictValue}}银行</text>
            </div>
        </div>
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

    const $$SELECT_BANK = '$$SELECT_BANK';

    export default {
        data () {
            return {
                arr_bank: [],
                obj_params: '',
            }
        },
        filters: {
            filterSrc (value) {
                return Source(`bank_logo_${value}.png`);
            }
        },
        created () {
            // 获取页面参数
            this.fetchPageParams();
            // 获取列表数据
            this.fetchBankList();
        },
        methods: {

            // 获取页面参数
            fetchPageParams () {
                this.obj_params = Router.getParams(this) || {};
            },

            // 获取列表数据
            fetchBankList () {
                let options = {
                    category: this.obj_params.category || 'app',
                    dictCode: this.obj_params.dict_code || 'app_bank_list_code',
                    parentDictCode: this.obj_params.parent_dict_code || '1',
                    pageIndex: '1',
                    count: '999',
                };
                Api.fetchList(options).then((result) => {
                    console.log(result);
                    let { code, count, data, message } = result;
                    if (code !== 200) throw message;
                    this.arr_bank = data || [];
                }).catch((error) => {
                    Dialogs.toast({message: error})
                });
            },

            // 点击选择事件
            handleSelect (item) {
                Channel.post($$SELECT_BANK, item);
                Router.pop();
            },
        },
        components: {
            WowView,
        }
    }
</script>
<style>
    .wrap{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .border-right{
        border-right-width: 1px;
    }
    .border-bottom{
        border-bottom-width: 1px;
    }
    .bank-item{
        width: 250px;
        height: 250px;
        background-color: #fff;
        border-color: #ddd;
        justify-content: center;
        align-items: center;
    }
    .bank-image{
        width: 100px;
        height: 100px;
    }
    .bank-text{
        margin-top: 20px;
        height: 44px;
        line-height: 44;
        font-size: 32px;
        color: #333;
    }
</style>
