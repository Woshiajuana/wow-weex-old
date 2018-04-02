<template>
    <div class="history-wrap">
        <text class="history-title">{{history_title}}</text>
        <div class="history-inner" v-if="history_arr.length">
            <div class="history-item"
                 v-for="(item, index) in history_arr"
                 :key="index"
                 @click="handleClick(item)">
                <text class="history-text">{{item}}</text>
            </div>
        </div>
        <div class="history-inner-null" v-if="!history_arr.length">
            <text class="history-null-txt">{{history_null_txt}}</text>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            history_null_txt: { default: '无记录' },
            history_arr: { default: [] },
            history_title: { default: '搜索历史：' },
        },
        methods: {
            handleClick(item) {
                this.$emit('click', item);
            }
        }
    }
</script>
<style>
    .history-wrap{
        flex: 1;
    }
    .history-title{
        font-size: 28px;
        color: #979797;
    }
    .history-inner{
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: -24px;
    }
    .history-item{
        width: 300px;
        height: 60px;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #E5E5E5;
        border-radius: 8px;
        margin-right: 22px;
        margin-top: 20px;
    }
    .history-text{
        font-size: 28px;
        color: #979797;
    }
    .history-inner-null{
        justify-content: center;
        align-items: center;
        flex: 1;
    }
    .history-null-txt{
        font-size: 28px;
        color: #979797;
    }
</style>
