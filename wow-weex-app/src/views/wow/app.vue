<template>
    <wow-nav-bar
        :nav_arr="meta$.arr_nav">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from 'wow-weex-ui/lib/wow-nav-bar'
    import RenderServiceMixin           from 'wow-weex-plugin/services/render.service.mixin'
    import BarMixin                     from 'wow-weex-plugin/mixins/bar.mixin'
    import Mixin                        from './app.mixin'
    export default {
        mixins: [Mixin, RenderServiceMixin, BarMixin],
        created () {
            this.renderView('wow_app', 'arr_nav');
            this.barSet();
        },
        components: {
            WowNavBar,
        }
    }
</script>
