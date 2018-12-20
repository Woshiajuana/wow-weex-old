<template>
    <div class="wrap" :style="d_count_style">
        <div class="inner btn"
             v-if="num === count_max"
             :style="d_count_inner_style"
             @click="handleClick"
        >
            <slot name="count_txt"></slot>
            <text v-if="count_txt" :style="d_count_txt_style">{{count_txt}}</text>
        </div>
        <div class="inner"
             v-if="num !== count_max"
             :style="d_count_disabled_inner_style"
        >
            <slot name="count_disabled_txt"></slot>
            <text v-if="count_disabled_txt" :style="d_count_disabled_txt_style">{{num}}{{count_disabled_txt}}</text>
        </div>
    </div>
</template>

<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    import AssignMixin                  from './../../mixins/assign.mixin'

    export default {
        mixins: [EmitMixin, Mixin, AssignMixin],
        data () {
            return {
                num: 0,
            }
        },
        props: {
            count_max: { default: config.count_max },
            count_txt: { default: config.count_txt },
            count_disabled_txt: { default: config.count_disabled_txt },
            count_style: { default: {} },
            count_txt_style: { default: {} },
            count_disabled_txt_style: { default: {} },
            count_inner_style: { default: {} },
            count_disabled_inner_style: { default: {} },
        },
        created(){
            this._wowAssign(Mixin.data(), config);
            this.num = this.count_max;
        },
        methods: {
            handleClick () {
                this.handleEmit('click', this.countDown.bind(this));
            },
            countDown () {
                if (this.num <= 0)
                    return this.num = this.count_max;
                this.num--;
                setTimeout(this.countDown.bind(this), 1000);
            },
        },
    }
</script>

<style>
    .wrap{

    }
    .inner{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        align-items: center;
        justify-content: center;
    }
    .btn:active{
        background-color: #dedede;
    }
</style>
