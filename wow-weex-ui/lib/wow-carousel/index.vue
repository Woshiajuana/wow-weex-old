<template>
    <div class="wrap">
        <slider
            append="tree"
            @change="handleEmit('change', $event)"
            :interval="carousel_interval"
            :auto-play="carousel_auto_play"
            :style="computedCarouselStyle">
            <div v-for="(item, index) in carousel_arr"
                 :style="computedCarouselInnerStyle"
                 :key="index"
                 @click="handleClick(item, index)">
                <image
                    :style="computedCarouselSrcStyle"
                    :src="item.src"
                ></image>
            </div>
            <slot name="carousel-inner"></slot>
            <indicator v-if="carousel_use_indicator" class="indicator"></indicator>
        </slider>
        <slot name="carousel-indicator"></slot>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    export default {
        mixins: [
            Mixin,
            EmitMixin,
        ],
        props: {
            carousel_arr: { default: config.carousel_arr },
            carousel_style: { default: {} },
            carousel_inner_style: { default: {} },
            carousel_src_style: { default: {} },
            carousel_use_indicator: { default: config.carousel_use_indicator },
            carousel_interval: { default: config.carousel_interval },
            carousel_auto_play: { default: config.carousel_auto_play }
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
