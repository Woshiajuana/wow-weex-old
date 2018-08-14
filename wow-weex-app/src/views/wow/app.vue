<template>
    <div>
        <text>{{meta$}}</text>
        <wow-nav-bar
            :nav_arr="meta$.arr_nav">
        </wow-nav-bar>
    </div>
</template>
<script>
    import WowNavBar                    from 'wow-weex-ui/lib/wow-nav-bar'
    import ResourceMixin                from '../../../../wow-weex-plugin/mixins/resource.mixin'
    import MetaMixin                    from '../../../../wow-weex-plugin/mixins/meta.mixin'
    import Source                       from 'utils/source.util'
    import Dialogs                      from 'wow-weex-plugin/lib/dialogs.plugin'
    import Mixin                        from './app.mixin'
    import RenderService                from '../../../../wow-weex-plugin/services/render.service'
    export default {
        mixins: [Mixin, RenderService],
        created () {
            this.render('wow_app', 'arr_nav');
        },
        components: {
            WowNavBar,
        }
    }
</script>
