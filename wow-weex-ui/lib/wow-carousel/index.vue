<template>
    <slider
        append="tree"
        @change="handleEmit('change')"
        :interval="carousel_interval"
        :auto-play="carousel_auto_play"
        :style="d_carousel_style">
        <div v-for="(item, index) in carousel_arr"
             :style="d_carousel_inner_style"
             :key="index"
             @click="handleClick(item, index)">
            <image
                :style="d_carousel_src_style"
                :src="item.src"
            ></image>
        </div>
        <slot name="carousel-inner"></slot>
        <indicator v-if="carousel_use_indicator" class="indicator"></indicator>
        <slot name="carousel-indicator"></slot>
    </slider>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    import AssignMixin                  from './../../mixins/assign.mixin'
    export default {
        mixins: [Mixin, AssignMixin, EmitMixin],
        props: {
            carousel_arr: { default: config.carousel_arr },
            carousel_style: { default: {} },
            carousel_inner_style: { default: {} },
            carousel_src_style: { default: {} },
            carousel_use_indicator: { default: config.carousel_use_indicator },
            carousel_interval: { default: config.carousel_interval },
            carousel_auto_play: { default: config.carousel_auto_play }
        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
        methods: {
            handleClick(item, i) {
                this.$emit('click', item, i);
            }
        },
    }
</script>
<style>
    .indicator{
        position: absolute;
        left: 0;
        right: 0;
        height: 40px;
        bottom: 0;
        itemColor: #999;
        itemSize:10px;
        itemSelectedColor: #fff;
    }
</style>
