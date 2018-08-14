<template>
    <wow-view
        @scroll="handleScroll"
        view_header_center_txt="COMPONENT"
        view_header_left_src="">

    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import Mixin                        from './component.mixin'
    export default {
        mixins: [Mixin],
        data () {
            return {

            }
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
