<template>
    <div :style="d_grid_style">
        <div class="item"
             @click="handleClick(item, index)"
             v-for="(item, index) in grid_arr"
             :style="d_grid_item_style"
             :key="index">
            <image
                :style="d_grid_src_style"
                :src="item.src"
            ></image>
            <text
                :style="d_grid_txt_style"
                v-if="item.text"
            >{{item.text}}</text>
        </div>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import AssignMixin                  from './../../mixins/assign.mixin'
    export default {
        mixins: [Mixin, AssignMixin],
        props: {
            grid_style: { default: {} },
            grid_src_style: { default: {} },
            grid_txt_style: { default: {} },
            grid_item_style: { default: {} },
            grid_arr: { default: config.grid_arr },
        },
        created(){
            this._wowAssign(Mixin.data(), config);
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
