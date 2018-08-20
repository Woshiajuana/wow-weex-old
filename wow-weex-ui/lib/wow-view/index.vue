<template>
    <div class="wrap"
         @viewappear="handleEmit('viewappear', $event)"
         @viewdisappear="handleEmit('viewdisappear', $event)"
         :style="d_view_style">
        <div class="header"
             v-if="view_use_header"
             :style="d_view_header_style">
            <div class="left"
                 @click="handleLeft"
                 :style="d_view_header_left_style">
                <image
                    v-if="view_header_left_src"
                    :src="view_header_left_src"
                    :style="d_view_header_left_src_style"
                ></image>
                <text
                    :style="d_view_header_left_txt_style"
                    v-if="view_header_left_txt"
                >{{view_header_left_txt}}</text>
            </div>
            <div class="center"
                 :style="d_view_header_center_style">
                <text
                    :style="d_view_header_center_txt_style"
                >{{view_header_center_txt}}</text>
            </div>
            <slot name="view-header-center"></slot>
            <div class="right"
                 @click="handleEmit('right', $event)"
                 :style="d_view_header_right_style">
                <image
                    v-if="view_header_right_src"
                    :src="view_header_right_src"
                    :style="d_view_header_right_src_style"
                    autoBitmapRecycle="false"
                ></image>
                <text
                    :style="d_view_header_right_txt_style"
                    v-if="view_header_right_txt"
                >{{view_header_right_txt}}</text>
            </div>
            <slot name="view-header-cue"></slot>
        </div>
        <slot name="view-header"></slot>
        <scroller
            v-if="view_use_scroll"
            :offset-accuracy="view_offset_accuracy"
            class="inner"
            @scroll="handleEmit('scroll', $event)">
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
    import EmitMixin                    from './../../mixins/emit.mixin'
    import AssignMixin                  from './../../mixins/assign.mixin'

    const navigator = weex.requireModule('navigator');

    export default {
        mixins: [EmitMixin, Mixin, AssignMixin],
        props: {
            // 主要
            view_style: { default: {} },
            view_use_scroll: { default: config.view_use_scroll },
            view_use_left_event: { default: config.view_use_left_event },
            view_offset_accuracy: { default: config.view_offset_accuracy },

            // 头部
            view_use_header: { default: config.view_use_header },
            view_header_style: { default: {} },

            // 头部左边
            view_header_left_style: { default: {} },
            view_header_left_src: { default: config.view_header_left_src },
            view_header_left_src_style: { default: {} },
            view_header_left_txt: { default: config.view_header_left_txt },
            view_header_left_txt_style: { default: {} },

            // 头部中间
            view_header_center_style: { default: {} },
            view_header_center_txt: { default: config.view_header_center_txt },
            view_header_center_txt_style: { default: {} },

            // 头部右边
            view_header_right_style: { default: {} },
            view_header_right_src: { default: config.view_header_right_src },
            view_header_right_src_style: { default: {} },
            view_header_right_txt: { default: config.view_header_right_txt },
            view_header_right_txt_style: { default: {} },

        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
        methods: {
            handleLeft (event) {
                this.view_use_left_event ? navigator.pop() : this.$emit('left', event);
            },
        }
    }
</script>

<style>
    .wrap{
        flex: 1;
        width: 750px;
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
