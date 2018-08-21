<template>
    <div class="wrap" @click="handleEmit('click')">
        <image
            v-if="data.is_new"
            class="image"
            :src="src_new"
        ></image>
        <text class="title">{{data.title}}</text>
        <div class="info">
            <text class="version">v{{data.version}}</text>
            <text class="time">{{data.time}}</text>
        </div>
        <text
            class="text"
            v-for="(item, index) in data.updates"
            :key="index"
        >{{index + 1}}. {{item}}</text>
    </div>
</template>
<script>
    import EmitMixin                from 'wow-weex-ui/mixins/emit.mixin'
    export default {
        mixins: [EmitMixin],
        props: {
            src_new: {default: ''},
            data: { default: {}}
        }
    }
</script>
<style>
    .wrap{
        background-color: #fff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-color: #dedede;
        border-bottom-width: 1px;
    }
    .wrap:active{
        background-color: #eee;
    }
    .image{
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
    }
    .title{
        color: #999;
        height: 50px;
        font-size: 28px;
        line-height: 50px;
    }
    .info{
        flex-direction: row;
        align-items: center;
        flex: 1;
        justify-content: space-between;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .version{
        font-size: 20px;
        color: #fff;
        padding-left: 10px;
        padding-right: 10px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        background-color: #bbb;
    }
    .time{
        font-size: 20px;
        color: #bbb;
    }
    .text{
        color: #bbb;
        font-size: 24px;
        line-height: 40px;
    }
</style>
