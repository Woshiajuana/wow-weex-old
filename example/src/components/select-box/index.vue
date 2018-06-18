<template>
    <div class="select-wrap"
         @click="handleClick"
         :style="{marginLeft: select_mar_left}">
        <div class="select-inner"
             :style="{width: select_size[0],
             height: select_size[1]}">
            <div class="select"
                 v-if="select_value"
                 :style="{width: select_inner_size[0],
                 height: select_inner_size[1]}">
            </div>
        </div>
        <text class="select-text">{{select_text}}</text>
    </div>
</template>
<script>
    export default {
        props: {
            select_text: {default: ''},
            select_value: {default: false},
            select_size: {default: [32, 32]},
            select_inner_size: {default: [20, 20]},
            select_mar_left: {default: 280}
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }
</script>
<style>
    .select-wrap{
        background-color: #fff;
        flex-direction: row;
        align-items: center;
    }
    .select-inner{
        border-width: 2px;
        border-color: #029BDD;
        justify-content: center;
        align-items: center;
    }
    .select{
        background-color: #029BDD;
    }
    .select-text{
        font-size: 32px;
        color: #029BDD;
        margin-left: 8px;
    }
</style>
