<template>
    <wow-view
        @scroll="handleScroll"
        view_use_scroll=""
        view_use_header=""
        view_header_left_src=""
        :view_header_style="view_header_style">
        <wow-carousel
            :carousel_arr="arr_carousel"
        ></wow-carousel>
        <wow-search
            class="search"
            :search_close_src="src_close"
            :search_src="src_search"
            v-model="str_key"
        ></wow-search>

        <!--<div class="link-wrap">-->
            <!--<div class="link-item">-->
                <!--<image class="link-item-image" :src="src_logo"></image>-->
                <!--<text class="link-item-text">WOW-WEEX</text>-->
            <!--</div>-->
            <!--<div class="link-item">-->
                <!--<image class="link-item-image" :src="src_logo"></image>-->
                <!--<text class="link-item-text">WOW-WEEX</text>-->
            <!--</div>-->
            <!--<div class="link-item">-->
                <!--<image class="link-item-image" :src="src_logo"></image>-->
                <!--<text class="link-item-text">WOW-WEEX</text>-->
            <!--</div>-->
            <!--<div class="link-item">-->
                <!--<image class="link-item-image" :src="src_logo"></image>-->
                <!--<text class="link-item-text">WOW-WEEX</text>-->
            <!--</div>-->
        <!--</div>-->



        <!--<div class="header">-->
            <!--<image class="logo" :src="src_logo"></image>-->
            <!--<text class="logo-text">WOW-WEEX</text>-->
        <!--</div>-->
        <!--<div class="cell-wrap">-->
            <!--<wow-input-cell-->
                <!--v-for="(item, index) in arr_data"-->
                <!--:key="index"-->
                <!--:input_label_txt="item.label"-->
                <!--:input_value="item.value"-->
                <!--input_use="">-->
                <!--<wow-arrow slot="input-right"></wow-arrow>-->
            <!--</wow-input-cell>-->

            <!--<wow-button @click="handleClick"></wow-button>-->
            <!--<text>{{str_key}}</text>-->
            <!--<text>{{str_cell}}</text>-->
            <!--<text>{{result}}</text>-->
        <!--</div>-->
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import WowButton                    from '../../../../../wow-weex-ui/lib/wow-button'
    import WowSearch                    from '../../../../../wow-weex-ui/lib/wow-search'
    import WowInputCell                 from '../../../../../wow-weex-ui/lib/wow-input-cell'
    import WowArrow                     from '../../../../../wow-weex-ui/lib/wow-arrow'
    import WowCarousel                  from '../../../../../wow-weex-ui/lib/wow-carousel'
    import HomeMixin                    from './home.mixin'
    import Resource                     from '../../../wow-weex-plugin/lib/resource.plugin'
    import Router                       from '../../../wow-weex-plugin/lib/router.plugin'
    import Loading                      from '../../../wow-weex-plugin/lib/loading.plugin'
    export default {
        mixins: [HomeMixin],
        data () {
            return {
                arr_carousel: [
                    {src: 'http://www.owulia.com/static/temp/2.jpg'},
                    {src: 'http://www.owulia.com/static/temp/2.jpg'},
                    {src: 'http://www.owulia.com/static/temp/2.jpg'},
                ],
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
                str_key: '1',
                str_cell: '1',
            }
        },
        methods: {
            handleScroll (event) {
                this.event = event.contentOffset;
            },
            handleClick (callback) {
                callback();
//                Resource.get({key: 'wow_test'}).then((result) => {
//                    this.result = result;
//                }).catch((error) => {
//                    this.result = error;
//                });
//                Router.push('wow_test')
                Loading.show();
            }
        },
        components: {
            WowView,
            WowButton,
            WowSearch,
            WowInputCell,
            WowArrow,
            WowCarousel,
        }
    }
</script>
<style>

    .search{
        position: absolute;
        width: 750px;
        height: 60px;
        top: 20px;
        left: 0;
    }

    .link-wrap{
        flex-direction: row;
        align-items: center;
        height: 240px;
        background-color: #5cc8ff;
        padding-left: 64px;
        padding-right: 64px;
    }
    .link-item{
        flex: 1;
        align-items: center;
        justify-content: center;
        /*background-color: red;*/
    }
    .link-item-image{
        width: 100px;
        height: 100px;
        background-color: #fff;
    }
    .link-item-text{
        margin-top: 20px;
        font-size: 24px;
        color: #fff;
    }


    .header{
        height: 240px;
        background-color: #fff;
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
    .cell-wrap{
        margin-top: 120px;
    }
</style>
