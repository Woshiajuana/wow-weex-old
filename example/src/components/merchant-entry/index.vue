<template>
    <div class="merchant-wrap">
        <div class="merchant-inner" :style="{visibility: !merchant_schedule ? 'visible' : 'hidden'}"
             @click="handleLink(merchant_title === '小微商户' ? 'legal_person_info' : 'license_info', false, false)">
            <text class="title">{{merchant_title}}</text>
            <text class="sub-title">根据您的资料与业务需求</text>
            <text class="sub-title">选择商户认证类型</text>
            <div class="session session-one">
                <text class="session-title">可签产品</text>
                <div class="session-inner">
                    <div class="image-item"
                         v-for="(item, index) in merchant_product"
                         :key="index">
                        <image class="image" :src="handleSrc(item.text)"></image>
                        <text class="text">{{item.text}}</text>
                    </div>
                </div>
            </div>
            <div class="session">
                <text class="session-title">所需资料</text>
                <div class="session-inner">
                    <div class="text-item"
                         v-for="(item, index) in merchant_data"
                         :key="index">
                        <text class="text">{{item.text}}</text>
                    </div>
                </div>
            </div>
        </div>
        <div class="merchant-inner" :style="{visibility: merchant_schedule ? 'visible' : 'hidden'}">
            <image class="merchant-bg" :src="handleSrc(merchant_title)"></image>
            <base-info
                class="merchant-base-info"
                base_font_size="40"
                base_name_color="#fff"
                base_info_color="#fff"
                :base_center="false"
                :base_title="merchant_base_info.title"
                :base_phone="merchant_base_info.phone"
                :base_name="merchant_base_info.name">
            </base-info>
            <div class="merchant-seat"></div>
            <div class="merchant-contract-products" @click="handleLink('market_merchant_contract', true)">
                <image class="merchant-contract-bg" :src="src_bg"></image>
                <text class="merchant-product-title">签约产品</text>
                <image class="merchant-contract-new" :src="src_new"></image>
                <div class="product-wrap">
                    <div class="session-inner margin-top-0">
                        <div class="image-item"
                             v-for="(item, index) in merchant_product"
                             :key="index">
                            <image class="image" :src="handleSrc(item.text)"></image>
                            <text class="text">{{item.text}}</text>
                        </div>
                    </div>
                    <text class="contract-status">未签约</text>
                    <arrow-tip arrow_color="#fff"></arrow-tip>
                </div>
            </div>
            <div class="merchant-data">
                <div class="merchant-data-item"
                     v-if="!(merchant_title === '小微商户' && item.text === '营业执照信息')"
                     @click="handleLink(item.src)"
                     v-for="(item, index) in arr_data">
                    <text class="merchant-data-text">{{item.text}}</text>
                    <arrow-tip arrow_color="#fff"></arrow-tip>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Source                   from 'utils/source.util'
    import BaseInfo                 from 'components/base-info'
    import ArrowTip                 from 'components/arrow-tip'
    import Router                   from 'plugins/router.plugin'
    export default {
        data () {
            return {
                src_bg: Source('market_card_mid_bg.png'),
                src_new: Source('market_renew_cor.png'),
                arr_data: [
                    { text: '营业执照信息', src: 'license_info', },
                    { text: '法人身份信息', src: 'legal_person_info', },
                    { text: '商户经营信息', src: 'goods_info', },
                    { text: '结算账户信息', src: 'account_info', },
                ]
            }
        },
        props:{
            merchant_schedule: {default: false},
            merchant_title: {default: ''},
            merchant_sub_title: {default: ''},
            merchant_product: {default: []},
            merchant_data: {default: []},
            merchant_base_info: {default: ''}
        },
        methods: {
            handleSrc (value) {
                switch (value) {
                    case '快捷支付':
                        return Source('market_fastpay_w_icon.png');
                    case '移动收银':
                        return Source('market_mobilecash_w_icon.png');
                    case '小微商户':
                        return Source('market_xiwi_seal.png');
                    case '个体工商户':
                        return Source('market_geti_seal.png');
                    case '企业商户':
                        return Source('market_qiye_seal.png');
                }
            },
            // 页面跳转
            handleLink (src, type, is_type = true) {
                if(type) return Router.push(src);
                let str_page = '';
                switch (this.merchant_title) {
                    case '小微商户':
                        str_page = 'market_merchant_small_';
                        break;
                    case '个体工商户':
                        str_page = 'market_merchant_individual_';
                        break;
                    case '企业商户':
                        str_page = 'market_merchant_enterprise_';
                        break;
                }
                return Router.push(str_page + src, {is_type});
            }
        },
        components: {
            BaseInfo,
            ArrowTip,
        }
    }
</script>
<style>
    .merchant-wrap{

    }
    .merchant-inner{
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        align-items: center;
    }
    .title{
        font-size: 60px;
        color: #fff;
        margin-top: 140px;
        height: 84px;
        line-height: 84px;
        margin-bottom: 36px;
    }
    .sub-title{
        font-size: 32px;
        color: #fff;
        text-align: center;
        line-height: 48px;
        height: 48px;
    }
    .session{
        width: 640px;
        padding-left: 60px;
        margin-bottom: 60px;
    }
    .session-one{
        margin-top: 214px;
    }
    .session-title{
        font-size: 32px;
        color: #fff;
        height: 44px;
        line-height: 44px;
    }
    .session-inner{
        flex: 1;
        margin-top: 28px;
        flex-direction: row;
        align-items: center;
    }
    .image-item{
        align-items: center;
        margin-right: 38px;
    }
    .text-item{
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #fff;
        border-radius: 10px;
        margin-right: 16px;
        width: 156px;
        height: 48px;
    }
    .image{
        width: 80px;
        height: 80px;
        margin-bottom: 4px;
        border-radius: 80px;
    }
    .text{
        font-size: 24px;
        color: #fff;
    }
    .merchant-base-info{
        width: 650px;
        padding-left: 60px;
        padding-top: 80px;
    }
    .merchant-bg{
        width: 280px;
        height: 280px;
        position: absolute;
        top: 60px;
        right: 20px;
    }
    .merchant-seat{
        flex: 1;
        width: 650px;
    }
    .merchant-contract-products{
        width: 650px;
        height: 244px;
        padding-left: 60px;
        padding-right: 60px;
    }
    .merchant-contract-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 650px;
        height: 244px;
    }
    .merchant-product-title{
        font-size: 32px;
        color: #fff;
        height: 44px;
        line-height: 44px;
        margin-top: 24px;
    }
    .product-wrap{
        flex-direction: row;
        align-items: center;
        margin-top: 28px;
    }
    .margin-top-0{
        margin-top: 0;
    }
    .merchant-contract-new{
        position: absolute;
        top: 50px;
        right: 0;
        width: 80px;
        height: 80px;
    }
    .contract-status{
        font-size: 32px;
        color: #F5A623;
    }
    .merchant-data{
        width: 650px;
        margin-top: 20px;
        padding-right: 60px;
        padding-left: 60px;
        margin-bottom: 75px;
    }
    .merchant-data-item{
        height: 90px;
        flex-direction: row;
        border-bottom-width: 1px;
        border-color: #fff;
        align-items: center;
    }
    .merchant-data-text{
        flex: 1;
        font-size: 32px;
        color: #fff;
    }
</style>
