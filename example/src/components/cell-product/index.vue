<template>
    <div class="cell-wrap">
        <div class="cell-inner">
            <image class="image"
                   :style="{width: cell_src_size[0],
                   height: cell_src_size[1]}"
                   :src="cell_src">
            </image>
            <div class="cell-con">
                <div class="cell-title">
                    <text class="cell-name">{{cell_title}}</text>
                    <text class="cell-prompt">{{cell_prompt}}</text>
                </div>
                <text class="cell-sub-title">{{cell_sub_title}}</text>
            </div>
            <select-box select_mar_left="0"></select-box>
        </div>
        <image class="cell-new-image" :src="src_new" v-if="cell_is_new"></image>
    </div>
</template>
<script>
    import SelectBox                from 'components/select-box'
    import Source                   from 'utils/source.util'
    export default {
        data () {
            return {
                src_new: Source('market_renew_cor.png')
            }
        },
        props: {
            cell_title: { default: ''},
            cell_prompt: { default: ''},
            cell_sub_title: { default: ''},
            cell_src: { default: ''},
            cell_src_size: { default: [72,72]},
            cell_is_new: { default: false },
        },
        components: {
            SelectBox,
        }
    }
</script>
<style>
    .cell-wrap{
        width: 750px;
        height: 130px;
        padding-left: 40px;
        padding-right: 40px;
    }
    .image{
        width: 72px;
        height: 72px;
        margin-right: 12px;
    }
    .cell-inner{
        height: 130px;
        flex-direction: row;
        align-items: center;
        border-color: #f2f2f2;
        border-bottom-width: 1px;
    }
    .cell-con{
        flex: 1;
    }
    .cell-title{
        flex-direction: row;
        align-items: center;
        height: 44px;
        line-height: 44px;
    }
    .cell-name{
        font-size: 32px;
        color: #333;
        margin-right: 16px;
    }
    .cell-prompt{
        font-size: 32px;
        color: #029BDD;
    }
    .cell-sub-title{
        font-size: 24px;
        color: #333;
        margin-top: 2px;
    }
    .cell-new-image{
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 80px;
    }
</style>
