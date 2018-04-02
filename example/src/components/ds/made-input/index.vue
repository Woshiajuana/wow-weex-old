<template>
    <div class="input-wrap">
        <div class="label-unit">
            <text class="unit">￥</text>
        </div>
        <ddsecrityinput
            class="input"
            type="number"
            placeholder="输入收款金额"
            :value="made_value"
            @input="handleInput"
            cursorcolor="#B2B2B2"
            match="^([1-9]\d{0,9}|0)([.]?|(\.\d{1,2})?)$">
        </ddsecrityinput>
    </div>
</template>
<script>
    export default {
        props: {
            made_value: { default: '' },
        },
        methods: {
            handleInput() {
                this.$emit('input', this.made_value)
            }
        }
    }
</script>
<style>
    .input-wrap{
        height: 112px;
        flex-direction: row;
        align-items: center;
    }
    .input{
        flex: 1;
        height: 112px;
        font-size: 80px;
        color: #B2B2B2;
    }
    .label-unit{
        margin-right: 10px;
    }
    .unit{
        margin-top: 30px;
        font-size: 64px;
        color: #1E1D1D;
    }
</style>
