<template>
    <div class="image-wrap">
        <image class="image" :src="image_src"></image>
        <text class="title">{{image_title}}</text>
        <text class="sub-title">{{image_sub_title}}</text>
    </div>
</template>
<script>
    export default {
        props: {
            image_src: { default: '' },
            image_title: { default: '' },
            image_sub_title: { default: '' },
        }
    }
</script>
<style>
    .image-wrap{
        align-items: center;
    }
    .image{
        width: 104px;
        height: 104px;
        border-radius: 104px;
    }
    .title{
        font-size: 32px;
        color: #000;
        line-height: 44px;
        margin-top: 20px;
    }
    .sub-title{
        margin-top: 4px;
        font-size: 28px;
        color: #979797;
    }
</style>
