<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
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
            <image class="input-image-unit input-unit" slot="input_unit" :src="src_address" v-if="item.use_address && !is_disabled"></image>
        </wow-input-cell>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowInputCell             from 'wow-weex/lib/wow-input-cell'
    import StepCue                  from 'components/step-cue'
    import ArrowTip                 from 'components/arrow-tip'
    import Router                   from 'plugins/router.plugin'
    import Dialogs                  from 'plugins/dialogs.plugin'
    import Channel                  from 'plugins/channel.plugin'
    import Picker                   from 'plugins/picker.plugin'
    import Api                      from 'api/merchant.api'
    import MerchantConfig           from 'config/merchant.config'
    import Source                   from 'utils/source.util'
    import DataUtil                 from 'utils/data.util'
    import RegularUtil              from 'utils/regular.util'
    import FormatUtil               from 'utils/format.util'

    const $$SELECT_CATEGORY = '$$SELECT_CATEGORY';

    export default {
        data () {
            return {
                is_type: false,
                is_disabled: false,
                src_address: Source('market_location_icon.png'),
                arr_step: [
                    { text: '法人身份信息', is_current: true},
                    { text: '商户经营信息', is_current: true},
                    { text: '结算账户信息', is_current: false},
                    { text: '产品签约', is_current: false },
                ],
                merchantCode: '',               //业务参数
                obj_input: {
                    orgShortName: {
                        value: '哈哈简称',
                        label: '商户简称',
                        placeholder: '如：乾隆便民超市(朝阳店)',
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入商户简称',
                            },
                        ],
                    },
                    orgMccName: {
                        value: '购物',
                        label: '商户类别',
                        placeholder: '选择商户类别',
                        use_arrow: true,
                        use_input: false,
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请选择商户类别',
                            },
                        ],
                    },
                    fullAddress: {
                        value: '上海',
                        label: '经营城市',
                        placeholder: '选择省、市、县(区)',
                        use_arrow: true,
                        use_input: false,
                        is_error: false,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请选择经营城市',
                            },
                        ],
                    },
                    busAddress: {
                        value: '上海浦东新区',
                        label: '详细地址',
                        placeholder: '街道、门牌号等',
                        is_error: false,
                        use_address: true,
                        use_check: [
                            {
                                nonempty: true,
                                prompt: '请输入详细地址',
                            },
                        ],
                    },
                },
                obj_hidden: {
                    orgMccCode: {
                        value: ''
                    },
                    busProvinceCode: {
                        value: ''
                    },
                    busProvinceName: {
                        value: ''
                    },
                    busCityCode: {
                        value: ''
                    },
                    busCityName: {
                        value: ''
                    },
                    busDistrictCode: {
                        value: ''
                    },
                    busDistrictName: {
                        value: ''
                    },
                }
            }
        },
        created () {
            this.fetchPageParams();
            this.fetchFormInfo();
            this.monitorEvent();
        },
        methods: {

            // 销毁事件
            disMonitorEvent () {
                Channel.remove($$SELECT_CATEGORY);
            },

            // 监听事件
            monitorEvent () {
                Channel.add($$SELECT_CATEGORY, this.channelSelectCategoryHandle.bind(this))
            },

            // 选择商户类别
            channelSelectCategoryHandle (item) {
                let { name, code } = item;
                this.obj_input.orgMccName.value = name;
                this.obj_hidden.orgMccCode.value = code;
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
                let options = DataUtil.filterData({
                    ...this.obj_input,
                    ...this.obj_hidden,
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
                    case '商户类别':
                        Router.push('market_merchant_category');
                        break;
                    case '经营城市':
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
            jumpPage (data, page = 'market_merchant_small_account_info') {
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
        },
    }
</script>
<style>
    .input-image-unit{
        width: 36px;
        height: 44px;
    }
    .input-unit{
        margin-right: 32px;
    }
</style>
