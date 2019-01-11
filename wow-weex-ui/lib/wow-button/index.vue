<template>
    <div class="wrap"
         @click="handleClick"
         :style="computedButtonStyle">
        <text class="text"
              :style="computedButtonTxtStyle"
        >{{button_txt}}</text>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'

    export default {
        mixins: [
            EmitMixin,
            Mixin,
        ],
        data () {
            return {
                flag: true
            }
        },
        computed: {
            computedButtonStyle () {
                this.d_button_style = this.button_disabled
                    ? Object.assign({}, config.button_style, config.button_disabled_style, this.button_style, this.button_disabled_style)
                    : Object.assign({}, config.button_style, this.button_style,);
                return this.d_button_style;
            }
        },
        props: {
            button_style: { default: {} },
            button_disabled_style: { default: {} },
            button_txt_style: { default: {} },
            button_txt: { default: config.button_txt },
            button_delay: { default: config.button_delay },
            button_disabled: { default: config.button_disabled },
        },
        methods: {
            handleClick () {
                (!this.button_disabled && this.flag) && this.$emit('click', ()=>{
                    setTimeout(() => {
                        this.flag = true;
                    }, +this.button_delay);
                });
                !this.button_disabled && (this.flag = false);
            }
        },
    }
</script>
<style>
    .wrap {
        align-items: center;
        justify-content: center;
        background-color: #bbb;
    }
    .wrap:active{
        background-color: #bbb;
    }
</style>
