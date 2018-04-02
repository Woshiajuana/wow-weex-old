<template>
    <wow-view view_header_center_txt="销售订单">
        <wow-nav-bar
            nav_position="top"
            nav_background_color="#FFF"
            nav_checked_color="#EE4432"
            :nav_arr="nav_arr">
        </wow-nav-bar>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import WowNavBar    from 'wow-weex/lib/wow-navbar'
    export default{
        data () {
            return {
                nav_arr:  [{
                    txt: '待处理',
                    src: 'ds_order_sale_handle',
                    checked: true
                }, {
                    txt: '代付款',
                    src: 'ds_order_sale_payment',
                    checked: false
                },
                {
                    txt: '已完成',
                    src: 'ds_order_sale_finished',
                    checked: false
                }, {
                    txt: '已关闭',
                    src: 'ds_order_sale_closed',
                    checked: false
                }]
            }
        },
        components: {
            WowView,
            WowNavBar,
        }
    }
</script>
<style>

</style>
