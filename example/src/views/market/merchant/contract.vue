<template>
    <wow-view
        :view_header_left_src="src_return"
        view_header_right_txt="立即签约"
        view_header_right_color="#029BDD"
        view_header_background_color="#fff"
        view_background_color="#f2f2f2"
        view_header_center_color="#000"
        view_header_center_txt="签约产品">
        <div class="header-wrap">
            <div class="header-label">
                <text class="header-label-text">企</text>
            </div>
            <base-info
                :base_title="obj_base.title"
                :base_phone="obj_base.phone"
                :base_name="obj_base.name">
            </base-info>
        </div>
        <div class="session"
             v-for="(item, key) in obj_data"
             :key="key">
            <div class="session-title">
                <text class="session-title-text">{{item.title}}</text>
                <div class="session-all-select">
                    <text class="session-all-select-text">全选</text>
                    <select-box select_mar_left="0"></select-box>
                </div>
            </div>
            <cell-product
                v-for="(data, i) in item.data"
                :cell_title="data.title"
                :cell_prompt="data.prompt"
                :cell_sub_title="data.sub_title"
                :cell_src="data.src"
                :cell_src_size="data.src_size"
                :cell_is_new="data.is_new"
                :key="i">
            </cell-product>
        </div>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowButton                from 'wow-weex/lib/wow-button'
    import CellProduct              from 'components/cell-product'
    import Source                   from 'utils/source.util'
    import SelectBox                from 'components/select-box'
    import BaseInfo                 from 'components/base-info'
    export default {
        data () {
            return {
                src_return: Source('view_return_icon_029BDD.png'),
                obj_data: {
                    mobile_receive: {
                        title: '移动收银',
                        data: [
                            {
                                title: '微信支付',
                                prompt: '0.42%+2元',
                                sub_title: '隔天10:00~19:00到账',
                                src: Source('market_wechatpay_icon.png'),
                                src_size: [72, 72],
                            },
                            {
                                title: '支付宝',
                                prompt: '0.42%+2元',
                                sub_title: '隔天10:00~19:00到账',
                                src: Source('market_alipay_icon.png'),
                                src_size: [72, 72],
                            },
                        ]
                    },
                    quick_payment: {
                        title: '快捷支付',
                        data: [
                            {
                                title: '商旅快捷A',
                                prompt: '0.42%+2元',
                                sub_title: '快速到账',
                                src: Source('market_fastpay_s_icon.png'),
                                src_size: [96, 60],
                                is_new: true,
                            },
                            {
                                title: '商旅快捷A',
                                prompt: '0.42%+2元',
                                sub_title: '快速到账',
                                src: Source('market_fastpay_s_icon.png'),
                                src_size: [96, 60],
                                is_new: true,
                            },
                            {
                                title: '商旅快捷A',
                                prompt: '0.42%+2元',
                                sub_title: '快速到账',
                                src: Source('market_fastpay_s_icon.png'),
                                src_size: [96, 60],
                            },
                            {
                                title: '商旅快捷A',
                                prompt: '0.42%+2元',
                                sub_title: '快速到账',
                                src: Source('market_fastpay_s_icon.png'),
                                src_size: [96, 60],
                            },
                        ]
                    },
                },
                obj_base: {
                    title: '上海乐享贸易有限公司',
                    name: '张*斌',
                    phone: '138****6657',
                }
            }
        },
        components: {
            WowView,
            WowButton,
            CellProduct,
            SelectBox,
            BaseInfo,
        }
    }
</script>
<style>
    .header-wrap{
        align-items: center;
        background-color: #fff;
        height: 320px;
    }
    .header-label{
        width: 100px;
        height: 100px;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        background-color: #029BDD;
        margin-top: 34px;
    }
    .header-label-text{
        font-size: 64px;
        color: #fff;
    }
    .session{
        margin-top: 20px;
        background-color: #fff;
    }
    .session-title{
        flex-direction: row;
        padding-right: 40px;
        padding-left: 40px;
        height: 120px;
        border-color: #F2F2F2;
        border-bottom-width: 1px;
        align-items: center;
    }
    .session-title-text{
        font-size: 36px;
        color: #333;
        flex: 1;
    }
    .session-all-select{
        flex-direction: row;
        align-items: center;
    }
    .session-all-select-text{
        font-size: 32px;
        color: #333;
        margin-right: 16px;
    }
</style>
