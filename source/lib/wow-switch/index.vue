<template>
    <div class="switch-wrap"
         :class="[switch_status && 'justify-content']"
         @click="handleClick"
         :style="{ width: switch_width,
         height: switch_height,
         backgroundColor: switch_status ? switch_on_background_color: switch_off_background_color,
         paddingLeft: (+switch_height - switch_inner_size[1]) / 2,
         paddingRight: (+switch_height - switch_inner_size[1]) / 2,
         borderRadius: (+switch_height / 2)}">
        <div :style="{ width: switch_inner_size[0],
             height: switch_inner_size[1],
             backgroundColor: switch_status ? switch_inner_on_background_color: switch_inner_off_background_color,
             borderRadius: (switch_inner_size[1] / 2)}">
        </div>
    </div>
</template>
<script>
    export default{
        props: {
            switch_status: { default: false },
            switch_width: { default: 102 },
            switch_height: { default: 62 },
            switch_inner_size: { default: [56, 56] },
            switch_inner_off_background_color: { default: '#fff' },
            switch_inner_on_background_color: { default: '#fff' },
            switch_off_background_color: { default: '#bbb' },
            switch_on_background_color: { default: '#44DB5E' },
        },
        methods: {
            handleClick() {
                this.$emit('click', () => {
                    this.switch_status = !this.switch_status;
                })
            }
        }
    }
</script>
<style>
    .switch-wrap{
        align-items: center;
        flex-direction: row;
    }
    .justify-content{
        justify-content: flex-end;
    }
</style>
