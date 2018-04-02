<template>
    <wow-view
        view_header_center_txt="结算">
        <wow-cell
            cell_left_txt="结算商户"
            cell_left_color="#000"
            cell_right_color="#000"
            cell_right_txt="15900889977  王大壮"
            class="cell-item"
            cell_height="88"
            cell_background_color="#fff"
            cell_padding_left="32"
            cell_padding_right="32"
            :cell_use_arrow="false"
            :cell_use_slot="true">
        </wow-cell>
        <wow-cell
            cell_left_txt="需要配送"
            cell_left_color="#000"
            class="cell-item"
            cell_height="88"
            cell_background_color="#fff"
            cell_padding_left="32"
            cell_padding_right="32"
            :cell_use_arrow="false"
            :cell_use_slot="true">
            <wow-switch @click="handleClick"></wow-switch>
        </wow-cell>
        <wow-cell
            cell_left_txt="订单明细"
            cell_left_color="#000"
            cell_height="70"
            cell_border_width="0"
            cell_padding_left="32"
            cell_padding_right="32"
            :cell_use_arrow="false"
            :cell_use_slot="true">
        </wow-cell>
        <wow-cell
            cell_left_txt="五月花纸巾抽1092..."
            cell_left_color="#000"
            cell_right_color="#000"
            cell_right_txt="¥36.00"
            class="cell-item"
            cell_height="88"
            cell_background_color="#fff"
            cell_padding_left="32"
            cell_padding_right="32"
            :cell_use_arrow="false"
            :cell_use_slot="true">
        </wow-cell>
        <wow-cell
            cell_right_color="#EE4432"
            cell_right_txt="成交价：¥36.00"
            cell_height="88"
            cell_background_color="#fff"
            cell_padding_left="32"
            cell_padding_right="32"
            :cell_use_arrow="false"
            :cell_use_slot="true">
        </wow-cell>
        <wow-text-area class="text-area" text_placeholder="买家留言"></wow-text-area>
        <wow-button></wow-button>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import WowCell      from 'wow-weex/lib/wow-cell'
    import WowSwitch    from 'wow-weex/lib/wow-switch'
    import WowButton    from 'wow-weex/lib/wow-button'
    import WowTextArea  from 'wow-weex/lib/wow-text-area'
    import router       from 'modules/router'
    import source       from 'utils/source'
    export default {
        methods: {
            handleJump(page) {
                router.push(page);
            },
            handleClick(callback) {
                callback();
            }
        },
        components: {
            WowView,
            WowCell,
            WowSwitch,
            WowButton,
            WowTextArea,
        }
    }
</script>
<style>
    .cell-item{
        border-top-width: 1px;
        border-color: #ddd;
        margin-top: 20px;
    }
    .text-area{
        margin-top: 20px;
    }
</style>
