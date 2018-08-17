<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        view_header_right_txt="GitHub"
        :view_header_style="{
            height: 220
        }">
        <div class="header"
             slot="view-header-center">
            <image class="logo" :src="src_logo"></image>
            <wow-search
                class="search"
                search_use_input=""
                :search_style="{
                    paddingTop: 120,
                    width: 750
                }"
                :search_wrap_style="{
                    alignItem: 'center',
                    backgroundColor: 'red',
                    justifyContent: 'center'
                }"
                :search_close_src="src_close"
                :search_src="src_search"
                v-model="str_key"
            ></wow-search>
        </div>

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
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowButton                    from 'wow-weex-ui/lib/wow-button'
    import WowSearch                    from '../../../../../wow-weex-ui/lib/wow-search'
    import WowInputCell                 from 'wow-weex-ui/lib/wow-input-cell'
    import WowArrow                     from 'wow-weex-ui/lib/wow-arrow'
    import WowCarousel                  from 'wow-weex-ui/lib/wow-carousel'
    import WowSwitch                    from 'wow-weex-ui/lib/wow-switch'
    import Mixin                        from './home.mixin'
    import Router                       from '../../../../../wow-weex-plugin/lib/router.plugin'
    import Loading                      from 'wow-weex-plugin/lib/loading.plugin'
    import MetaMixin                    from '../../../../../wow-weex-plugin/mixins/meta.mixin'
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
</style>
