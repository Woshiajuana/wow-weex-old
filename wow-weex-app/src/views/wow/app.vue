<template>
    <wow-view view_header_center_txt="测试案例">
        <div slot="view-inner">
            <text @click="handleClick">点击我获取地址</text>
            <text>{{path}}</text>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../wow-weex-ui/lib/wow-view'
//    import ResourcePlugin               from '../../../../wow-weex-plugin/lib/resource.plugin'
    import ResourcePlugin               from '../../wow-weex-plugin/lib/resource.plugin'
//    import WowView                      from 'wow-weex/lib/wow-view'
    export default {
        data () {
            return {
                path: 'wow_app的地址',
            }
        },
        methods: {
            handleClick () {
                ResourcePlugin.get('wow_app').then((path) => {
                    this.path = path;
                }).catch((err) => {
                    this.path = err;
                })
            },
        },
        components: {
            WowView,
        },
    }
</script>
