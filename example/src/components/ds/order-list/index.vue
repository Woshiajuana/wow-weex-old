<template>
    <wow-view :view_use_header="false" :view_use_scroll="false">
        <wow-scroll
            @refresh="handleRefresh"
            @loading="handleLoading">
            <order-item class="order-item" v-for="(item, index) in order_arr" :key="index"></order-item>
        </wow-scroll>
        <wow-null
            v-if="!order_arr"
            :null_src="null_src"
            null_txt="还没有相关订单哦"
            null_src_mar_top="120"
            :null_use_justify_content="false">
        </wow-null>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import WowNull      from 'wow-weex/lib/wow-null'
    import WowScroll    from 'wow-weex/lib/wow-scroll'
    import OrderItem    from 'ds/order-item'
    import source       from 'utils/source'
    export default {
        data () {
            return {
                order_arr: 5,
                null_src: source('app-order-null-icon.png')
            }
        },
        methods: {
            handleRefresh(callback) {
                this.order_arr = 5;
                callback();
            },
            handleLoading(callback) {
                this.order_arr += 5;
                callback();
            }
        },
        components: {
            WowView,
            WowNull,
            OrderItem,
            WowScroll,
        }
    }
</script>
<style>
    .order-item{
        margin-top: 20px;
    }
</style>
