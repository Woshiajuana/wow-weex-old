<template>
    <wow-view
        @scroll="handleScroll"
        view_header_left_src=""
        view_use_header=""
        view_offset_accuracy="1">
        <head-com
            class="session header-wrap"
            :src_logo="src$.src_logo"
            :style="{opacity: computedFadeOut}"
        ></head-com>
        <div class="session search-wrap"
             v-if="handleNone(index)"
             v-for="(item, index) in 2"
             :key="index"
             :class="[index && 'search-wrap-fixed']"
             :style="{opacity: index ? computedFadeIn : computedFadeOut}">
            <image v-if="index" class="logo search-logo" :src="src$.src_logo"></image>
            <wow-search
                class="search"
                @click="routerPush('wow_search')"
                search_input_placeholder="Search Components or Plugins"
                search_use_input=""
                :search_input_style="style_search_input_style"
                :search_wrap_style="index ? style_search_wrap_style : style_search_wrap_style1"
                :search_style="index ? style_search_style : {}"
                :search_src="src$.src_search"
            ></wow-search>
        </div>
        <div class="inner">
            <version-com
                v-if="meta$.arr_version"
                v-for="(item, index) in meta$.arr_version"
                :key="item"
                :data="item"
                :src_new="src$.src_new"
            ></version-com>
        </div>
        <wow-end></wow-end>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowEnd                       from 'wow-weex-ui/lib/wow-end'
    import WowSearch                    from 'wow-weex-ui/lib/wow-search'
    import MetaMixin                    from 'wow-weex-plugin/mixins/meta.mixin'
    import RouterMixin                  from 'wow-weex-plugin/mixins/router.mixin'
    import VersionCom                   from './components/version-item.component.vue'
    import HeadCom                      from './components/head-item.component.vue'
    import Mixin                        from './home.mixin'
    export default {
        mixins: [Mixin, RouterMixin, MetaMixin],
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
            },
        },
        created () {
            this.metaGetData('wow_home');
        },
        methods: {
            handleScroll (event) {
                this.event = event.contentOffset;
            },
            handleNone (index) {
                if (index !== 1) return true;
                let y = -this.event.y || 0;
                if (y < 20) return false;
                return true;
            },
        },
        components: {
            WowView,
            WowSearch,
            VersionCom,
            HeadCom,
            WowEnd,
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
    .logo{
        width: 70px;
        height: 70px;
    }
    .search-logo{
        margin-left: 10px;
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
</style>
