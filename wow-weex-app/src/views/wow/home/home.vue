<template>
    <wow-view
        :view_header_style="{backgroundColor: 'red'}"
        view_header_center_txt="首页">
        <div class="header">
            <div class="input-wrap">
                <image class="input-image"></image>
                <input type="text" class="input-con" placeholder="搜索"/>
            </div>
        </div>
        <div class="header"></div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import UrlMixin                     from 'url/logo.url'
    export default {
        mixins: [UrlMixin],
        components: {
            WowView
        }
    }
</script>
<style>
    .wrap{
        flex: 1;
        /*padding-top: 120px;*/
    }

    .header{
        height: 240px;
        background-color: #5cc8ff;
    }

    .header,
    .session{
        align-items: center;
    }
    .header{
        height: 240px;
        background-color: #5cc8ff;
    }
    .image{
        margin-top: 120px;
        width: 120px;
        height: 120px;
    }
    .title{
        color: #333;
        font-size: 24px;
        margin-top: 20px;
    }
    .input-wrap{
        background-color: #fff;
        height: 50px;
        width: 700px;
    }
</style>
