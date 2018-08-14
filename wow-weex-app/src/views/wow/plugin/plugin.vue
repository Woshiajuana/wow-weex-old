<template>
    <wow-view
        view_header_left_src=""
        view_header_center_txt="PLUGINS">
        <wow-grid
            :grid_arr="meta$.arr_grid"
            @click="routerPush($event.key, $event)"
        ></wow-grid>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowGrid                      from 'wow-weex-ui/lib/wow-grid'
    import MetaMixin                    from 'wow-weex-plugin/mixins/meta.mixin'
    import RouterMixin                  from 'wow-weex-plugin/mixins/router.mixin'
    import Mixin                        from './plugin.mixin'
    export default {
        mixins: [Mixin, MetaMixin, RouterMixin],
        created () {
            this.metaGetData('wow_plugin');
        },
        components: {
            WowView,
            WowGrid,
        }
    }
</script>
<style>

</style>
