<template>
    <div class="wrap"
         @click="handleClick"
         :style="computedInputWrapStyle">
        <slot name="input-left"></slot>
        <text class="label"
              v-if="input_label_txt"
              :style="computedInputLabelStyle"
        >{{input_label_txt}}</text>
        <text class="input"
              v-if="!input_use && input_use_right"
              :style="computedInputStyle"
        >{{input_value || input_placeholder}}</text>
        <div class="null" v-if="!input_use_right" :style="computedInputStyle"></div>
        <input
            v-if="input_use && input_use_right"
            class="input"
            v-model="input_value"
            :type="input_type"
            @input="handleInput"
            :disabled="input_disabled"
            :maxlength="input_max_length || 9999"
            :style="computedInputStyle"
            :placeholder="input_placeholder"
            :placeholder-color="input_placeholder_color"/>
        <slot name="input-other"></slot>
        <slot name="input-right"></slot>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import InputMixin                   from './../../mixins/input.mixin'

    export default {
        mixins: [
            InputMixin,
            Mixin,
        ],
        props: {
            input_type: { default: config.input_type },
            input_disabled: { default: config.input_disabled },
            input_value: { default: config.input_value },
            input_use: { default: config.input_use },
            input_use_right: { default: config.input_use_right },
            input_style: { default: {} },
            input_wrap_style: { default: {} },
            input_label_style: { default: {} },
            input_label_txt: { default: config.input_label_txt },
            input_placeholder: { default: config.input_placeholder },
            input_placeholder_color: { default: config.input_placeholder_color },
            input_max_length: { default: config.input_max_length },
        },
        model: {
            prop: 'input_value',
            event: 'input'
        },
        methods: {
            handleClick (event) {
                if (this.input_disabled) return;
                this.$emit('click', event);
            }
        }
    }
</script>
<style>
    .wrap{
        flex-direction: row;
        align-items: center;
        padding-left: 32px;
        justify-content: space-between;
    }
    .label{
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
</style>
