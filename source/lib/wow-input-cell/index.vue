<template>
    <div class="input-wrap"
         :style="{height: input_height,
         borderColor: input_border_color,
         borderBottomWidth: input_border_bottom_width,
         borderTopWidth: input_border_top_width}">
        <div class="input-label" v-if="input_label_txt">
            <text class="input-label-text" :style="{color: input_label_color}">{{input_label_txt}}</text>
        </div>
        <input
            class="input"
            v-model="input_value"
            @input="handleInput"
            :style="{height: +input_height - 2,
            color: input_color}"
            :placeholder="input_placeholder"
            :placeholder-color="input_placeholder_color"/>
        <slot name="input_unit"></slot>
    </div>
</template>
<script>
    export default {
        props: {
            input_value: { default: '' },
            input_color: { default: '#333' },
            input_height: { default: 90 },
            input_label_txt: { default: '' },
            input_label_color: { default: '#333' },
            input_unit_txt: { default: '' },
            input_border_bottom_width: { default: 1 },
            input_border_top_width: { default: 0 },
            input_border_color: { default: '' },
            input_placeholder: {default: ''},
            input_placeholder_color: {default: '#ccc'},
        },
        methods: {
            handleInput (event) {
                this.$emit('input', event)
            }
        }
    }
</script>
<style>
    .input-wrap{
        flex-direction: row;
        align-items: center;
        padding-left: 32px;
        padding-right: 32px;
    }
    .input-label{
        margin-right: 32px;
    }
    .input{
        flex: 1;
        border: none;
        text-align: right;
    }
</style>
