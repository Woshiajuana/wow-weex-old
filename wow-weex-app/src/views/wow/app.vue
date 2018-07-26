<template>
    <wow-nav-bar
        :nav_arr="nav_arr">
    </wow-nav-bar>
</template>
<script>
    import WowNavBar                    from '../../../../wow-weex-ui/lib/wow-nav-bar'
    import Source                       from 'utils/source.util'
    export default {
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
                        src: 'dsnfc_main',
                        img_src: Source('menu-icon-ys.png'),
                        img_checked_src: Source('menu-icon-ys-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#5cc8ff',
                    },
                    {
                        txt: 'Help',
                        src: 'dsnfc_mine',
                        img_src: Source('menu-icon-help.png'),
                        img_checked_src: Source('menu-icon-help-checked.png'),
                        checked: false,
                        color: '#d6d6cf',
                        checked_color: '#5cc8ff',
                    }
                ]
            }
        },
        components: {
            WowNavBar,
        }
    }
</script>
