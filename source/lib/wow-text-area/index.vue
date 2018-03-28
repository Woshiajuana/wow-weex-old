<template>
    <textarea
        class="text-area"
        v-model="text_value"
        @input="handleInput"
        :style="{height: text_height,
        borderColor: text_border_color,
        color: text_color}"
        :placeholder="text_placeholder"
        :placeholder-color="text_placeholder_color">
    </textarea>
</template>
<script>
    export default{
        props: {
            text_value: { default: '' },
            text_color: { default: '#9F9F9F' },
            text_height: { default: 210 },
            text_border_color: { default: '#ddd' },
            text_placeholder: { default: '请输入' },
            text_placeholder_color: { default: '#9F9F9F' },
        },
        methods: {
            handleInput () {
                this.$emit('input', this.text_value);
            }
        }
    }
</script>
<style>
    .text-area{
        background-color: #fff;
        border-top-width: 1px;
        border-bottom-width: 1px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 28px;
        line-height: 45px;
    }
</style>
