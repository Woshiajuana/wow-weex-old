<template>
    <div class="wrap"
         :style="computedProgressStyle">
        <div class="inner" :style="computedProgressInnerStyle">
            <div class="box" :style="computedProgressBoxStyle">
                <div class="con left" :style="computedProgressConStyle" ref="left">
                    <div class="circle circle-left" :style="computedProgressCircleStyle"></div>
                </div>
            </div>
            <div class="box">
                <div class="con right" :style="computedProgressConStyle" ref="right">
                    <div class="circle circle-right" :style="computedProgressCircleStyle"></div>
                </div>
            </div>
        </div>
        <div class="mask-inner">
            <div class="mask" :style="computedProgressMaskStyle"></div>
        </div>
        <slot name="progress-inner"></slot>
    </div>
</template>

<script>
    import config                       from './config'
    import Mixin                        from './mixins'

    const animation = weex.requireModule('animation');

    export default {
        mixins: [
            Mixin,
        ],
        props: {
            progress: { default: 0 },
            progress_style: { default: {} },
            progress_inner_style: { default: {} },
            progress_box_style: { default: {} },
            progress_con_style: { default: {} },
            progress_mask_style: { default: {} },
            progress_circle_style: { default: {} },
        },
        mounted () {
            let rotate = Math.ceil(360 * this.progress);
            this.run(rotate);
        },
        methods: {
            run (rotate) {
                this.animationRun(this.$refs.right, rotate)
            },
            animationRun (ref, number, transformOrigin = 'left center') {
                let type = number > 180;
                let router = type ? 180 : number;
                animation.transition(ref, {
                    styles: {
                        opacity: '1',
                        transform: `rotate(${180 + router}deg)`,
                        transformOrigin,
                    },
                    duration: Math.ceil(router * 2),
                    timingFunction: 'linear',
                    delay: 0
                }, () => {
                    if (type)
                        this.animationRun(this.$refs.left, number - 180, 'right center')
                })
            },
        },
    }
</script>

<style>
    .wrap{
        width: 250px;
        height: 250px;
        background-color: #fff;
    }
    .inner{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 250px;
        background-color: #ddd;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
    }
    .box{
        overflow: hidden;
        flex: 1;
        height: 250px;
    }
    .circle{
        position: absolute;
        top: 0;
        height: 250px;
        width: 250px;
        border-radius: 250px;
        background-color: #FF5454;
    }
    .circle-left{
        left: 0;
    }
    .circle-right{
        right: 0;
    }
    .left{
        transform-origin: right center;
        transform: rotate(180deg);
    }
    .right{
        transform-origin: left center;
        transform: rotate(180deg);
    }
    .con{
        flex: 1;
    }
    .mask-inner{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        align-items: center;
        justify-content: center;
    }
    .mask{
        width: 225px;
        height: 225px;
        border-radius: 225px;
        background-color: #fff;
    }
</style>
