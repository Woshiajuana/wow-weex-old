<template>
    <div class="wrap">
        <image v-if="src_new" class="new-icon" :src="src_new"></image>
        <div class="inner">
            <text class="title">V0.0.1</text>
            <text class="text">1.修改了坡地阿斯皮大蒜捣破啊</text>
            <text class="text">2.修改了坡地阿斯</text>
            <text class="text">3.修改了坡地阿斯大三大四都看得开地爬上爬大</text>
            <text class="text">5.修改了坡</text>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            src_new: {default: ''}
        }
    }
</script>
<style>
    .wrap{
        flex: 1;
        background-color: #fff;
        border-radius: 8px;
        flex-direction: row;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-color: #dedede;
        border-width: 1px;
    }
    .wrap:active{
        background-color: #bbb;
    }
    .inner{
        height: 200px;
    }
    .new-icon{
        position: absolute;
        top: 0;
        right: 0;
        width: 60px;
        height: 60px;
    }
    .title{
        color: #999;
        height: 50px;
        font-size: 32px;
        line-height: 50px;
        margin-bottom: 30px;
    }
    .text{
        width: 450px;
        color: #bbb;
        font-size: 24px;
        line-height: 40px;
    }
</style>
