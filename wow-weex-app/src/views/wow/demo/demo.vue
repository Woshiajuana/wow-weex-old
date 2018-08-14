<template>
    <wow-view
        view_header_left_src=""
        view_header_center_txt="DEMO">
        <!--<wow-grid-->
            <!--:grid_arr="meta$.arr_grid"-->
            <!--@click="routerPush($event.key)"-->
        <!--&gt;</wow-grid>-->
        <text>xxxxxxxxxxxxxxxxxx{{meta$.arr_grid}}</text>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowGrid                      from 'wow-weex-ui/lib/wow-grid'
    import RenderServiceMixin           from '../../../../../wow-weex-plugin/services/render.service.mixin'
    import RouterMixin                  from 'wow-weex-plugin/mixins/router.mixin'
    import Mixin                        from './demo.mixin'
    export default {
        mixins: [Mixin, RenderServiceMixin, RouterMixin],
        created () {
            this.renderView('wow_app', 'arr_grid');
        },
        components: {
            WowView,
            WowGrid,
        }
    }
</script>
<style>

</style>
