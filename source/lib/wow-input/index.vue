<template>
    <div class="input-wrap"
         :style="{ height: input_height,
          paddingLeft: input_padding_left,
          paddingRight: input_padding_right }">
        <image
            v-if="input_left_src"
            :src="input_left_src"
            class="left-src"
            @click="handleClick('left')"
            :style="{ height: input_left_src_size[1],
            width: input_left_src_size[0],
            marginLeft: input_left_src_mar_left,
            marginRight: input_left_src_mar_right}">
        </image>
        <input
            type="text"
            class="input-con"
            :maxlength="input_max_length"
            @input="handleInput"
            v-model="input_value"
            :placeholder-color="input_placeholder_color"
            :placeholder="input_placeholder"
            :style="{ height: input_height,
            fontSize: input_font_size}"/>
        <image
            v-if="input_clear_src"
            :src="input_clear_src"
            class="input-clear"
            @click="handleClick('clear')"
            :style="{ height: input_clear_src_size[1],
            width: input_clear_src_size[0],
            marginLeft: input_clear_src_mar_left,
            marginRight: input_clear_src_mar_right}">
        </image>
        <image
            v-if="input_right_src"
            :src="input_right_src"
            class="right-src"
            @click="handleClick('right')"
            :style="{ height: input_right_src_size[1],
            width: input_right_src_size[0],
            marginLeft: input_right_src_mar_left,
            marginRight: input_right_src_mar_right}">
        </image>
    </div>
</template>
<script>
    import config from './config'
    export default {
        props: {
            input_padding_left: { default: 32 },
            input_padding_right: { default: 32 },
            input_value: { default: ''},
            input_placeholder_color: { default: '#B2B2B2'},
            input_font_size: { default: 28 },
            input_max_length: { default: '' },
            input_height: { default: 100 },
            input_left_src: { default: '' },
            input_right_src: { default: '' },
            input_clear_src: { default: '' },
            input_placeholder: { default: '请输入' },
            input_left_src_size: { default: [48, 48] },
            input_right_src_size: { default: [48, 48] },
            input_clear_src_size: { default: [48, 48] },
            input_left_src_mar_left: { default: 0 },
            input_left_src_mar_right: { default: 0 },
            input_clear_src_mar_left: { default: 0 },
            input_clear_src_mar_right: { default: 0 },
            input_right_src_mar_left: { default: 0 },
            input_right_src_mar_right: { default: 0 },
        },
        methods: {
            handleInput() {
                this.$emit('input', this.input_value);
            },
            handleClick(type) {
                switch (type) {
                    case 'left':
                        return this.$emit('left');
                    case 'clear':
                        return this.$emit('clear');
                    case 'right':
                        return this.$emit('right');
                }
            }
        }
    }
</script>
<style>
    .input-wrap{
        flex-direction: row;
        align-items: center;
    }
    .input-con{
        flex: 1;
    }
</style>
