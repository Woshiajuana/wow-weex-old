<template>
    <wow-nav-bar
        :nav_arr="nav_arr">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from '../../../../wow-weex-ui/lib/wow-nav-bar'
    import source                       from 'utils/source.util'
    export default {
        data () {
            return {
                nav_arr: [
                    {
                        txt: 'WoW',
                        src: 'dsnfc_tutorial',
                        img_src: source('menu-icon-wow.png'),
                        img_checked_src: source('menu-icon-wow-checked.png'),
                        checked: true,
                        color: '#d6d6cf',
                        checked_color: '#38363b',
                    },
                    {
                        txt: 'Demo',
                        src: 'dsnfc_main',
                        img_src: source('menu-icon-ys.png'),
                        img_checked_src: source('menu-icon-ys-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#38363b',
                    },
                    {
                        txt: 'Help',
                        src: 'dsnfc_mine',
                        img_src: source('menu-icon-help.png'),
                        img_checked_src: source('menu-icon-help-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#38363b',
                    }
                ]
            }
        },
        components: {
            WowNavBar,
        }
    }
</script>
