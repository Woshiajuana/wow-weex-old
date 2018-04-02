<template>
    <div class="gathering-wrap">
        <div class="gathering-bg"></div>
        <div class="gathering-inner">
            <div class="gathering-card">
                <text class="gathering-card-title">收款帐号</text>
                <!--<wow-cell-->
                    <!--cell_right_color="#0076FF"-->
                    <!--cell_right_txt="去绑定"-->
                    <!--cell_left_color="#B2B2B2"-->
                    <!--cell_border_width="0"-->
                    <!--cell_left_txt="未绑定收款账号">-->
                <!--</wow-cell>-->
                <wow-cell
                    :cell_use_slot="true"
                    cell_border_width="0"
                    cell_left_txt="622280****6849">
                    <div class="bank-wrap">
                        <image class="bank-logo" :src="bank_src"></image>
                        <text class="bank-name">招商银行</text>
                    </div>
                </wow-cell>
            </div>
            <div class="gathering-amount">
                <text class="input-label">收款金额</text>
                <made-input></made-input>
            </div>
        </div>
        <text class="gathering-prompt">到账时间：即时到账</text>
        <wow-button button_margin_top="150"></wow-button>
    </div>
</template>
<script>
    import MadeInput    from 'ds/made-input'
    import WowCell      from 'wow-weex/lib/wow-cell'
    import WowButton    from 'wow-weex/lib/wow-button'
    import source       from 'utils/source'
    export default {
        data () {
            return {
                bank_src: source('temp-bank-logo.png')
            }
        },
        components: {
            MadeInput,
            WowCell,
            WowButton,
        }
    }
</script>
<style>
    .gathering-wrap{
        width: 750px;
        align-items: center;
        background-color: #f8f8f8;
    }
    .gathering-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 750px;
        background-image: linear-gradient(to left, #EE6833, #EE4432);
        height: 88px;
    }
    .gathering-inner{
        width: 686px;
        height: 512px;
        border-radius: 8px;
        background-color: #fff;
        border-width: 1px;
        border-color: #ddd;
    }
    .gathering-amount{
        border-top-width: 1px;
        border-color: #E5E5E5;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 40px;
        height: 300px;
    }
    .gathering-card-title{
        font-size: 28px;
        color: #000000;
    }
    .input-label{
        font-size: 28px;
        color: #000000;
        margin-bottom: 70px;
    }
    .gathering-card{
        height: 200px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 40px;
    }
    .gathering-prompt{
        font-size: 26px;
        color: #979797;
        width: 750px;
        padding-left: 32px;
        margin-top: 20px;
    }
    .bank-wrap{
        flex-direction: row;
        align-items: center;
    }
    .bank-logo{
        width: 48px;
        height: 48px;
        margin-right: 16px;
    }
    .bank-name{
        font-size: 28px;
        color: #000;
    }
</style>
