<template>
    <textarea
        class="text-area"
        v-model="text_value"
        @input="handleInput"
        :maxlength="text_max_lenght"
        :disabled="text_disabled"
        :style="{borderColor: text_border_color,
        color: text_disabled ? text_placeholder_color : text_color}"
        :placeholder="text_placeholder"
        :placeholder-color="text_placeholder_color">
    </textarea>
</template>
<script>
    export default{
        props: {
            text_value: { default: '' },
            text_max_lenght: { default: 9999 },
            text_color: { default: '#333' },
            text_border_color: { default: '#ddd' },
            text_placeholder: { default: '请输入' },
            text_placeholder_color: { default: '#DEDEDE' },
            text_disabled: { default: false },
        },
        methods: {
            handleInput () {
                this.$emit('input', {value: this.text_value});
            }
        }
    }
</script>
<style>
    .text-area{
        border-top-width: 1px;
        border-bottom-width: 1px;
        padding-left: 32px;
        padding-right: 32px;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 28px;
        line-height: 40px;
    }
</style>
