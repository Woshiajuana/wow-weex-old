<template>
    <wow-view
        @viewappear="handleViewAppear"
        @rightItemClick="handleJump('ds_order')"
        view_header_left_src=""
        view_header_right_txt_mar_right="32"
        view_header_border_width="0"
        view_header_right_txt="我的订单"
        view_header_right_color="#fff"
        view_background_color="#f8f8f8"
        view_header_background_image="linear-gradient(to left, #EE6833, #EE4432)">
        <div class="header-wrap">
            <text class="title" @click="handleLogin('ds_login')">商城</text>
            <text class="sub-title">简单购物 轻松付</text>
        </div>
        <div class="body-wrap">
            <div class="search-wrap">
                <wow-input
                    :input_right_src="tel_src"
                    input_height="80"
                    input_placeholder="输入手机号/店铺ID"
                    input_font_size="56">
                </wow-input>
                <div class="input-placeholder-wrap">
                    <div class="input-placeholder">
                        <text class="placeholder-txt">在上方输入您要搜索的店铺手机号</text>
                    </div>
                    <div class="input-placeholder-arrow"></div>
                </div>
                <div class="button-wrap">
                    <wow-button button_margin_top="0" @click="handleJump('ds_store')"></wow-button>
                </div>
                <history-part
                    class="search-history"
                    :history_arr="history_arr">
                </history-part>
            </div>
            <wow-carousel :carousel_arr="carousel_arr"></wow-carousel>
        </div>
    </wow-view>
</template>
<script>
    import source       from 'utils/source'
    import WowView      from 'wow-weex/lib/wow-view'
    import WowButton    from 'wow-weex/lib/wow-button'
    import WowCarousel  from 'wow-weex/lib/wow-carousel'
    import WowInput     from 'wow-weex/lib/wow-input'
    import HistoryPart  from 'ds/history-part'
    import router       from 'modules/router'
    import modal        from 'modules/modal'
    export default {
        data () {
            return {
                carousel_arr: [
                    { image: source('temp-carousel-image.png') },
                    { image: source('temp-carousel-image.png') },
                    { image: source('temp-carousel-image.png') }
                ],
                tel_src: source('app-address-list-icon.png'),
                history_arr: ['15200002222', '15200002222', '15200002222', '15200002222']
            }
        },
        methods: {
            handleViewAppear() {

            },
            handleJump(page) {
                router.push(page);
            },
            handleLogin() {
                modal.show('ds_login');
            }
        },
        components: {
            WowView,
            WowCarousel,
            WowInput,
            WowButton,
            HistoryPart,
        }
    }
</script>
<style>
    .header-wrap{
        height: 228px;
        background-image: linear-gradient(to left, #EE6833, #EE4432);
        padding-left: 32px;
        padding-right: 32px;
    }
    .title{
        margin-top: 14px;
        font-size: 56px;
        color: #FFF;
        line-height: 80px;
    }
    .sub-title{
        font-size: 28px;
        color: #FFF;
    }
    .body-wrap{
        padding-left: 32px;
        padding-right: 32px;
        margin-top: -80px;
    }
    .search-wrap{
        background-color: #fff;
        border-radius: 8px;
        height: 640px;
        margin-bottom: 32px;
        padding-top: 48px;
    }
    .input-placeholder-wrap{
        padding-top: 12px;
        padding-left: 32px;
        padding-right: 32px;
        margin-top: 8px;
    }
    .input-placeholder-arrow{
        position: absolute;
        top: 4px;
        left: 64px;
        width: 20px;
        height: 20px;
        background-color: #f8f8f8;
        border-top-width: 1px;
        border-right-width: 1px;
        border-color: #E5E5E5;
        transform: rotate(-45deg);
    }
    .input-placeholder{
        justify-content: center;
        height: 60px;
        border-width: 1px;
        border-color: #E5E5E5;
        background-color: #F8F8F8;
        border-radius: 8px;
        padding-left: 32px;
    }
    .placeholder-txt{
        font-size: 28px;
        color: #B2B2B2;
    }
    .button-wrap{
        margin-top: 64px;
        align-items: center;
    }
    .search-history{
        margin-top: 40px;
        padding-left: 32px;
        padding-right: 32px;
    }
</style>
