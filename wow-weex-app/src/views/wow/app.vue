<template>
    <wow-nav-bar
        :nav_arr="$meta.arr_nav">
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
        created () {
            this.fetchNavData();
        },
        methods: {
            fetchNavData () {
                this.metaGetData('wow_app').then(() =>{
                    Dialogs.alert(this.$meta)
//                    return this.resourceGet(this.$meta.arr_nav);
                }).catch((error) => {
                    Dialogs.alert(error)
                });
            }
        },
        components: {
            WowNavBar,
        }
    }
</script>
