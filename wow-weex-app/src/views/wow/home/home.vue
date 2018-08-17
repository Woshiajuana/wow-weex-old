<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        view_use_scroll=""
        view_header_right_txt="GitHub"
        :view_header_style="{
            height: 220
        }">
        <div class="header"
             slot="view-header-center">
            <image class="logo" :src="src_logo"></image>
            <text class="version">(V0.0.1)</text>
            <wow-search
                class="search"
                search_input_placeholder="Search Components or Plugins"
                search_use_input=""
                :search_input_style="{
                    fontSize: 20,
                    color: '#bbb'
                }"
                :search_wrap_style="{
                    alignItem: 'center',
                    justifyContent: 'center'
                }"
                :search_src="src_search"
            ></wow-search>
        </div>
        <scroller>
            <div class="inner">
                <div class="item">
                    <image class="new-icon" :src="src_new"></image>
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



            <!--<wow-button-->
                <!--:button_style="{-->
                <!--marginTop: 120,-->
            <!--}"-->
                <!--@click="handleClick"-->
            <!--&gt;</wow-button>-->
            <!--<wow-button-->
                <!--:button_style="{-->
                <!--marginTop: 120,-->
            <!--}"-->
                <!--@click="handleClick1"-->
            <!--&gt;</wow-button>-->
        </scroller>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
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
                arr_nav: '',
                is_switch: false,
                arr_data: [
                    {
                        label: '左边',
                        value: '右边'
                    },
                    {
                        label: '左边',
                        value: '右边'
                    },
                    {
                        label: '左边',
                        value: '右边'
                    },
                ],
                event: 'xxx',
                result: '',
                result1: '',
                str_key: '1',
                str_cell: '1',
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
    .header{
        align-items: center;
        padding-top: 30px;
    }
    .logo{
        width: 70px;
        height: 70px;
    }
    .version{
        font-size: 20px;
        color: #fff;
    }
    .search{
        margin-top: 16px;
        width: 750px;
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
