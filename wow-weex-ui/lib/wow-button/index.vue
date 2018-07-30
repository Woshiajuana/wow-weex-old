<template>
    <div class="wrap"
         @click="handleClick"
         :style="computedButtonStyle">
        <text class="text"
              :style="button_txt_style"
        >{{button_txt}}</text>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    import AssignMixin                  from './../../mixins/assign.mixin'

    export default {
        mixins: [EmitMixin, Mixin, AssignMixin],
        data () {
            return {
                flag: true
            }
        },
        computed: {
            computedButtonStyle () {
                this.d_button_style = this.button_disabled
                    ? Object.assign({}, config.button_style, this.button_style, this.button_disabled_style)
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
        },
        created(){
            this._wowAssign(Mixin.data(), config);
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
