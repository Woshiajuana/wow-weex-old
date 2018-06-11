<template>
    <div class="input-wrap"
         @click="handleClick"
         :style="{height: input_height,
         borderColor: input_border_color,
         borderBottomWidth: input_border_bottom_width,
         borderTopWidth: input_border_top_width}">
        <slot name="input_left_part"></slot>
        <div class="input-label" v-if="input_label_txt">
            <text class="input-label-text" :style="{color: input_label_color}">{{input_label_txt}}</text>
        </div>
        <text class="input" v-if="!input_use" :style="{color: input_disabled ? input_placeholder_color : input_value ? input_color : input_placeholder_color}">{{input_value || input_placeholder}}</text>
        <input
            v-if="input_use"
            class="input"
            v-model="input_value"
            :type="input_type"
            @input="handleInput"
            :disabled="input_disabled"
            :style="{height: +input_height - 2,
            color: input_disabled ? input_placeholder_color : input_color}"
            :placeholder="input_placeholder"
            :placeholder-color="input_placeholder_color"/>
        <slot name="input_unit"></slot>
        <slot name="input_other"></slot>
    </div>
</template>
<script>
    export default {
        props: {
            input_type: { default: 'text' },
            input_value: { default: '' },
            input_color: { default: '#333' },
            input_height: { default: 100 },
            input_label_txt: { default: '' },
            input_label_color: { default: '#333' },
            input_unit_txt: { default: '' },
            input_border_bottom_width: { default: 1 },
            input_border_top_width: { default: 0 },
            input_border_color: { default: '#ddd' },
            input_placeholder: {default: ''},
            input_placeholder_color: {default: '#DEDEDE'},
            input_disabled: {default: false},
            input_use: {default: true},
        },
        methods: {
            handleInput (event) {
                this.$emit('input', event)
            },
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }
</script>
<style>
    .input-wrap{
        flex-direction: row;
        align-items: center;
        padding-left: 32px;
    }
    .input-label{
        margin-right: 32px;
    }
    .input-label-text{
        font-size: 32px;
    }
    .input{
        flex: 1;
        border: none;
        text-align: right;
        font-size: 32px;
        padding-right: 32px;
    }
</style>
