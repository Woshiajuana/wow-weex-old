<template>
    <wow-view view_header_center_txt="测试案例">
        <div>
            <text @click="handleJump">点击我跳转</text>
            <text @click="handleClick">点击我获取地址</text>
            <text>{{path}}</text>
            <wow-input-cell v-model="test"></wow-input-cell>
            <text>调用的次数{{num}}</text>
            <text @click="handleTest">test的值：{{test}}</text>
        </div>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../wow-weex-ui/lib/wow-view'
    import WowInputCell                 from '../../../../wow-weex-ui/lib/wow-input-cell'
//    import ResourcePlugin               from '../../../../wow-weex-plugin/lib/resource.plugin'
    import ResourcePlugin               from '../../wow-weex-plugin/lib/resource.plugin'
//    import WowView                      from 'wow-weex/lib/wow-view'
    import RouterPlugin                 from 'plugins/router.plugin'
    export default {
        data () {
            return {
                path: 'wow_app的地址',
                test: '1',
                num: 0
            }
        },
        methods: {
            handleClick () {
                ResourcePlugin.get({key: 'wow_app'}).then((path) => {
                    this.path = path;
                }).catch((err) => {
                    this.path = err;
                })
            },
            handleJump () {
                RouterPlugin.push('wow_test')
            },
            handleTest () {
                console.log(this.test)
            }
        },
        components: {
            WowView,
            WowInputCell,
        },
    }
</script>
