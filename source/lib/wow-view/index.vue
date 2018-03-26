<template>
    <div class="view-wrap"
         @viewappear="handleViewAppear"
         :style="{backgroundColor: view_background_color}">
        <div v-if="padding_top && view_use_compatible" class="view-compatible" :style="{
             height: padding_top,
             backgroundColor: view_header_background_color,
             backgroundImage: view_header_background_image,}"></div>
        <!--头部-->
        <div class="view-header"
             v-if="view_use_header"
             :style="{ height: view_header_height,
             backgroundColor: view_header_background_color,
             backgroundImage: view_header_background_image,
             borderBottomColor: view_header_border_color,
             borderBottomWidth: view_header_border_width }">
            <!--左边-->
            <div class="view-header-left"
                 :style="{ height: view_header_height}"
                 @click="leftItemClickHandle">
                <image class="header-left-image"
                       :class="[view_header_left_src_style]"
                       v-if="view_header_left_src"
                       :style="{width: view_header_left_src_size[0] + view_header_left_src_pad_left + view_header_left_src_pad_right,
                       marginLeft: view_header_left_src_mar_left,
                       marginRight: view_header_left_src_mar_right,
                       paddingLeft: view_header_left_src_pad_left,
                       paddingRight: view_header_left_src_pad_right,
                       height: view_header_left_src_size[1]}"
                       :src="view_header_left_src">
                </image>
                <text class="header-left-text"
                      v-if="view_header_left_txt"
                      :style="{ color: view_header_left_color,
                      fontSize: view_header_left_size,
                      marginLeft: view_header_left_txt_mar_left,
                      marginRight: view_header_left_txt_mar_right}">{{view_header_left_txt}}</text>
            </div>
            <!--/左边-->
            <!--中间-->
            <div class="view-header-center" :style="{ height: view_header_height}">
                <text class="header-center-text"
                      :style="{ color: view_header_center_color,
                      fontSize: view_header_center_size }">{{view_header_center_txt}}</text>
                <image v-if="view_header_center_src"
                       :src="view_header_center_src"
                       :style="{width: view_header_center_src_size[0] + view_header_center_src_pad_left + view_header_center_src_pad_right,
                       marginLeft: view_header_center_src_mar_left,
                       marginRight: view_header_center_src_mar_right,
                       paddingLeft: view_header_center_src_pad_left,
                       paddingRight: view_header_center_src_pad_right,
                       height: view_header_center_src_size[1]}"
                       class="header-center-image">
                </image>
            </div>
            <!--/中间-->
            <!--右边-->
            <div class="view-header-right"
                 :style="{ height: view_header_height}"
                 @click="rightItemClickHandle">
                <text class="header-right-text"
                      v-if="view_header_right_txt"
                      :style="{ color: view_header_right_color,
                      fontSize: view_header_right_size,
                      marginLeft: view_header_right_txt_mar_left,
                      marginRight: view_header_right_txt_mar_right }">{{view_header_right_txt}}</text>
                <image v-if="view_header_right_src"
                       :src="view_header_right_src"
                       :style="{width: view_header_right_src_size[0] + view_header_right_src_pad_left + view_header_right_src_pad_right,
                       marginLeft: view_header_right_src_mar_left,
                       marginRight: view_header_right_src_mar_right,
                       paddingLeft: view_header_right_src_pad_left,
                       paddingRight: view_header_right_src_pad_right,
                       height: view_header_right_src_size[1]}"
                       class="header-right-image">
                </image>
            </div>
            <!--/右边-->
        </div>
        <!--/头部-->
        <scroller v-if="view_use_scroll" class="view-inner">
            <slot></slot>
        </scroller>
        <div class="view-inner" v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    import config from './config'
    export default {
        data () {
            return {
                padding_top: 0,
            }
        },
        props: {
            view_use_compatible: { default: true },
            /**是否启用scroller*/
            view_use_scroll: { default: config.view_use_scroll },
            view_header_left_src_style: { default: '' },

            /**是否不启用默认点击事件*/
            view_not_use_left_default_click: { default: config.view_not_use_left_default_click },

            /**主体背景颜色*/
            view_background_color: { default: config.view_background_color },

            /**头部*/
            view_use_header: { default: config.view_use_header },
            view_header_height: { default: config.view_header_height },
            view_header_border_width: { default: config.view_header_border_width },
            view_header_border_color: { default: config.view_header_border_color },

            /**头部背景色*/
            view_header_background_color: { default: config.view_header_background_color },
            view_header_background_image: { default: config.view_header_background_image },

            /**头部左边图片样式定义*/
            view_header_left_src: { default: config.view_header_left_src },
            view_header_left_src_size: { default: config.view_header_left_src_size },
            view_header_left_src_mar_left: { default: config.view_header_left_src_mar_left },
            view_header_left_src_mar_right: { default: config.view_header_left_src_mar_right },
            view_header_left_src_pad_left: { default: config.view_header_left_src_pad_left },
            view_header_left_src_pad_right: { default: config.view_header_left_src_pad_right },

            /**头部左边文字样式定义*/
            view_header_left_txt: { default: config.view_header_left_txt },
            view_header_left_color: { default: config.view_header_left_color },
            view_header_left_size: { default: config.view_header_left_size },
            view_header_left_txt_mar_left: { default: config.view_header_left_txt_mar_left },
            view_header_left_txt_mar_right: { default: config.view_header_left_txt_mar_right },

            /**头部中间图片样式样式定义*/
            view_header_center_src: { default: config.view_header_center_src },
            view_header_center_src_size: { default: config.view_header_center_src_size },
            view_header_center_src_mar_left: { default: config.view_header_center_src_mar_left },
            view_header_center_src_mar_right: { default: config.view_header_center_src_mar_right },
            view_header_center_src_pad_left: { default: config.view_header_center_src_pad_left },
            view_header_center_src_pad_right: { default: config.view_header_center_src_pad_right },

            /**头部中间文字样式定义*/
            view_header_center_txt: { default: config.view_header_center_txt },
            view_header_center_size: { default: config.view_header_center_size },
            view_header_center_color: { default: config.view_header_center_color },

            /**头部右边图片样式定义*/
            view_header_right_src: { default: config.view_header_right_src },
            view_header_right_src_size: { default: config.view_header_right_src_size },
            view_header_right_src_mar_left: { default: config.view_header_right_src_mar_left },
            view_header_right_src_mar_right: { default: config.view_header_right_src_mar_right },
            view_header_right_src_pad_left: { default: config.view_header_right_src_pad_left },
            view_header_right_src_pad_right: { default: config.view_header_right_src_pad_right },

            /**头部右边文字样式定义*/
            view_header_right_txt: { default: config.view_header_right_txt },
            view_header_right_size: { default: config.view_header_right_size },
            view_header_right_color: { default: config.view_header_right_color },
            view_header_right_txt_mar_left: { default: config.view_header_right_txt_mar_left },
            view_header_right_txt_mar_right: { default: config.view_header_right_txt_mar_right },
        },
        created () {
            var env = this.$getConfig().env;
            if (env.platform === 'iOS') {
                var deviceWidth = env.deviceWidth / env.scale;
                this.height = 64.0 * 750.0 / deviceWidth;
                if (this.height < 149) this.padding_top = 72;
                else this.padding_top = Math.floor(this.height - 88);
            }
        },
        methods: {
            /**右边按钮点击事件*/
            rightItemClickHandle (event) {
                this.$emit('rightItemClick',event);
            },
            /**左边按钮点击事件*/
            leftItemClickHandle (event) {
                this.view_not_use_left_default_click ? this.$emit('leftItemClick',event) : navigator.pop();
            },
            handleViewAppear () {
                this.$emit('viewappear')
            }
        }
    }
</script>

<style>
    .view-wrap{
        flex: 1;
        width: 750px;
    }
    .view-header {
        flex-direction: row;
        width: 750px;
    }
    .view-header-right,
    .view-header-left {
        position: absolute;
        flex-direction: row;
        align-items: center;
        bottom: 0;
    }
    .view-header-right{
        right: 0;
    }
    .view-header-left{
        left: 0;
    }
    .view-extend{
        border-radius: 100px;
    }
    .view-header-center{
        position: absolute;
        flex-direction: row;
        left: 120px;
        right: 120px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .view-inner{
        flex: 1;
    }
</style>
