<template>
    <div class="arrow" :style="d_arrow_style"></div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import AssignMixin                  from './../../mixins/assign.mixin'
    export default {
        mixins: [Mixin, AssignMixin],
        props: {
            arrow_style: { default: {} },
        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
    }
</script>
<style>
    .arrow{
        border-top-width: 3px;
        border-top-style: solid;
        border-right-width: 3px;
        border-right-style: solid;
    }
</style>
