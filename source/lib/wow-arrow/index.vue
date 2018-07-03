<template>
    <div class="arrow" :style="{transform: 'rotate(' + arrow_rotate + 'deg)', borderColor: arrow_color}"></div>
</template>
<script>
    import config       from 'config'
    export default {
        props: {
            arrow_rotate: { default: config.arrow_rotate },
            arrow_color: { default: config.arrow_color },
        }
    }
</script>
<style>
    .arrow{
        width: 20px;
        height: 20px;
        margin-right: 32px;
        border-top-width: 3px;
        border-top-style: solid;
        border-right-width: 3px;
        border-right-style: solid;
        border-color: #979797;
    }
</style>
