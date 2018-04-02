<template>
    <div class="payment-wrap">
        <div class="payment-bg"></div>
        <div class="payment-inner">
            <text class="payment-label">收款人帐号</text>
            <wow-input
                :input_right_src="tel_src"
                input_height="112"
                input_placeholder="输入收款人帐号"
                input_max_length="11"
                input_font_size="80">
            </wow-input>
            <div class="line"></div>
            <history-part
                class="history-part"
                :history_arr="history_arr">
            </history-part>
        </div>
        <wow-button button_margin_top="82" @click="handleSure"></wow-button>
    </div>
</template>
<script>
    import WowInput     from 'wow-weex/lib/wow-input'
    import WowButton    from 'wow-weex/lib/wow-button'
    import HistoryPart  from 'ds/history-part'
    import source       from 'utils/source'
    import router       from 'modules/router'
    export default{
        data () {
            return {
                tel_src: source('app-address-list-icon.png'),
                history_arr: ['15200002222', '15200002222', '15200002222', '15200002222', '15200002222', '15200002222']
            }
        },
        methods: {
            handleSure(callback) {
                callback();
                router.push('ds_main_payment_info')
            }
        },
        components: {
            WowInput,
            WowButton,
            HistoryPart,
        }
    }
</script>
<style>
    .payment-wrap{
        align-items: center;
        background-color: #f8f8f8;
    }
    .payment-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 750px;
        background-image: linear-gradient(to left, #EE6833, #EE4432);
        height: 88px;
    }
    .payment-inner{
        width: 686px;
        height: 620px;
        border-radius: 8px;
        background-color: #fff;
        border-width: 1px;
        border-color: #ddd;
    }
    .payment-label{
        color: #000;
        font-size: 28px;
        padding-left: 32px;
        padding-top: 40px;
        padding-bottom: 24px;
        line-height: 40px;
    }
    .line{
        height: 1px;
        background-color: #ddd;
        margin-right: 32px;
        margin-left: 32px;
        margin-top: 40px;
    }
    .history-part{
        padding-left: 32px;
        padding-right: 32px;
        margin-top: 40px;
    }
</style>
