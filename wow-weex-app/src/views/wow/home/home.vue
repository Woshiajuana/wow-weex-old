<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        view_use_header=""
        view_offset_accuracy="1">
        <div class="session header-wrap"
             :style="{opacity: computedFadeOut}">
            <image class="logo" :src="src$.src_logo"></image>
            <text class="version">(V0.0.1)</text>
            <text class="link">GitHub</text>
        </div>
        <div class="session search-wrap"
             v-for="(item, index) in 2"
             :key="index"
             :class="[index && 'search-wrap-fixed']"
             :style="{opacity: index ? computedFadeIn : computedFadeOut}">
            <image v-if="index" class="logo search-logo" :src="src$.src_logo"></image>
            <wow-search
                class="search"
                search_input_placeholder="Search Components or Plugins"
                search_use_input=""
                :search_input_style="style_search_input_style"
                :search_wrap_style="index ? style_search_wrap_style : style_search_wrap_style1"
                :search_style="index ? style_search_style : {}"
                :search_src="src$.src_search"
            ></wow-search>
        </div>
        <div class="inner">
            <div class="item">
                <image class="new-icon" :src="src$.src_new"></image>
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="title">V0.0.1</text>
                    <text class="text">1.修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">2.修改了坡地阿斯</text>
                    <text class="text">3.修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">5.修改了坡</text>
                </div>
            </div>

            <div class="item">
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="text">修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">修改了坡地阿斯</text>
                    <text class="text">修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">修改了坡</text>
                </div>
            </div>

            <div class="item">
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="text">修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">修改了坡地阿斯</text>
                    <text class="text">修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">修改了坡</text>
                </div>
            </div>

            <div class="item">
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="text">修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">修改了坡地阿斯</text>
                    <text class="text">修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">修改了坡</text>
                </div>
            </div>

            <div class="item">
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="text">修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">修改了坡地阿斯</text>
                    <text class="text">修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">修改了坡</text>
                </div>
            </div>

            <div class="item">
                <image class="image" src="http://www.owulia.com/static/temp/2.jpg"></image>
                <div class="con">
                    <text class="text">修改了坡地阿斯皮大蒜捣破啊</text>
                    <text class="text">修改了坡地阿斯</text>
                    <text class="text">修改了坡地阿斯大三大四都看得开地爬上爬大</text>
                    <text class="text">修改了坡</text>
                </div>
            </div>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import WowButton                    from 'wow-weex-ui/lib/wow-button'
    import WowSearch                    from 'wow-weex-ui/lib/wow-search'
    import WowInputCell                 from 'wow-weex-ui/lib/wow-input-cell'
    import WowArrow                     from 'wow-weex-ui/lib/wow-arrow'
    import WowCarousel                  from 'wow-weex-ui/lib/wow-carousel'
    import WowSwitch                    from 'wow-weex-ui/lib/wow-switch'
    import Mixin                        from './home.mixin'
    import Router                       from 'wow-weex-plugin/lib/router.plugin'
    import Loading                      from 'wow-weex-plugin/lib/loading.plugin'
    import MetaMixin                    from 'wow-weex-plugin/mixins/meta.mixin'
    import Dialogs                      from 'wow-weex-plugin/lib/dialogs.plugin'
    export default {
        mixins: [Mixin, MetaMixin],
        data () {
            return {
                event: {},
            }
        },
        computed: {
            computedFadeIn () {
                let y = -this.event.y || 0;
                if (y < 20) return 0;
                if (y > 120) return 1;
                return ( y - 20) / 100
            },
            computedFadeOut () {
                let y = -this.event.y || 0;
                if (y < 20) return 1;
                if (y > 120) return 0;
                return 1 - ( y - 20) / 100
            }
        },
        created () {
            this.metaGetData('wow_home');
        },
        methods: {
            handleSwitch(callback) {
                callback && callback();
            },
            handleScroll (event) {
                this.event = event.contentOffset;
            },
            handleClick (callback) {
                callback();
                Router.push({app: 'test', key: 'wow_help'})
            },
            handleClick1 (callback) {
                callback();
                Router.push('wow_demo');
            }
        },
        components: {
            WowView,
            WowButton,
            WowSearch,
            WowInputCell,
            WowArrow,
            WowCarousel,
            WowSwitch,
        }
    }
</script>
<style>
    .header-wrap{
        padding-top: 30px;
    }
    .session{
        width: 750px;
        align-items: center;
        background-color: #5cc8ff;
    }
    .link{
        position: absolute;
        font-size: 28px;
        color: #fff;
        right: 20px;
        top: 16px;
    }
    .logo{
        width: 70px;
        height: 70px;
    }
    .search-logo{
        margin-left: 10px;
    }
    .version{
        font-size: 20px;
        color: #fff;
    }

    .search-wrap{
        height: 90px;
        align-items: center;
        flex-direction: row;
    }
    .search{
        flex: 1;
    }
    .search-wrap-fixed{
        position: fixed;
        top: 0;
    }


    .inner{
        margin-top: 20px;
        width: 750px;
        flex-wrap: wrap;
        padding-left: 20px;
        padding-right: 20px;
        justify-content: space-between;
    }
    .item{
        flex: 1;
        background-color: #fff;
        border-radius: 8px;
        flex-direction: row;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-color: #dedede;
        border-width: 1px;
    }
    .item:active{
        background-color: #bbb;
    }
    .image{
        width: 200px;
        height: 200px;
        margin-right: 20px;
        border-radius: 5px;
    }
    .con{
        height: 200px;
    }
    .new-icon{
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
    }
    .title{
        color: #999;
        height: 50px;
        font-size: 32px;
        line-height: 50px;
        margin-bottom: 30px;
    }
    .text{
        width: 450px;
        color: #bbb;
        font-size: 24px;
        line-height: 40px;
    }
</style>
