<template>
    <wow-view
        @scroll="handleScroll"
        :view_header_center_txt="params$.text">
        <text>11111{{params$}}</text>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import RouterMixin                  from 'wow-weex-plugin/mixins/router.mixin'
    export default {
        mixins: [RouterMixin],
        created() {
            this.routerGetParams();
        },
        components: {
            WowView,
        }
    }
</script>
<style>

</style>
