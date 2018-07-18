<template>
    <div class="wrap"
         @viewappear="handleViewAppear"
         @viewdisappear="handleViewDisappear"
         :style="view_style">
        <!--头部-->
        <div class="header"
             :style="view_header_style">
            <div class="left"
                 @click="handleLeft"
                 :style="view_header_left_style">
                <image
                    v-if="view_header_left_src"
                    :src="view_header_left_src"
                    :style="view_header_left_src_style"
                    class="left-image"
                    autoBitmapRecycle="false"
                ></image>
                <text
                    class="left-text"
                    :style="view_header_left_txt_style"
                    v-if="view_header_left_txt"
                >{{view_header_left_txt}}</text>
            </div>
            <div class="center"
                 :style="view_header_center_style">
                <text
                    class="center-text"
                    :style="view_header_center_txt_style"
                >{{view_header_center_txt}}</text>
            </div>
            <slot name="view-header-center"></slot>
            <div class="right"
                 @click="handleRight"
                 :style="view_header_right_style">
                <image
                    v-if="view_header_right_src"
                    :src="view_header_right_src"
                    :style="view_header_right_src_style"
                    class="right-image"
                    autoBitmapRecycle="false"
                ></image>
                <text
                    :style="view_header_right_txt_style"
                    v-if="view_header_right_txt"
                    class="right-text"
                >{{view_header_right_txt}}</text>
            </div>
            <slot name="view-header-cue"></slot>
        </div>
        <slot name="view-header"></slot>
        <!--/头部-->

        <!--主体部分-->
        <scroller v-if="view_use_scroll" class="inner">
            <slot name="view-inner"></slot>
        </scroller>
        <div class="inner" v-else>
            <slot name="view-inner"></slot>
        </div>
        <!--主体部分-->
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
            // 主要
            view_style: { default: config.view_style },
            view_use_scroll: { default: config.view_use_scroll },
            view_use_left_event: { default: config.view_use_left_event },

            // 头部
            view_use_header: { default: config.view_use_header },
            view_header_style: { default: config.view_header_style },

            // 头部左边
            view_header_left_style: { default: Object.assign({ height: config.view_header_style.height },config.view_header_left_style) },
            view_header_left_src: { default: config.view_header_left_src },
            view_header_left_src_style: { default: config.view_header_left_src_style },
            view_header_left_txt: { default: config.view_header_left_txt },
            view_header_left_txt_style: { default: config.view_header_left_txt_style },

            // 头部中间
            view_header_center_style: { default: Object.assign({ height: config.view_header_style.height },config.view_header_center_style) },
            view_header_center_txt: { default: config.view_header_center_txt },
            view_header_center_txt_style: { default: config.view_header_center_txt_style },

            // 头部右边
            view_header_right_style: { default: Object.assign({ height: config.view_header_style.height },config.view_header_right_style) },
            view_header_right_src: { default: config.view_header_right_src },
            view_header_right_src_style: { default: config.view_header_right_src_style },
            view_header_right_txt: { default: config.view_header_right_txt },
            view_header_right_txt_style: { default: config.view_header_right_txt_style },

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
            handleRight (event) {
                this.$emit('right',event);
            },
            handleLeft (event) {
                this.view_use_left_event ? navigator.pop() : this.$emit('left',event);
            },
            handleViewAppear () {
                this.$emit('viewappear')
            },
            handleViewDisappear() {
                this.$emit('viewdisappear')
            }
        }
    }
</script>

<style>
    .wrap{
        flex: 1;
        width: 750px;
        height: 2000px;
    }
    .header {
        flex-direction: row;
        width: 750px;
    }
    .left,
    .right {
        position: absolute;
        flex-direction: row;
        align-items: center;
        bottom: 0;
    }
    .right{
        right: 0;
    }
    .left{
        left: 0;
    }
    .center{
        position: absolute;
        flex-direction: row;
        left: 120px;
        right: 120px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }
    .inner{
        flex: 1;
    }
</style>
