<template>
    <div class="null-wrap" :class="[null_use_justify_content && 'justify-content']">
        <image
            class="null-image"
            :style="{ marginTop: null_src_mar_top,
            width: null_src_size[0],
            height: null_src_size[1]}"
            :src="null_src">
        </image>
        <text
            class="null-text"
            :style="{ marginTop: null_txt_mar_top,
            fontSize: null_txt_size,
            color: null_txt_color }">{{ null_txt }}</text>
    </div>
</template>
<script>
    export default{
        props: {
            null_src: { default: '' },
            null_txt: { default: '' },
            null_txt_color: { default: '#979797' },
            null_txt_size: { default: '26' },
            null_txt_mar_top: { default: 48 },
            null_src_mar_top: { default: 0 },
            null_src_size: { default: [240, 240] },
            null_use_justify_content: { default: true }
        }
    }
</script>
<style>
    .null-wrap{
        flex: 1;
        align-items: center;
    }
    .justify-content{
        justify-content: center;
    }
</style>
