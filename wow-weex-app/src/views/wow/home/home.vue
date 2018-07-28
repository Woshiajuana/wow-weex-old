<template>
    <wow-view
        view_header_left_src=""
        :view_header_style="view_header_style">
        <div class="header" slot="view-header-center">
           <div class="input-wrap">
               <image class="logo" :src="src_search"></image>
               <text class="text">搜索你想要的组件</text>
               <image class="close" :src="src_close"></image>
           </div>
        </div>
        <div class="entry-wrap">

        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
        <div class="session">
            <image class="image" :src="src_logo"></image>
            <text class="title">WOW-WEEX</text>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import HomeMixin                    from './home.mixin'
    export default {
        mixins: [HomeMixin],
        components: {
            WowView
        }
    }
</script>
<style>
    .header{
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-left: 32px;
        padding-right: 32px;
    }
    .input-wrap{
        background-color: rgba(255,255,255,0.3);
        height: 60px;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 60px;
    }
    .logo{
        width: 30px;
        height: 30px;
        /*background-color: red;*/
    }
    .text{
        margin-left: 8px;
        font-size: 24px;
        color: #fff;
    }
    .entry-wrap{
        height: 240px;
        background-color: #5cc8ff;
    }
    .session{
        height: 360px;
    }
</style>
