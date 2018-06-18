<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight('market_merchant_individual_account_info')"
        view_header_center_txt="个体工商户">
        <step-cue :step_arr="arr_step" v-if="!is_type"></step-cue>
        <wow-input-cell
            v-for="(item, key) in obj_input"
            :input_value="item.value"
            :input_placeholder="item.placeholder"
            :input_label_txt="item.label"
            :input_type="item.type"
            :input_disabled="is_disabled"
            :key="key"
            :input_use="item.use_input"
            @input="handleInput(item, $event)">
            <arrow-tip slot="input_unit" v-if="item.is_arrow && !is_disabled"></arrow-tip>
            <image class="input-image-unit" slot="input_unit" :src="src_address" v-if="item.use_address && !is_disabled"></image>
            <div slot="input_unit" class="input-unit" v-if="item.unit && !is_disabled">
                <text class="unit-text">{{item.unit}}</text>
            </div>
        </wow-input-cell>
        <image-upload :image_arr="arr_image"></image-upload>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowInputCell             from 'wow-weex/lib/wow-input-cell'
    import StepCue                  from 'components/step-cue'
    import Router                   from 'plugins/router.plugin'
    import ArrowTip                 from 'components/arrow-tip'
    import ImageUpload              from 'components/image-upload'
    import Source                   from 'utils/source.util'
    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                src_address: Source('market_location_icon.png'),
                arr_step: [
                    { text: '营业执照信息', is_current: true},
                    { text: '法人身份信息', is_current: true},
                    { text: '商户经营信息', is_current: true},
                    { text: '结算账户信息', is_current: false},
                ],
                obj_input: {
                    short_name: {
                        value: '',
                        label: '商户简称',
                        placeholder: '如：乾隆便民超市(朝阳店)',
                        use_input: true,
                    },
                    mcc: {
                        value: '',
                        label: '经营类目',
                        placeholder: '选择经营类目(MCC)',
                        is_arrow: true,
                        use_input: false,
                    },
                    city: {
                        value: '',
                        label: '经营城市',
                        placeholder: '选择省、市、县(区)',
                        is_arrow: true,
                        use_input: false,
                    },
                    address: {
                        value: '',
                        label: '详细地址',
                        placeholder: '街道、门牌号等',
                        use_input: true,
                        use_address: true,
                    },
                    tel: {
                        value: '',
                        label: '客服电话',
                        placeholder: '如：02156578899',
                        use_input: true,
                    },
                    contact_name: {
                        value: '',
                        label: '联系人姓名',
                        placeholder: '商户常用联系人',
                        use_input: true,
                        unit: '同法人',
                    },
                    contact_phone: {
                        value: '',
                        label: '联系人手机',
                        placeholder: '联系人手机号',
                        use_input: true,
                        unit: '同法人',
                    },
                },
                arr_image: [
                    { text: '门店照' },
                    { text: '收银台照' },
                    { text: '店内照' },
                ],
            }
        },
        created () {
            this.is_type = !!Router.getParams(this).is_type;
            this.is_disabled = this.is_type;
        },
        methods: {
            handleInput (item, event) {
                item.value = event.value;
            },

            // 下一步点击事件
            handleRight (page) {
                if (!this.is_type) return Router.push(page);
                this.is_disabled = !this.is_disabled;
//                return Router.pop();
            }
        },
        components: {
            WowView,
            WowInputCell,
            StepCue,
            ArrowTip,
            ImageUpload,
        }
    }
</script>
<style>
    .input-image-unit{
        width: 36px;
        height: 44px;
        margin-left: 16px;
    }
    .input-unit{
        width: 102px;
        height: 60px;
        background-color: #029BDD;
        justify-content: center;
        margin-left: 12px;
        border-radius: 10px;
    }
    .unit-text{
        font-size: 24px;
        color: #fff;
        text-align: center;
    }
</style>
