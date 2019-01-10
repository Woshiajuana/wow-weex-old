<template>
    <div :style="computedGridStyle">
        <div class="item"
             @click="handleClick(item, index)"
             v-for="(item, index) in grid_arr"
             :style="computedGridItemStyle"
             :key="index">
            <image
                :style="computedGridSrcStyle"
                :src="item.src"
            ></image>
            <text
                :style="computedGridTxtStyle"
                v-if="item.text"
            >{{item.text}}</text>
        </div>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    export default {
        mixins: [
            Mixin,
        ],
        props: {
            grid_style: { default: {} },
            grid_src_style: { default: {} },
            grid_txt_style: { default: {} },
            grid_item_style: { default: {} },
            grid_arr: { default: config.grid_arr },
        },
        methods: {
            handleClick (item, index) {
                this.$emit('click', item, index)
            }
        }
    }
</script>
<style>
    .item:active{
        background-color: #ddd;
    }
</style>
