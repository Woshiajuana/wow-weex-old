<template>
    <div class="input-wrap"
         @click="handleClick"
         :style="{height: input_height,
         borderColor: input_border_color,
         borderBottomWidth: input_border_bottom_width,
         borderTopWidth: input_border_top_width}">
        <slot name="input_left_part"></slot>
        <div class="input-label" v-if="input_label_txt">
            <text class="input-label-text" :style="{color: input_label_color, fontSize: input_size,}">{{input_label_txt}}</text>
            <image
                class="input-label-image"
                :style="{width: input_label_src_size[0],
                visibility: input_label_src_visible ? 'visible' : 'hidden',
                height: input_label_src_size[1]}"
                :src="input_label_src"
                v-if="input_label_src">
            </image>
        </div>
        <text class="input"
              v-if="!input_use && input_use_right"
              :style="{color: input_disabled ? (input_color && input_placeholder_color) : input_value ? input_color : input_placeholder_color,
              fontSize: input_size, height: input_height, lineHeight: input_height}">{{input_value || input_placeholder}}</text>
        <input
            v-if="input_use && input_use_right"
            class="input"
            v-model="input_value"
            :type="input_type"
            @input="handleInput"
            :disabled="input_disabled"
            :maxlength="input_max_length || 9999"
            :style="{height: +input_height - 2,
            fontSize: input_size,
            color: input_disabled ? (input_color && input_placeholder_color) : input_color}"
            :placeholder="input_placeholder"
            :placeholder-color="input_placeholder_color"/>
        <slot name="input_unit"></slot>
        <slot name="input_other"></slot>
    </div>
</template>
<script>
    import config           from './config'
    export default {
        props: {
            input_use_right: { default: config.input_use_right },
            input_max_length: { default: config.input_max_length },
            input_label_src_visible: { default: config.input_label_src_visible },
            input_type: { default: config.input_type },
            input_size: { default: config.input_size },
            input_value: { default: config.input_value },
            input_color: { default: config.input_color },
            input_height: { default: config.input_height },
            input_label_txt: { default: config.input_label_txt },
            input_label_color: { default: config.input_label_color },
            input_unit_txt: { default: config.input_unit_txt },
            input_border_bottom_width: { default: config.input_border_bottom_width },
            input_border_top_width: { default: config.input_border_top_width },
            input_border_color: { default: config.input_border_color },
            input_placeholder: { default: config.input_placeholder },
            input_placeholder_color: { default: config.input_placeholder_color },
            input_disabled: { default: config.input_disabled },
            input_use: { default: config.input_use },
            input_label_src_size: { default: config.input_label_src_size },
            input_label_src: { default: config.input_label_src },
        },
        methods: {
            handleInput (event) {
                this.$emit('input', event)
            },
            handleClick (event) {
                if (this.input_disabled) return;
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
        flex-direction: row;
        align-items: center;
    }
    .input{
        flex: 1;
        border: none;
        text-align: right;
        padding-right: 32px;
    }
    .input-label-image{
        margin-left: 8px;
    }
</style>
