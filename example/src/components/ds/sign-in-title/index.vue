<template>
    <div class="tit_box">
        <text class="login_tit_txt">{{sign_title}}</text>
        <text class="login_alt_txt">{{sign_alt}}</text>
    </div>
</template>
<script>
    export default {
        props: {
            sign_title: { default: '' },
            sign_alt: { default: '' },
        },
    }
</script>
<style>
    .tit_box{
        width: 750px;
        padding-left: 40px;
    }
    .login_tit_txt{
        font-size: 48px;
        color: #000000;
        height: 66px;
        line-height: 66px;
        margin-top: 80px;
    }
    .login_alt_txt{
        font-size: 36px;
        color: #4A4A4A;
        height:50px;
        line-height: 50px;
        margin-top:16px;
    }
</style>
