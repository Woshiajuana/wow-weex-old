<template>
    <div class="wrap"
        :style="d_end_style">
        <div class="bar" :style="d_end_bar_style"></div>
        <text :style="d_end_txt_style">{{end_txt}}</text>
        <div class="bar" :style="d_end_bar_style"></div>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import AssignMixin                  from './../../mixins/assign.mixin'
    export default {
        mixins: [Mixin, AssignMixin],
        props: {
            end_style: { default: {} },
            end_bar_style: { default: {} },
            end_txt_style: { default: {} },
            end_txt: { default: config.end_txt },
        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
    }
</script>
<style>
    .wrap{
        flex-direction: row;
        align-items: center;
    }
    .bar{
        flex: 1;
    }
</style>
