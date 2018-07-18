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
                        txt: '教程',
                        src: 'dsnfc_tutorial',
                        img_src: source('dsnfc_tab_tutorial.png'),
                        img_checked_src: source('dsnfc_tab_tutorial_active.png'),
                        checked: false
                    },
                    {
                        src: 'dsnfc_main',
                        img_src: source('dsnfc_tab_main.png'),
                        img_checked_src: source('dsnfc_tab_main.png'),
                        checked: false
                    },
                    {
                        txt: '我的',
                        src: 'dsnfc_mine',
                        img_src: source('dsnfc_tab_mine.png'),
                        img_checked_src: source('dsnfc_tab_mine_active.png'),
                        checked: true
                    }
                ]
            }
        },
        components: {
            WowNavBar,
        }
    }
</script>
