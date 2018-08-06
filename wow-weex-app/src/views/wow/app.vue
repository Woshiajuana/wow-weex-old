<template>
    <wow-nav-bar
        :nav_arr="nav_arr">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from '../../../../wow-weex-ui/lib/wow-nav-bar'
    import Source                       from 'utils/source.util'
    import Mixin                        from './app.mixin'
    import ResourceMixin                from '../../../../wow-weex-plugin/mixins/resource.mixin'
    export default {
        mixins: [Mixin, ResourceMixin],
        data () {
            return {
                nav_arr: [
                    {
                        txt: 'WoW',
                        src: 'wow_home',
                        img_src: Source('menu-icon-wow.png'),
                        img_checked_src: Source('menu-icon-wow-checked.png'),
                        checked: true,
                        color: '#d6d6cf',
                        checked_color: '#5cc8ff',
                    },
                    {
                        txt: 'Demo',
                        src: 'wow_demo',
                        img_src: Source('menu-icon-ys.png'),
                        img_checked_src: Source('menu-icon-ys-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#5cc8ff',
                    },
                    {
                        txt: 'Help',
                        src: 'wow_help',
                        img_src: Source('menu-icon-help.png'),
                        img_checked_src: Source('menu-icon-help-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#5cc8ff',
                    }
                ]
            }
        },
        created () {
            this.resourceGet(this.nav_arr);
        },
        components: {
            WowNavBar,
        }
    }
</script>
