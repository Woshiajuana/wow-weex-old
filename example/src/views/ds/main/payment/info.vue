<template>
    <wow-view
        view_header_center_txt="付款信息">
        <div class="body-wrap">
            <div class="body-inner">
                <image-head
                    image_sub_title="18317030071"
                    :image_src="user_src"
                    image_title="花花">
                </image-head>
                <div class="payment-amount">
                    <text class="input-label">付款金额</text>
                    <made-input></made-input>
                </div>
            </div>
            <wow-button button_margin_top="150"></wow-button>
        </div>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import WowButton    from 'wow-weex/lib/wow-button'
    import ImageHead    from 'ds/image-head'
    import MadeInput    from 'ds/made-input'
    import router       from 'modules/router'
    import source       from 'utils/source'
    export default {
        data () {
            return {
                user_src: source('temp-order-cell-left-right.png'),
            }
        },
        methods: {

        },
        components: {
            WowView,
            WowButton,
            MadeInput,
            ImageHead,
        }
    }
</script>
<style>
    .body-wrap{
        align-items: center;
    }
    .body-inner{
        padding-top: 40px;
        width: 686px;
        height: 576px;
        border-width: 1px;
        border-color: #ddd;
        background-color: #fff;
        border-radius: 8px;
        margin-top: 32px;
    }
    .payment-amount{
        margin-top: 52px;
        padding-left: 32px;
        padding-right: 32px;
    }
    .input-label{
        font-size: 28px;
        color: #000000;
        margin-bottom: 70px;
    }
</style>
