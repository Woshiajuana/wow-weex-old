<template>
    <div class="checkbox-wrap" @click="handleClick">
        <image class="checkbox-icon" v-if="checkbox_active_src" :src="checkbox_switch ? checkbox_active_src : checkbox_default_src"></image>
        <slot></slot>
    </div>
</template>
<script>
    import source from 'utils/source'
    export default{
        props: {
            checkbox_switch: { default: false },
            checkbox_active_src: { default: source('ds-checkbox-active-icon.png') },
            checkbox_default_src: { default: source('ds-checkbox-default-icon.png') }
        },
        methods: {
            handleClick() {
                this.checkbox_switch = !this.checkbox_switch;
                this.$emit('input', { value: this.checkbox_switch });
            }
        }
    }
</script>
<style>
    .checkbox-wrap{
        flex-direction: row;
        align-items: center;
    }
    .checkbox-icon{
        width: 40px;
        height: 40px;
    }
</style>
