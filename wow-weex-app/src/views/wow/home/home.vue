<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        :view_header_style="view_header_style">
        <wow-search></wow-search>
        <div class="header" slot="view-header-center">
           <div class="input-wrap">
               <image class="search-image" :src="src_search"></image>
               <text class="text">搜索你想要的组件</text>
               <image class="close" :src="src_close"></image>
           </div>
        </div>
        <div class="entry-wrap">
            <image class="logo" :src="src_logo"></image>
            <text class="logo-text">WOW-WEEX</text>
        </div>
        <wow-button></wow-button>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import WowButton                    from '../../../../../wow-weex-ui/lib/wow-button'
    import WowSearch                    from '../../../../../wow-weex-ui/lib/wow-search'
    import HomeMixin                    from './home.mixin'
    export default {
        mixins: [HomeMixin],
        data () {
            return {
                event: 'xxx'
            }
        },
        methods: {
            handleScroll (event) {
                this.event = event.contentOffset;
            }
        },
        components: {
            WowView,
            WowButton,
            WowSearch,
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
    .search-image{
        width: 30px;
        height: 30px;
    }
    .text{
        margin-left: 8px;
        font-size: 24px;
        color: #fff;
    }
    .entry-wrap{
        height: 240px;
        background-color: #5cc8ff;
        align-items: center;
        justify-content: center;
    }
    .logo{
        width: 120px;
        height: 120px;
    }
    .logo-text{
        font-size: 24px;
        color: #fff;
        margin-top: 20px;
    }
    .session{
        height: 360px;
    }
</style>
