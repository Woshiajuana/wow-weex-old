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
        <scroller>

            <wow-switch
                @click="handleSwitch"
                :switch_value="is_switch"
            ></wow-switch>

            <wow-input-cell
                v-for="(item, index) in arr_data"
                :key="index"
                :input_label_txt="item.label"
                :input_value="item.value"
                input_use="">
                <wow-arrow slot="input-right"></wow-arrow>
            </wow-input-cell>

            <wow-button
                :button_style="{
                marginTop: 120,
            }"
                @click="handleClick"
            ></wow-button>
            <wow-button
                :button_style="{
                marginTop: 120,
            }"
                @click="handleClick1"
            ></wow-button>
            <text>{{is_switch}}</text>
            <!--<text>{{str_key}}</text>-->
            <!--<text>{{str_cell}}</text>-->
            <text>{{result}}</text>
            <text>数据：{{arr_nav}}</text>
            <!--</div>-->
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
    import Router                       from '../../../../../wow-weex-plugin/lib/router.plugin'
    import Loading                      from 'wow-weex-plugin/lib/loading.plugin'
    import Resource                     from 'wow-weex-plugin/lib/resource.plugin'
//    import Router1                      from 'plugins/router.plugin'
    import MetaMixin                    from '../../../../../wow-weex-plugin/mixins/meta.mixin'
    import Dialogs                      from 'wow-weex-plugin/lib/dialogs.plugin'

    const Navigator = weex.requireModule('navigator');
    export default {
        mixins: [Mixin, MetaMixin],
        data () {
            return {
                arr_nav: '',
                is_switch: false,
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
                result1: '',
                str_key: '1',
                str_cell: '1',
            }
        },
        created () {
            Resource.get({key: 'wow_home'}).then((result) => {
                this.result1 = result;
            })

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
                console.log(1)
//                Resource.get({key: 'wow_test'}).then((result) => {
//                    this.result = result;
//                }).catch((error) => {
//                    this.result = error;
//                });
                Router.push('wow_help')
//                Navigator.push({url: 'file:/storage/emulated/0/Android/data/com.example.wow/file/wow_home.js'})
//                Navigator.push({url: 'http://20.0.18.93:32580/dist/BD/wow_help.js', animated: 'true',})
//                Router1.push('wow_help')
//                Loading.show({touch: true});
            },
            handleClick1 (callback) {
                callback();
//                Router1.push('wow_help')
                this.metaGetData('wow_app').then(() =>{}).catch((error) => {
                    Dialogs.toast(error)
                });
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
    .search{
        position: absolute;
        width: 750px;
        height: 60px;
        top: 20px;
        left: 0;
    }
</style>
