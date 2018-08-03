<template>
    <div :style="computedStyle"
         @click="handleClick">
        <div :style="d_switch_inner_style"></div>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import AssignMixin                  from './../../mixins/assign.mixin'
    export default {
        mixins: [Mixin, AssignMixin],
        props: {
            switch_value: { default: config.switch_value },
            switch_style: { default: {} },
            switch_inner_style: { default: {} },
        },
        computed: {
            computedStyle () {
                return this.switch_value
                    ? Object.assign({}, this.d_switch_style, this.d_switch_active_style)
                    : this.d_switch_style
            }
        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
        methods: {
            handleClick() {
                this.$emit('click', (type) => {
                    this.switch_value = !!type || !this.switch_value;
                })
            }
        },
    }
</script>
