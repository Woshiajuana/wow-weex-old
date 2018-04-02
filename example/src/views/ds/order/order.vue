<template>
    <wow-view
        view_header_center_txt="我的订单"
        view_background_color="#fff">
        <div class="body-wrap">
            <text class="title">请选择订单类型</text>
            <wow-cell
                v-for="(item, index) in cell_arr"
                class="cell-item"
                :key="index"
                @click.native="handleJump(item.page)"
                :cell_left_src="left_src"
                :cell_left_src_size="[112, 112]"
                cell_left_src_mar_left="40"
                cell_left_src_mar_right="40"
                cell_height="200"
                cell_border_width="0"
                cell_left_size="40"
                :cell_left_txt="item.txt"
                cell_left_color="#596D7A"
                cell_background_color="#f8f8f8">
            </wow-cell>
        </div>
    </wow-view>
</template>
<script>
    import WowView  from 'wow-weex/lib/wow-view'
    import WowCell  from 'wow-weex/lib/wow-cell'
    import router   from 'modules/router'
    import source   from 'utils/source'
    export default {
        data () {
            return {
                left_src: source('temp-order-cell-left-right.png'),
                cell_arr: [
                    { txt: '销售订单', page: 'ds_order_sale' },
                    { txt: '采购订单', page: 'ds_order_purchase' },
                ]
            }
        },
        methods: {
            handleJump(page) {
                router.push(page);
            }
        },
        components: {
            WowView,
            WowCell,
        }
    }
</script>
<style>
    .body-wrap{
        align-items: center;
    }
    .title{
        font-size: 36px;
        color: #596D7A;
        margin-top: 152px;
        line-height: 50px;
        margin-bottom: 64px;
    }
    .cell-item{
        width: 642px;
        margin-bottom: 30px;
        border-radius: 16px;
    }
</style>
