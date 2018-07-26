<template>
    <div class="wrap"
         @viewappear="handleViewAppear"
         @viewdisappear="handleViewDisappear"
         :style="view_style">
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
        <scroller v-if="view_use_scroll" class="inner">
            <slot></slot>
        </scroller>
        <div class="inner" v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import AssignMixin                  from './../../mixins/assign.mixin'

    const navigator = weex.requireModule('navigator');

    export default {
        mixins: [AssignMixin, Mixin],
        props: {
            // 主要
            view_use_scroll: { default: config.view_use_scroll },
            view_use_left_event: { default: config.view_use_left_event },

            // 头部
            view_use_header: { default: config.view_use_header },

            // 头部左边
            view_header_left_src: { default: config.view_header_left_src },
            view_header_left_txt: { default: config.view_header_left_txt },

            // 头部中间
            view_header_center_txt: { default: config.view_header_center_txt },

            // 头部右边
            view_header_right_src: { default: config.view_header_right_src },
            view_header_right_txt: { default: config.view_header_right_txt },

        },
        created () {
            this._wowAssign(Mixin.props, config);
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
