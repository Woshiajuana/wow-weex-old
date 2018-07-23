<template>
    <div class="arrow" :style="arrow_style"></div>
</template>
<script>
    import config       from './config'
    export default {
        props: {
            arrow_style: { default: config.arrow_style },
        }
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
