<template>
    <slider
        class="wrap"
        append="tree"
        :interval="carousel_interval"
        :auto-play="carousel_auto_play"
        :style="{ height: carousel_height,
        width: carousel_width}">
        <div v-for="(item, index) in carousel_arr"
             :style="{ height: carousel_height,
             width: carousel_width}"
             :key="index"
             @click="handleClick(item, index)">
            <image class="image" :src="item.image"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<script>
    import config       from './config'
    export default {
        props: {
            carousel_arr: { default: config.carousel_arr },
            carousel_style: { default: {} },


            carousel_height: { default: config.carousel_height },
            carousel_width: { default: config.carousel_width },
            carousel_interval: { default: config.carousel_interval },
            carousel_auto_play: { default: config.carousel_auto_play }
        },
        methods: {
            handleClick(item, i) {
                this.$emit('click', item, i);
            }
        }
    }
</script>
<style>
    .image{
        flex: 1;
    }
    .indicator{
        position: absolute;
        left: 0;
        right: 0;
        height: 40px;
        bottom: 0;
        itemColor: #E1E1E1;
        itemSize:10px;
        itemSelectedColor: #ccc;
    }
</style>
