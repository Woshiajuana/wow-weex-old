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
    import config from './config'
    export default{
        props: {
            null_src: { default: config.null_src },
            null_txt: { default: config.null_txt },
            null_txt_color: { default: config.null_txt_color },
            null_txt_size: { default: config.null_txt_size },
            null_txt_mar_top: { default: config.null_txt_mar_top },
            null_src_mar_top: { default: config.null_src_mar_top },
            null_src_size: { default: config.null_src_size },
            null_use_justify_content: { default: config.null_use_justify_content }
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
