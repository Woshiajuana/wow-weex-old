<template>
    <cell>
        <div class="order-item-inner">
            <wow-cell
                cell_height="88"
                :cell_use_arrow="false"
                cell_padding_left="32"
                cell_border_width="0"
                cell_inner_padding_right="32"
                cell_inner_border_width="1"
                :cell_left_txt="'订单号：' + order_id"
                cell_left_color="#000"
                cell_right_color="#979797"
                :cell_right_txt="order_time">
            </wow-cell>
            <div class="order-body">
                <image class="goods-image" :src="order_src"></image>
                <div class="goods-info">
                    <text class="goods-name">付款人：{{order_payer}}</text>
                    <text class="goods-prompt">{{order_logistics}}</text>
                </div>
            </div>
            <div class="order-footer">
                <text class="order-label">订单总价：¥</text>
                <text class="order-price">{{order_total}}</text>
            </div>
        </div>
    </cell>
</template>
<script>
    import WowCell      from 'wow-weex/lib/wow-cell'
    import source       from 'utils/source'
    export default {
        props: {
            order_src: { default: source('app-order-null-icon.png') },
            order_id: { default: '123456' },
            order_time: { default: '2018-03-18 17:15' },
            order_payer: { default: '15900887799' },
            order_logistics: { default: '无需物流信息' },
            order_total: { default: '36.00' },
        },
        components: {
            WowCell,
        }
    }
</script>
<style>
    .order-item-inner{
        margin-top: 20px;
        background-color: #fff;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-color: #ddd;
    }
    .order-body{
        flex-direction: row;
        padding-top: 25px;
        padding-bottom: 25px;
        padding-right: 32px;
        padding-left: 32px;
    }
    .goods-image{
        height: 150px;
        width: 150px;
    }
    .goods-info{
        flex: 1;
        margin-left: 24px;
    }
    .goods-name{
        font-size: 32px;
        color: #000000;
        line-height: 45px;
    }
    .goods-prompt{
        font-size: 32px;
        line-height: 45px;
        color: #979797;
    }
    .order-footer{
        border-top-width: 1px;
        border-color: #ddd;
        flex-direction: row;
        height: 88px;
        padding-right: 32px;
        align-items: center;
    }
    .order-label{
        flex: 1;
        text-align: right;
        font-size: 28px;
        color: #000000;
    }
    .order-price{
        font-size: 40px;
        color: #000000;
    }
</style>
