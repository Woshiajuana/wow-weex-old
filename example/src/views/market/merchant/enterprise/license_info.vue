<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight('market_merchant_enterprise_legal_person_info')"
        view_header_center_txt="企业商户">
        <step-cue :step_arr="arr_step" v-if="!is_type"></step-cue>
        <wow-input-cell
            v-for="(item, key) in obj_input"
            :input_value="item.value"
            :input_placeholder="item.placeholder"
            :input_label_txt="item.label"
            :input_type="item.type"
            :input_use="item.use_input"
            :input_disabled="is_disabled"
            :key="key"
            @input="handleInput(item, $event)">
            <div slot="input_other" class="input-other" v-if="item.other"></div>
            <select-box slot="input_left_part" :select_value="item.select.value" :select_text="item.select.text" v-if="item.select"></select-box>
            <div slot="input_unit" class="input-unit" v-if="item.unit">
                <text class="unit-text">{{item.unit}}</text>
            </div>
            <text slot="input_unit" class="input-amount-unit" v-if="item.amount_unit">{{item.amount_unit}}</text>
            <arrow-tip slot="input_unit" v-if="item.is_arrow && !is_disabled"></arrow-tip>
        </wow-input-cell>
        <image-upload :image_arr="arr_image"></image-upload>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowInputCell             from 'wow-weex/lib/wow-input-cell'
    import StepCue                  from 'components/step-cue'
    import SelectBox                from 'components/select-box'
    import ImageUpload              from 'components/image-upload'
    import Router                   from 'plugins/router.plugin'
    import ArrowTip                 from 'components/arrow-tip'
    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                arr_step: [
                    { text: '营业执照信息', is_current: true },
                    { text: '法人身份信息', is_current: false },
                    { text: '商户经营信息', is_current: false },
                    { text: '结算账户信息', is_current: false },
                ],
                obj_input: {
                    license_name: {
                        value: '',
                        label: '执照名称',
                        placeholder: '与营业执照保持一致',
                        use_input: true,
                    },
                    license_id: {
                        value: '',
                        label: '执照编号',
                        placeholder: '统一社会信用代码',
                        use_input: true,
                    },
                    start: {
                        value: '',
                        label: '有效期限',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '起',
                        other: true,
                        use_input: true,
                    },
                    end: {
                        value: '',
                        label: '',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '止',
                        use_input: true,
                        select: {
                            value: false,
                            text: '长期',
                        }
                    },
                    register_capital: {
                        value: '',
                        label: '注册资本',
                        placeholder: '企业注册资本',
                        use_input: true,
                        amount_unit: '(万元)',
                    },
                    register_area: {
                        value: '',
                        label: '注册地区',
                        placeholder: '选择省、市、县(区)',
                        is_arrow: true,
                        use_input: false,
                    },
                    register_address: {
                        value: '',
                        label: '注册详址',
                        placeholder: '与营业执照保持一致',
                        use_input: true,
                    },
                    operation: {
                        value: '',
                        label: '经营范围',
                        placeholder: '营业执照的经营范围(选填)',
                        use_input: true,
                    },
                },
                arr_image: [
                    { text: '营业执照' },
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
            SelectBox,
            ImageUpload,
            ArrowTip,
        }
    }
</script>
<style>
    .input-amount-unit{
        font-size: 32px;
        color: #029BDD;
        margin-left: 8px;
    }
    .input-unit{
        width: 40px;
        height: 40px;
        background-color: #029BDD;
        justify-content: center;
        margin-left: 12px;
        border-radius: 40px;
    }
    .unit-text{
        font-size: 24px;
        color: #fff;
        text-align: center;
    }
    .input-other{
        height: 20px;
        width: 230px;
        background-color: #fff;
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>
