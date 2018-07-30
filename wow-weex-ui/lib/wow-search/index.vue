<template>
    <div class="wrap">
        <image class="search-image" :src="src_search"></image>
        <text class="text">搜索你想要的组件</text>
        <image class="close" :src="src_close"></image>
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

        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
        methods: {
            handleLeft (event) {
                this.view_use_left_event ? navigator.pop() : this.$emit('left',event);
            },
        }
    }
</script>

<style>
    .input-wrap{
        background-color: rgba(255,255,255,0.3);
        height: 60px;
        flex: 1;
        flex-direction: row;
        align-items: center;
        padding-left: 15px;
        padding-right: 15px;
        border-radius: 60px;
    }
    .search-image{
        width: 30px;
        height: 30px;
    }
    .text{
        margin-left: 8px;
        font-size: 24px;
        color: #fff;
    }
</style>
