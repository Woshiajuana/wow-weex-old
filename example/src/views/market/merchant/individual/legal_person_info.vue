<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight('market_merchant_individual_goods_info')"
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
            @input="handleInput(item, $event)">
            <div slot="input_other" class="input-other" v-if="item.other"></div>
            <select-box slot="input_left_part" :select_value="item.select.value" :select_text="item.select.text" v-if="item.select"></select-box>
            <div slot="input_unit" class="input-unit" v-if="item.unit">
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
    import SelectBox                from 'components/select-box'
    import ImageUpload              from 'components/image-upload'
    import Router                   from 'plugins/router.plugin'
    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                arr_step: [
                    { text: '营业执照信息', is_current: true },
                    { text: '法人身份信息', is_current: true },
                    { text: '商户经营信息', is_current: false },
                    { text: '结算账户信息', is_current: false },
                ],
                obj_input: {
                    name: {
                        value: '',
                        label: '法人代表人',
                        placeholder: '法人姓名',
                    },
                    id: {
                        value: '',
                        label: '法人身份证',
                        placeholder: '法人18位身份证号码',
                    },
                    start: {
                        value: '',
                        label: '有效期限',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '起',
                        other: true,
                    },
                    end: {
                        value: '',
                        label: '',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '止',
                        select: {
                            value: false,
                            text: '长期',
                        }
                    },
                    phone: {
                        value: '',
                        label: '法人手机',
                        placeholder: '法人手机号码',
                    },
                    email: {
                        value: '',
                        label: '法人邮箱',
                        placeholder: '法人联系邮箱',
                    },
                },
                arr_image: [
                    { text: '身份证正面照' },
                    { text: '身份证背面照' },
                    { text: '手持身份证+银行卡照' },
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
        }
    }
</script>
<style>
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
