<template>
    <div class="step-wrap">
        <div class="step-bar"></div>
        <div class="step-item"
             v-for="(item, index) in step_arr"
             :key="index">
            <div class="step-num" :class="[item.is_current && 'step-num-active']">
                <text class="step-num-text" :class="[item.is_current && 'step-num-text-active']">{{index+1}}</text>
            </div>
            <text class="step-text" :class="[item.is_current && 'step-text-active']">{{item.text}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            step_arr: {default: []},
        },
    }
</script>
<style>
    .step-wrap{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 160px;
        padding-left: 38px;
        padding-right: 38px;
        background-color: #fff;
    }
    .step-bar{
        position: absolute;
        top: 64px;
        height: 2px;
        left: 90px;
        right: 90px;
        background-color: #029BDD;
    }
    .step-item{
        align-items: center;
    }
    .step-num{
        width: 48px;
        height: 48px;
        border-radius: 48px;
        border-width: 2px;
        border-color: #029BDD;
        justify-content: center;
        align-items: center;
        background-color: #fff;
    }
    .step-num-active{
        background-color: #029BDD;
        border-color: #029BDD;
    }
    .step-num-text{
        font-size: 24px;
        color: #029BDD;
    }
    .step-num-text-active{
        color: #fff;
    }
    .step-text{
        margin-top: 4px;
        font-size: 20px;
        color: #333;
    }
    .step-text-active{
        color: #029BDD;
    }
</style>
