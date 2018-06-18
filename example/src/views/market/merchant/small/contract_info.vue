<template>
    <wow-view
        :view_header_right_txt="!is_type ? '提交' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight"
        view_background_color="#f2f2f2"
        view_header_center_txt="小微商户">
        <step-cue :step_arr="arr_step" v-if="!is_type"></step-cue>
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
            <treaty-cell
                @click="handleJump"
                @change="handleChange"
                :treaty_checked="is_agree">
            </treaty-cell>
        </div>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowButton                from 'wow-weex/lib/wow-button'
    import CellProduct              from 'components/cell-product'
    import StepCue                  from 'components/step-cue'
    import Router                   from 'plugins/router.plugin'
    import TreatyCell               from 'components/treaty-cell'
    import Source                   from 'utils/source.util'
    import SelectBox                from 'components/select-box'
    import BaseInfo                 from 'components/base-info'
    import Api                      from 'api/merchant.api'
    import MerchantConfig           from 'config/merchant.config'
    import Dialogs                  from 'plugins/dialogs.plugin'
    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                is_agree: true,
                src_return: Source('view_return_icon_029BDD.png'),
                arr_step: [
                    { text: '法人身份信息', is_current: true},
                    { text: '商户经营信息', is_current: true},
                    { text: '结算账户信息', is_current: true},
                    { text: '产品签约', is_current: false },
                ],
                obj_data: {
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
            }
        },
        methods: {
            // 勾选 or 不勾选
            handleChange () {
                this.is_agree = !this.is_agree;
            },
            // 跳转
            handleJump () {
                Router.push()
            },
        },
        components: {
            WowView,
            WowButton,
            CellProduct,
            SelectBox,
            BaseInfo,
            StepCue,
            TreatyCell,
        }
    }
</script>
<style>
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
