<template>
    <wow-view
        :view_header_right_txt="!is_type ? '提交' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight"
        view_header_center_txt="小微商户">
        <step-cue :step_arr="arr_step" v-if="!is_type"></step-cue>
        <wow-input-cell
            @click="handleSelect(item.label)"
            v-for="(item, key) in obj_input"
            :input_value="item.value"
            :input_placeholder="item.placeholder"
            :input_label_txt="item.label"
            :input_type="item.type"
            :input_disabled="is_disabled"
            :input_label_src_visible="item.is_error"
            :key="key"
            :input_use="item.use_input !== false"
            @input="handleInput(item, $event)">
            <arrow-tip slot="input_unit" v-if="item.use_arrow && !is_disabled"></arrow-tip>
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
    import Router                   from 'plugins/router.plugin'
    import Picker                   from 'plugins/picker.plugin'
    import ArrowTip                 from 'components/arrow-tip'
    import ImageUpload              from 'components/image-upload'
    import DataUtil                 from 'utils/data.util'
    import MerchantConfig           from 'config/merchant.config'
    import Api                      from 'api/merchant.api'
    import Dialogs                  from 'plugins/dialogs.plugin'
    import Channel                  from 'plugins/channel.plugin'

    const $$SELECT_BANK = '$$SELECT_BANK';
    const $$SELECT_SUBBRANCH_BANK = '$$SELECT_SUBBRANCH_BANK';

    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                merchantCode: '',               //业务参数
                arr_step: [
                    { text: '法人身份信息', is_current: true},
                    { text: '商户经营信息', is_current: true},
                    { text: '结算账户信息', is_current: true},
                    { text: '产品签约', is_current: false },
                ],
                obj_hidden: {
                    // 银行代码
                    bankCode: {
                        value: '',
                    },
                    // 银行名称
                    bankName: {
                        value: '',
                    },
                    // 开户省份名称
                    bankProvinceCode: {
                        value: '',
                    },
                    // 开户省份代码
                    bankNumberCode: {
                        value: '',
                    },
                    // 开户城市名称
                    bankCityName: {
                        value: '',
                    },
                    // 开户城市代码
                    bankCityCode: {
                        value: '',
                    },
                    // 开户地区名称
                    bankDistrictName: {
                        value: '',
                    },
                    // 开户地区代码
                    bankDistrictCode: {
                        value: '',
                    },
                    // 开户支行名称
                    bankBranchNumberName: {
                        value: '',
                    },
                    // 开户支行代码
                    bankBranchNumberCode: {
                        value: '',
                    },
                },
                obj_input: {
                    bankCardName: {
                        value: '张启明',
                        label: '账户名称',
                        placeholder: '',
                        use_input: false,
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入账户名称',
                            },
                        ],
                    },
                    bankCardNo: {
                        value: '',
                        label: '银行账号',
                        placeholder: 'Ⅰ类户借记卡号(柜面开立)',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入银行账号',
                            },
                        ],
                    },
                    bankNumberName: {
                        value: '',
                        label: '开户银行',
                        placeholder: '选择/查看支持银行',
                        is_error: false,
                        use_arrow: true,
                        use_input: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请选择开户银行',
                            },
                        ],
                    },
                    bankProvinceCode: {
                        value: '',
                        label: '开户地区',
                        placeholder: '请选择省/市',
                        is_error: false,
                        use_arrow: true,
                        use_input: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请选择开户地区',
                            },
                        ],
                    },
                    bankBranchNumberName: {
                        value: '',
                        label: '开户支行',
                        placeholder: '选择分支行',
                        is_error: false,
                        use_arrow: true,
                        use_input: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请选择开户支行',
                            },
                        ],
                    },
                    bankCardMobile: {
                        value: '',
                        label: '预留手机号',
                        placeholder: '开户预留手机号',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入预留手机号',
                            },
                        ],
                    },
                },
                obj_image: {
                    legalCertFrontPicUrl: {
                        text: '银行卡正面照',
                        value: '',
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '银行卡正面照不能为空',
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
                                prompt: '银行卡正面照不能为空',
                            },
                        ],
                    },
                },
            }
        },
        created () {
            this.fetchPageParams();
            this.monitorEvent();
            this.fetchFormInfo();
        },
        methods: {

            // 销毁事件
            disMonitorEvent () {
                Channel.remove($$SELECT_BANK);
                Channel.remove($$SELECT_SUBBRANCH_BANK);
            },

            // 监听事件
            monitorEvent () {
                Channel.add($$SELECT_BANK, this.channelSelectBankHandle.bind(this));
                Channel.add($$SELECT_SUBBRANCH_BANK, this.channelSelectSubbranchBankHandle.bind(this));
            },

            // 选择银行
            channelSelectBankHandle (item) {
                let { dictValue, dictKey } = item;
                this.obj_input.bankNumberName.value = dictValue + '银行';
                this.obj_input.bankNumberName.is_error = false;
            },

            // 选择支行
            channelSelectSubbranchBankHandle (item) {
                let { bankName, directBankCode } = item;
                this.obj_input.bankBranchNumberName.value = bankName;
                this.obj_input.bankBranchNumberName.is_error = false;
            },

            // 获取页面传递参数
            fetchPageParams () {
                let params = Router.getParams(this);
                let { merchantCode, is_type } = params;
                this.is_type = !!is_type;
                this.is_disabled = this.is_type;
                this.merchantCode = merchantCode;
            },

            // 赋值
            handleInput (item, event) {
                item.value = event.value;
                item.is_error = false;
            },

            // 下一步点击事件
            handleRight () {
                if (this.is_disabled) return this.is_disabled = false;
                if (DataUtil.checkData(this.obj_input)) return;
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
                Api.submitGoodsInfo(options).then((data) => {
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
                    DataUtil.assignmentData(result, this.obj_hidden);
                    this.merchantCode = result.merchantCode;
                }).catch((error) => {
                    Dialogs.toast({message: error})
                });
            },

            // 选择
            handleSelect (text) {
                switch (text) {
                    case '开户银行':
                        Router.push('market_merchant_bank');
                        break;
                    case '开户支行':
                        Router.push('market_merchant_branch');
                        break;
                    case '开户地区':
                        this.popCityList();
                        break;
                }
            },

            // 弹出选择城市级联
            popCityList () {
                Api.fetchCityList().then(city => {
                    return Picker.picks(city);
                }).then(result => {
                    this.obj_input.fullAddress.value = result.replace(/\|/g,' ');
                }).catch(error => {
                    Dialogs.toast({message: error});
                })
            },

            // 跳转页面
            jumpPage (data, page = 'market_merchant_small_contract_info') {
                return this.is_type ? Router.pop() : Router.push(page, data);
            },

        },
        // 页面销毁
        destroyed () {
            // 销毁监听事件
            this.disMonitorEvent();
        },
        components: {
            WowView,
            WowInputCell,
            StepCue,
            ArrowTip,
            ImageUpload,
        },
    }
</script>
<style>

</style>
