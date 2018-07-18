<template>
    <wow-view view_header_center_txt="测试案例">
        <text @click="handleClick"></text>
    </wow-view>
</template>
<script>
    import WowView                      from '../../../../wow-weex-ui/lib/wow-view'
//    import WowView                      from 'wow-weex/lib/wow-view'
    export default {
        methods: {
            handleClick () {

            },
        },
        components: {
            WowView,
        },
    }
</script>
