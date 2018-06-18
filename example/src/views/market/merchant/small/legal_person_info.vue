<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight"
        view_header_center_txt="小微商户">
        <step-cue :step_arr="arr_step" v-if="!is_type"></step-cue>
        <wow-input-cell
            v-for="(item, key) in obj_input"
            :input_value="item.value"
            :input_placeholder="item.placeholder"
            :input_label_txt="item.label"
            :input_type="item.type"
            :input_disabled="is_disabled"
            :input_label_src_visible="item.is_error"
            :key="key"
            @input="handleInput(item, key, $event)">
            <div slot="input_other" class="input-other" v-if="item.other"></div>
            <select-box
                @click="handleSelect(item)"
                slot="input_left_part"
                :select_value="item.value === item.select"
                :select_text="item.select"
                v-if="item.select">
            </select-box>
            <div slot="input_unit" class="input-unit" v-if="item.unit">
                <text class="unit-text">{{item.unit}}</text>
            </div>
        </wow-input-cell>
        <image-upload
            :image_arr="obj_image"
            :image_arr_id="obj_image_id"
            :image_disabled="is_disabled">
        </image-upload>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowInputCell             from 'wow-weex/lib/wow-input-cell'
    import StepCue                  from 'components/step-cue'
    import SelectBox                from 'components/select-box'
    import ImageUpload              from 'components/image-upload'
    import Router                   from 'plugins/router.plugin'
    import Dialogs                  from 'plugins/dialogs.plugin'
    import Store                    from 'plugins/store.plugin'
    import Api                      from 'api/merchant.api'
    import MerchantConfig           from 'config/merchant.config'
    import DataUtil                 from 'utils/data.util'
    import RegularUtil              from 'utils/regular.util'
    import FormatUtil               from 'utils/format.util'
    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                arr_step: [
                    { text: '法人身份', is_current: true },
                    { text: '商户经营', is_current: false },
                    { text: '结算账户', is_current: false },
                    { text: '产品签约', is_current: false },
                ],
                merchantCode: '',               //业务参数
                obj_input: {
                    legalPersonName: {
                        value: '',
                        label: '法人代表人',
                        placeholder: '法人姓名',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入法人姓名',
                            },
                        ],
                    },
                    legalCertNo: {
                        value: '',
                        label: '法人身份证',
                        placeholder: '法人18位身份证号码',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入法人身份证',
                            },
                            {
                                rule: RegularUtil.isIDCard,
                                prompt: '法人身份证输入错误',
                            },
                        ],
                    },
                    legalCertPeriodStart: {
                        value: '',
                        label: '有效期限',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '起',
                        other: true,
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入有效期限',
                            },
                        ],
                    },
                    legalCertPeriodEnd: {
                        value: '',
                        type: 'date',
                        placeholder: 'YYYY-MM-DD',
                        unit: '止',
                        select: '长期',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入有效期限',
                            },
                            {
                                gt: 'legalCertPeriodStart',
                                prompt: '有效期限输入错误',
                                type: 'date',
                            }
                        ],
                    },
                    legalMobile: {
                        value: '',
                        label: '法人手机',
                        placeholder: '法人手机号码',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入法人手机号码',
                            },
                            {
                                rule: RegularUtil.isPhone,
                                prompt: '法人手机号码输入错误',
                            },
                        ],
                    },
                    legalEmail: {
                        value: '',
                        label: '法人邮箱',
                        placeholder: '法人邮箱',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入法人邮箱',
                            },
                            {
                                rule: RegularUtil.isEmail,
                                prompt: '法人邮箱输入错误',
                            },
                        ],
                    },
                },
                obj_image: {
                    legalCertFrontPicUrl: {
                        text: '身份证正面照',
                        value: '',
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '身份证正面照不能为空',
                            },
                        ],
                    },
                    legalCertBackPicUrl: {
                        text: '身份证背面照',
                        value: '' ,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '身份证背面照不能为空',
                            },
                        ],
                    },
                    legalCertPersonPicUrl: {
                        text: '手持身份证+银行卡照',
                        value: '',
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '手持身份证+银行卡照不能为空',
                            },
                        ],
                    },
                },
                obj_image_id: {
                    legalCertFrontPic: {
                        value: '',
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '身份证正面照不能为空',
                            },
                        ],
                    },
                    legalCertBackPic: {
                        value: '' ,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '身份证背面照不能为空',
                            },
                        ],
                    },
                    legalCertPersonPic: {
                        value: '',
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '手持身份证+银行卡照不能为空',
                            },
                        ],
                    },
                }
            }
        },
        created () {
            this.fetchPageParams();
            this.fetchFormInfo();
        },
        methods: {

            // 获取页面传递参数
            fetchPageParams () {
                let params = Router.getParams(this);
                let { merchantCode, is_type } = params;
                this.is_type = !!is_type;
                this.is_disabled = this.is_type;
                this.merchantCode = merchantCode;
            },

            // 选择按钮
            handleSelect (item) {
                if (this.is_disabled) return null;
                item.value = item.value === item.select ? '' : item.select;
            },

            // 赋值
            handleInput (item, key, event) {
                item.is_error = false;
                if ((key === 'legalCertPeriodStart' || key === 'legalCertPeriodEnd') && (event.value !== item.select)){
                    this.obj_input.legalCertPeriodStart.is_error = false;
                    return item.value = event.value ? FormatUtil.date('yyyy-MM-dd', new Date(event.value)) : '';
                }
                item.value = event.value;
            },

            // 下一步点击事件
            handleRight () {
                if (this.is_disabled) return this.is_disabled = false;
                if (DataUtil.checkData(this.obj_input)) return console.log(this.obj_input);
                if (DataUtil.checkData(this.obj_image)) return;
                if (DataUtil.checkData(this.obj_image_id)) return;
                let options = DataUtil.filterData({
                    ...this.obj_input,
                    ...this.obj_image_id,
                });
                this.subFormInfo(options);
            },

            // 提交信息
            subFormInfo (opt) {
                let options = {
                    merchantCode: this.merchantCode,                                     // 商户信息修改时，填写商户代码
                    merchantType: MerchantConfig.ARR_MERCHANT_TYPE[0],                   // 商户类型
                    ...opt,
                };
                Api.submitLegalInfo(options).then((data) => {
                    let { result, success, errMsg } = data;
                    if (!success) throw errMsg;
                    this.jumpPage(result);
                }).catch((error) => {
                    Dialogs.toast({message: error})
                })
            },

            // 获取存储的信息
            fetchFormInfo () {
                Api.queryMerchantInfo({merchantCode: this.merchantCode}).then((data) => {
                    let { result, success, errMsg } = data;
                    if (!success) throw errMsg;
                    if (!result) return null;
                    DataUtil.assignmentData(result, this.obj_input);
                    DataUtil.assignmentData(result, this.obj_image);
                    DataUtil.assignmentData(result, this.obj_image_id);
                    this.merchantCode = result.merchantCode;
                }).catch((error) => {
                    Dialogs.toast({message: error})
                });
            },

            // 跳转页面
            jumpPage (data, page = 'market_merchant_small_goods_info') {
                return this.is_type ? Router.pop() : Router.push(page, data);
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
        margin-right: 32px;
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
