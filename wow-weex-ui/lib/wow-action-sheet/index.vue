<template>
    <div class="wrap"
         @click="handleEmit('close')">
        <div class="inner"
             ref="inner"
             @click="handleEmit('null')">
            <div class="option"
                 @click="handleEmit('change', item)"
                 :class="[index === 0 && 'first-child',
                 index === action_options.length - 1 && 'last-child']"
                 v-for="(item, index) in action_options"
                 :key="index">
                <image
                    v-if="item.src"
                    class="image"
                    :src="item.src"
                ></image>
                <text class="text">{{item.text}}</text>
            </div>
            <div class="option button"
                 @click="handleEmit('close')">
                <text class="button-text">取消</text>
            </div>
        </div>
    </div>
</template>

<script>
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'

    const animation = weex.requireModule('animation');

    export default {
        mixins: [
            Mixin,
            EmitMixin,
        ],
        props: {
            action_options: {
                default: [],
            }
        },
        mounted () {
            this.animationRun();
        },
        methods: {
            animationRun () {
                animation.transition(this.$refs.inner, {
                    styles: {
                        opacity: '1',
                        transform: 'translate(0, 0, 0)',
                        transformOrigin: 'center center'
                    },
                    duration: 200,
                    timingFunction: 'ease-in',
                    delay: 0
                }, () => {})
            }
        },
    }
</script>

<style>
    .wrap{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .3);
        justify-content: flex-end;
        align-items: center;
    }
    .first-child{
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
    }
    .last-child{
        border-bottom-right-radius: 16px;
        border-bottom-left-radius: 16px;
    }
    .inner{
        transform: translate(0, 300px);
        opacity: 0;
    }
    .option{
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 710px;
        height: 100px;
        background-color: #fff;
        border-color: #dedede;
        margin-bottom: 1px;
    }
    .option:active{
        background-color: #dedede;
    }
    .image{
        width: 48px;
        height: 48px;
        margin-right: 8px;
    }
    .text{
        font-size: 32px;
        color: #333;
    }
    .button{
        margin-top: 20px;
        border-radius: 16px;
        margin-bottom: 20px;
    }
    .button-text{
        font-size: 32px;
        color: #999;
    }
</style>
