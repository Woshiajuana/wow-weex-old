<template>
    <div>
        <image class="logo" :src="src_logo"></image>
        <text class="version">(V0.0.1)</text>
        <text class="link">GitHub</text>
    </div>
</template>
<script>
    export default {
        props: {
            src_logo: { default: '' }
        }
    }
</script>
<style>
    .link{
        position: absolute;
        font-size: 28px;
        color: #fff;
        right: 20px;
        top: 16px;
    }
    .logo{
        width: 70px;
        height: 70px;
    }
    .version{
        font-size: 20px;
        color: #fff;
    }
</style>
