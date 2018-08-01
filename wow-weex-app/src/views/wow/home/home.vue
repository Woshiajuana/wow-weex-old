<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        :view_header_style="view_header_style">
        <wow-search
            :search_close_src="src_close"
            :search_src="src_search"
            v-model="str_key"
            slot="view-header-center"
        ></wow-search>
        <div>
            <wow-input-cell v-model="str_cell"></wow-input-cell>
            <div class="entry-wrap">
                <image class="logo" :src="src_logo"></image>
                <text class="logo-text">WOW-WEEX</text>
            </div>
            <wow-button @click="handleClick"></wow-button>
            <text>{{str_key}}</text>
            <text>{{str_cell}}</text>
            <text>{{result}}</text>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../../wow-weex-ui/lib/wow-view'
    import WowButton                    from '../../../../../wow-weex-ui/lib/wow-button'
    import WowSearch                    from '../../../../../wow-weex-ui/lib/wow-search'
    import WowInputCell                 from '../../../../../wow-weex-ui/lib/wow-input-cell'
    import HomeMixin                    from './home.mixin'
    import Resource                     from '../../../wow-weex-plugin/lib/resource.plugin'
    export default {
        mixins: [HomeMixin],
        data () {
            return {
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
                Resource.get({key: 'wow-test'}).then((result) => {
                    this.result = result;
                }).catch((error) => {
                    this.result = error;
                })
            }
        },
        components: {
            WowView,
            WowButton,
            WowSearch,
            WowInputCell,
        }
    }
</script>
<style>
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
