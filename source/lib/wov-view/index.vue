<template>
    <div class="view-wrap">
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
        <scroller class="view-inner"
            :style="{ top: view_use_header ? view_header_height : 0.1,
            backgroundColor: view_background_color}">
            <!--上拉刷新-->
            <refresh class="view-refresh"
                     v-if="view_use_refresh"
                     @refresh="refreshHandle"
                     @pullingdown="pullingDownHandle"
                     :style="{ backgroundColor: view_refresh_load_background_color }"
                     :display="is_refresh_status ? 'show' : 'hide'">
                <loading-indicator
                        class="view-refresh-icon"
                        v-if="is_refresh_type"
                        :style="{ visibility: is_refresh_type ? 'visible' : 'hidden',
                        color: view_indicator_color,
                        backgroundColor: view_indicator_background_color }">
                </loading-indicator>
            </refresh>
            <!--/上拉刷新-->
            <!--主体-->
            <slot></slot>
            <!--/主体-->
            <!--下拉刷新-->
            <loading class="view-loading"
                     v-if="view_use_load"
                     @loading="loadHandle"
                     @pullingup="pullingUpHandle"
                     :style="{ backgroundColor: view_refresh_load_background_color }"
                     :display="is_load_status ? 'show' : 'hide'">
                <loading-indicator
                        class="view-loading-icon"
                        :style="{ visibility: is_load_type ? 'visible' : 'hidden',
                        color: view_indicator_color,
                        backgroundColor: view_indicator_background_color }">
                </loading-indicator>
                <text class="view-loading-text"
                      v-if="!is_load_type"
                      :style="{ color: view_load_done_color }">没有更多了</text>
            </loading>
            <!--/下拉刷新-->
        </scroller>
    </div>
</template>

<script>
    const navigator = weex.requireModule('navigator');
    import config from './config'
    export default {
        data () {
            return {
                /**下拉状态*/
                is_refresh_status: false,

                /**上拉状态*/
                is_load_status: false,

                /**是否可以上拉*/
                is_load_type: true,

                /**是否可以下拉*/
                is_refresh_type: true
            }
        },
        props: {
            /**是否不启用默认点击事件*/
            view_not_use_left_default_click: { default: config.view_not_use_left_default_click },

            /**主体背景颜色*/
            view_background_color: { default: config.view_background_color },

            /**头部*/
            view_use_header: { default: config.view_use_header },
            view_header_height: { default: config.view_header_height },
            view_header_border_width: { default: config.view_header_border_width },
            view_header_border_color: { default: config.view_header_border_color },

            /**下拉上拉*/
            view_use_refresh: { default: config.view_use_refresh },
            view_use_load: { default: config.view_use_load },
            view_refresh_load_background_color: { default: config.view_refresh_load_background_color },
            view_indicator_color: { default: config.view_indicator_color },
            view_indicator_background_color: { default: config.view_indicator_background_color },
            view_load_done_color: { default: config.view_load_done_color },

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
        computed: {
            viewHeightCom: () => 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight
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

            /**上拉加载数据*/
            loadHandle (event) {
                this.is_load_status = true;
                this.is_load_type && this.$emit('load', event);
                !this.is_load_type && setTimeout(this.loaded,0);
            },

            /**下拉刷新数据*/
            refreshHandle (event) {
                this.is_refresh_status = true;
                this.is_refresh_type && this.$emit('refresh', event);
                !this.is_refresh_type && setTimeout(this.refreshed,0);
            },

            /**下拉距离*/
            pullingDownHandle (event) {
                this.$emit('pullingDown', event);
            },

            /**上拉距离*/
            pullingUpHandle (event) {
                this.$emit('pullingUp', event);
            },

            /**重置状态*/
            resetStatus () {
                this.is_load_status = false;
                this.is_refresh_status = false;
            },

            /**上拉完成*/
            loaded () {
                this.is_load_status = false;
            },

            /**下拉完成*/
            refreshed () {
                this.is_refresh_status = false;
            },

            /**禁止上拉*/
            banLoad () {
                this.is_load_type = false;
            },

            /**恢复上拉*/
            regainLoad () {
                this.is_load_type = true;
            },

            /**禁止下拉*/
            banRefresh () {
                this.is_refresh_type = false;
            },

            /**恢复下拉*/
            regainRefresh () {
                this.is_refresh_type = true;
            }
        }
    }
</script>

<style>
    .view-wrap{
        flex: 1;
    }
    .view-header {
        position: fixed;
        flex-direction: row;
        top: 0;
        left: 0;
        right: 0;
        width: 750px;
    }
    .view-header-right,
    .view-header-left {
        position: absolute;
        flex-direction: row;
        align-items: center;
        top: 0;
    }
    .view-header-right{
        right: 0;
    }
    .view-header-left{
        left: 0;
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
        position: absolute;
        width: 750px;
        left: 0;
        bottom: 0;
    }
    .view-refresh,
    .view-loading{
        justify-content:center;
        flex-direction: row;
        align-items:center;
        height: 100px;
        line-height: 100px;
    }
    .view-refresh-icon,
    .view-loading-icon{
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
    .view-refresh-icon{
        margin-bottom: 25px;
    }
    .view-loading-text{
        font-size: 24px;
    }
</style>
