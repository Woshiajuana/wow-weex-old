<template>
    <wow-view
        view_header_center_txt="1">
        <text>{{num}}</text>
        <text @click="handleClick">增加</text>
        <text>{{result}}</text>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex/lib/wow-view'
    export default {
        data () {
            return {
                num: 1,
                result: 'x'
            }
        },
        methods: {
            handleClick () {
                this.result = this.add();
            },
            add () {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        this.num++;
                        resolve('返回了结果');
                    },1000)
                })
            }
        },
        components: {
            WowView,
        }
    }
</script>
