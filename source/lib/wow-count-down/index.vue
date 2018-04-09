<template>
    <div class="count-wrap" :class="[count_number === count_num && 'active']">
        <text class="count-text" v-if="count_number === count_num" @click="handleClick">验证码</text>
        <text class="count-text count-number" v-if="count_number !== count_num">{{count_number}} s</text>
    </div>
</template>
<script>
    export default{
        data () {
            return {
                count_number: 0,
            }
        },
        props: {
            count_num: { default: 10 }
        },
        created () {
            this.count_number = this.count_num;
        },
        methods: {
            handleClick() {
                this.$emit('click', () => {
                    this.countDown();
                })
            },
            countDown() {
                if(this.count_number <= 0) return this.count_number = this.count_num;
                this.count_number--;
                setTimeout(this.countDown.bind(this),1000);
            }
        }
    }
</script>
<style>
    .count-wrap{
        flex: 1;
        align-items: center;
        justify-content: center;
        width: 130px;
        height: 60px;
        border-width: 1px;
        border-color: #ddd;
        border-radius: 4px;
    }
    .active{
        border-color: #0076FF;
    }
    .justify-content{
        justify-content: center;
    }
    .count-text{
        font-size: 28px;
        color: #0076FF;
    }
    .count-number{
        color: #ddd;
    }
</style>
