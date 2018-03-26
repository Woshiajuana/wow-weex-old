<template>
    <div class="cell-wrap"
         :style="{height: cell_height,
         backgroundColor: cell_background_color,
         paddingLeft: cell_padding_left,
         paddingRight: cell_padding_right,
         borderBottomWidth: cell_border_width,
         borderBottomColor: cell_border_color}">
        <image class="cell-img"
               v-if="cell_left_src"
               :src="cell_left_src"
               :style="{height: cell_left_src_size[1],
               width: cell_left_src_size[0],
               marginLeft: cell_left_src_mar_left,
               marginRight: cell_left_src_mar_right}">
        </image>
        <div class="cell-inner"
             :style="{height: cell_height,
              paddingLeft: cell_inner_padding_left,
              paddingRight: cell_inner_padding_right,
              borderBottomWidth: cell_inner_border_width,
              borderBottomColor: cell_inner_border_color}">
            <div v-if="cell_left_width" class="cell-left" :style="{width: cell_left_width}">
                <text class="cell-left-text"
                      :style="{color:cell_left_color,
                      fontSize:cell_left_size}">{{cell_left_txt}}</text>
                <text class="cell-left-text"
                      v-if="cell_left_txt_sub"
                      :style="{color:cell_left_color_sub,
                      marginTop: cell_left_sub_mar_top,
                      fontSize:cell_left_size_sub}">{{cell_left_txt_sub}}</text>
            </div>
            <div v-if="!cell_left_width" class="cell-left">
                <text class="cell-left-text"
                      :style="{color:cell_left_color,
                      fontSize:cell_left_size}">{{cell_left_txt}}</text>
                <text class="cell-left-text"
                      v-if="cell_left_txt_sub"
                      :style="{color:cell_left_color_sub,
                      marginTop: cell_left_sub_mar_top,
                      fontSize:cell_left_size_sub}">{{cell_left_txt_sub}}</text>
            </div>
            <div v-if="!cell_use_input" class="cell-right">
                <text class="cell-right-text"
                      :style="{color:cell_right_color,
                      textAlign: cell_right_text_align,
                      fontSize:cell_right_size}">{{cell_right_txt}}</text>
            </div>
            <input v-if="cell_use_input && cell_input_type == 'text'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="text"/>
            <input v-if="cell_use_input  && cell_input_type == 'password'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="password"/>
            <input v-if="cell_use_input  && cell_input_type == 'date'" class="cell-right cell-input"
                   :style="{color:cell_right_color,
                   marginTop: cell_input_mar_top,
                   height: (+cell_height - 4),
                   lineHeight: (+cell_height - 4),
                   textAlign: cell_right_text_align,
                   fontSize:cell_right_size}"
                   @input="inputHandle"
                   v-model="right_input"
                   :maxlength="cell_input_max"
                   :disabled="cell_input_disabled"
                   :placeholder="cell_input_placeholder" type="date"/>
            <image class="cell-img"
                   @click="cellRightSrcClickHandle"
                   v-if="cell_right_src"
                   :src="cell_right_src"
                   :style="{height: cell_right_src_size[1],
               width: cell_right_src_size[0],
               marginLeft: cell_right_src_mar_left,
               marginRight: cell_right_src_mar_right}">
            </image>
            <div v-if="cell_use_arrow" class="cell-arrow"></div>
        </div>
    </div>
</template>

<script>
    import config from './config'
    export default {
        data () {
            return {
                right_input: ''
            }
        },
        props: {
            cell_use_arrow: { default: config.cell_use_arrow },
            cell_height: { default: config.cell_height },
            cell_left_txt: { default: config.cell_left_txt },
            cell_left_txt_sub: { default: config.cell_left_txt_sub },
            cell_background_color: { default: config.cell_background_color },
            cell_left_color: { default: config.cell_left_color },
            cell_left_color_sub: { default: config.cell_left_color_sub },
            cell_left_size: { default: config.cell_left_size },
            cell_left_size_sub: { default: config.cell_left_size_sub },
            cell_left_width: { default: config.cell_left_width},
            cell_right_txt: { default: config.cell_right_txt },
            cell_right_color: { default: config.cell_right_color },
            cell_right_size: { default: config.cell_right_size },
            cell_left_src: { default: config.cell_left_src },
            cell_left_src_mar_left: { default: config.cell_left_src_mar_left },
            cell_left_src_mar_right: { default: config.cell_left_src_mar_right },
            cell_left_src_size: { default: config.cell_left_src_size },
            cell_padding_left: { default: config.cell_padding_left },
            cell_padding_right: { default: config.cell_padding_right },
            cell_inner_padding_left: { default: config.cell_inner_padding_left },
            cell_inner_padding_right: { default: config.cell_inner_padding_right },
            cell_border_width: { default: config.cell_border_width },
            cell_border_color: { default: config.cell_border_color },
            cell_inner_border_width: { default: config.cell_inner_border_width },
            cell_inner_border_color: { default: config.cell_inner_border_color },
            cell_right_src: { default: config.cell_right_src },
            cell_right_src_size: { default: config.cell_right_src_size },
            cell_right_src_mar_left: { default: config.cell_right_src_mar_left },
            cell_right_src_mar_right: { default: config.cell_right_src_mar_right },
            cell_use_input: { default: config.cell_use_input },
            cell_input_disabled: { default: config.cell_input_disabled },
            cell_input_type: { default: config.cell_input_type },
            cell_input_placeholder: { default: config.cell_input_placeholder },
            cell_input_max: { default: config.cell_input_max },
            cell_right_text_align: { default: config.cell_right_text_align },
            cell_input_mar_top: { default: config.cell_input_mar_top },
            cell_left_sub_mar_top: { default: config.cell_left_sub_mar_top },
        },
        created () {
            this.right_input = this.cell_right_txt;
        },
        methods: {
            inputHandle () {
                this.$emit('input',this.right_input);
            },
            cellRightSrcClickHandle () {
                this.$emit('cellRightSrcClick')
            }
        }
    }
</script>

<style>
    .cell-wrap{
        flex-direction: row;
        align-items: center;
    }
    .cell-inner{
        flex: 1;
        flex-direction: row;
        align-items: center;
    }
    .cell-right{
        flex: 1;
        flex-direction: row;
    }
    .cell-right-text{
        flex: 1;
    }
    .cell-input{
        text-align: right;
        margin-bottom: 8px;
        padding-left: 20px;
    }
    .cell-left-text{
        flex: 1;
    }
    .cell-arrow{
        width: 16px;
        height: 16px;
        margin-right: 25px;
        margin-left: 25px;
        border-top-width: 3px;
        border-top-style: solid;
        border-right-width: 3px;
        border-right-style: solid;
        border-color: #979797;
        transform: rotate(45deg);
    }
</style>
