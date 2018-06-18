<template>
    <div class="arrow" :style="{transform: 'rotate(' + arrow_rotate + 'deg)', borderColor: arrow_color}"></div>
</template>
<script>
    export default {
        props: {
            arrow_rotate: {default: 45},
            arrow_color: {default: '#979797'}
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
