<template>
    <wow-view
        :view_header_right_txt="!is_type ? '下一步' : is_disabled ? '修改' : '提交'"
        @rightItemClick="handleRight"
        view_header_center_txt="小微商户">

    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    export default {
        data () {
            return {

            }
        },
        created () {
        },
        methods: {

        },
        components: {
            WowView,
        }
    }
</script>
<style>

</style>
