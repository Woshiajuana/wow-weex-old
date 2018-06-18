<template>
    <div class="treaty-wrap">
        <image class="treaty-image" @click="handleClick('change')" :src="treaty_checked ? src_radio_checked : src_radio_normal"></image>
        <text class="treaty-prompt" @click="handleClick('change')">我已阅读并同意</text>
        <text class="treaty-prompt treaty-text" @click="handleClick('click')">{{treaty_text}}</text>
    </div>
</template>
<script>
    import Source                   from 'utils/source.util'
    export default {
        data () {
            return {
                src_radio_normal: Source('market_radio01_normal.png'),
                src_radio_checked: Source('market_radio01_checked.png'),
            }
        },
        props: {
            treaty_checked: { default: true },
            treaty_text: { default: '《银联小微商户服务协议》' },
        },
        methods: {
            handleClick (event_name) {
                this.$emit(event_name);
            }
        }
    }
</script>
<style>
    .treaty-wrap{
        flex-direction: row;
        align-items: center;
        padding-left: 40px;
        padding-right: 40px;
        height: 120px;
    }
    .treaty-image{
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    .treaty-prompt{
        font-size: 28px;
        color: #333;
    }
    .treaty-text{
        color: #304dff;
    }
</style>
