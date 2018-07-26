<template>
    <wow-view
        :view_use_header="false">
        <div class="wrap">
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
        justify-content: center;
        align-items: center;
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
</style>
