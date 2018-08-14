<template>
    <wow-nav-bar
        :nav_arr="meta$.arr_nav">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from 'wow-weex-ui/lib/wow-nav-bar'
    import Source                       from 'utils/source.util'
    import Dialogs                      from 'wow-weex-plugin/lib/dialogs.plugin'
    import RenderService                from 'wow-weex-plugin/services/render.service'
    import Mixin                        from './app.mixin'
    export default {
        mixins: [Mixin, RenderService],
        created () {
            this.renderView('wow_app', 'arr_nav');
        },
        components: {
            WowNavBar,
        }
    }
</script>
