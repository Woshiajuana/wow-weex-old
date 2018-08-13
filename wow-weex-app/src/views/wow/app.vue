<template>
    <wow-nav-bar
        :nav_arr="arr_nav">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from 'wow-weex-ui/lib/wow-nav-bar'
    import ResourceMixin                from '../../../../wow-weex-plugin/mixins/resource.mixin'
    import MetaMixin                    from '../../../../wow-weex-plugin/mixins/meta.mixin'
    import Source                       from 'utils/source.util'
    import Dialogs                      from 'wow-weex-plugin/lib/dialogs.plugin'
    import Mixin                        from './app.mixin'
    export default {
        mixins: [Mixin, ResourceMixin, MetaMixin],
        data () {
            return {
                arr_nav: {},
            }
        },
        created () {
            this.fetchNavData();
        },
        methods: {
            fetchNavData () {
                this.metaGetData('wow_app').then(() =>{
                    return this.resourceGet(this.arr_nav);
                }).catch((error) => {
                    Dialogs.toast(error)
                });
            }
        },
        components: {
            WowNavBar,
        }
    }
</script>
