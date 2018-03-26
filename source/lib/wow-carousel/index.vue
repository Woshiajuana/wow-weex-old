<template>
    <slider class="carousel-wrap"
            append="tree"
            :interval="carousel_interval"
            :auto-play="carousel_auto_play"
            :style="{ height: carousel_height }">
        <div v-for="(item, index) in carousel_arr"
             :style="{ height: carousel_height }"
             :key="index"
             @click="handleClick(item, index)">
            <image class="carousel-item-image" :src="carousel_arr[0].image"></image>
        </div>
        <indicator class="carousel-indicator"></indicator>
    </slider>
</template>
<script>
    export default {
        props: {
            carousel_arr: { default: [] },
            carousel_height: { default: 200 },
            carousel_interval: { default: 3000 },
            carousel_auto_play: { default: 'true' }
        },
        methods: {
            handleClick(item, i) {
                this.$emit('click', item, i);
            }
        }
    }
</script>
<style>
    .carousel-item-image{
        flex: 1;
    }
    .carousel-indicator{
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
