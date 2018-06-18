<template>
    <wow-view
        :view_header_left_src="src_return"
        view_background_color="#fff"
        view_header_background_color="#fff"
        view_header_center_color="#000"
        view_header_center_txt="商户认证">
        <div class="wrap">
            <slider
                class="carousel"
                append="tree"
                @change="handleChange"
                scrollable="true">
                <div class="carousel-item"
                    v-for="(item, index) in arr_carousel"
                    :key="index">
                    <merchant-entry
                        :merchant_schedule="item.is_sub"
                        :merchant_title="item.str_title"
                        :merchant_product="item.arr_product"
                        :merchant_data="item.arr_data"
                        :merchant_base_info="item.obj_base"
                        class="carousel-item-inner"
                        :class="['bgc-' + index]">
                    </merchant-entry>
                </div>
            </slider>
            <div class="trigger">
                <div class="trigger-item"
                     :class="[index === num_current_index && 'bgc-' + index ]"
                     v-for="(item, index) in arr_carousel"
                     :key="index">
                </div>
            </div>
        </div>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import MerchantEntry            from 'components/merchant-entry'
    import Source                   from 'utils/source.util'
    import Router                   from 'plugins/router.plugin'
    export default {
        data () {
            return {
                num_current_index: 0,
                src_return: Source('view_return_icon_029BDD.png'),
                arr_carousel: [
                    {
                        str_title: '小微商户',
                        arr_product: [
                            { text: '快捷支付' }
                        ],
                        arr_data: [
                            { text: '商户身份证' },
                            { text: '结算银行卡' },
                        ],
                        obj_base: {
                            title: '上海乐享贸易有限公司',
                            name: '张*斌',
                            phone: '138****6657',
                        },
                    },
                    {
                        str_title: '个体工商户',
                        arr_product: [
                            { text: '快捷支付' },
                            { text: '移动收银' },
                        ],
                        arr_data: [
                            { text: '法人身份证' },
                            { text: '营业执照' },
                            { text: '结算银行卡' },
                        ],
                    },
                    {
                        str_title: '企业商户',
                        arr_product: [
                            { text: '快捷支付' },
                            { text: '移动收银' },
                        ],
                        arr_data: [
                            { text: '法人身份证' },
                            { text: '营业执照' },
                            { text: '开户许可证' },
                        ],
                    },
                    {
                        str_title: '小微商户',
                        arr_product: [
                            { text: '快捷支付' }
                        ],
                        arr_data: [
                            { text: '商户身份证' },
                            { text: '结算银行卡' },
                        ],
                        obj_base: {
                            title: '上海乐享贸易有限公司',
                            name: '张*斌',
                            phone: '138****6657',
                        },
                    },
                    {
                        is_sub: true,
                        str_title: '个体工商户',
                        arr_product: [
                            { text: '快捷支付' },
                            { text: '移动收银' },
                        ],
                        arr_data: [
                            { text: '法人身份证' },
                            { text: '营业执照' },
                            { text: '结算银行卡' },
                        ],
                        str_page: 'market_merchant_individual_license_info',
                        obj_base: {
                            title: '上海乐享贸易有限公司',
                            name: '张*斌',
                            phone: '138****6657',
                        },
                    },
                    {
                        is_sub: true,
                        str_title: '企业商户',
                        arr_product: [
                            { text: '快捷支付' },
                            { text: '移动收银' },
                        ],
                        arr_data: [
                            { text: '法人身份证' },
                            { text: '营业执照' },
                            { text: '开户许可证' },
                        ],
                        str_page: 'market_merchant_enterprise_license_info',
                        obj_base: {
                            title: '上海乐享贸易有限公司',
                            name: '张*斌',
                            phone: '138****6657',
                        },
                    },
                ]
            }
        },
        methods: {
            // 跳转页面
            handleJump (str_page) {
                Router.push(str_page);
            },
            // 轮播图切换事件
            handleChange (event) {
                this.num_current_index = event.index || 0;
            },
            handleClick (value) {
                console.log(value);
            }
        },
        components: {
            WowView,
            MerchantEntry,
        }
    }
</script>
<style>
    .wrap{
        align-items: center;
    }
    .carousel{
        margin-top: 16px;
        height: 1040px;
        width: 750px;
    }
    .carousel-item{
        padding-left: 55px;
    }
    .carousel-item-inner{
        width: 640px;
        height: 1040px;
        border-radius: 20px;
        align-items: center;
    }
    .bgc-0{
        background-color: #005F88;
        border-color: #005F88;
    }
    .bgc-1{
        background-color: #2A6368;
        border-color: #2A6368;
    }
    .bgc-2{
        background-color: #00364E;
        border-color: #00364E;
    }
    .bgc-3{
        background-color: #005F88;
        border-color: #005F88;
    }
    .bgc-4{
        background-color: #2A6368;
        border-color: #2A6368;
    }
    .bgc-5{
        background-color: #00364E;
        border-color: #00364E;
    }
    .trigger{
        margin-top: 40px;
        align-items: center;
        flex-direction: row;
    }
    .trigger-item{
        width: 32px;
        height: 32px;
        border-radius: 32px;
        margin-right: 12px;
        margin-left: 12px;
        background: #FFFFFF;
        border-width: 1px;
        border-color: #999;
    }
</style>
