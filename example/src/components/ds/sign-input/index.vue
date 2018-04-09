<template>
    <div class="container">
        <image class="icon" :src="icon"></image>
        <div :class="['line', focus && 'focus']" :style="{ width: width }">
            <ddsecrityinput
                v-if="!sipinput"
                :type="type"
                :placeholder="placeholder"
                class="input"
                :value="value"
                @input="oninput"
                @change="onchange"
                @focus="onfocus"
                @blur="onblur"
                :clearmode="clearmode"
                :random="random"
            ></ddsecrityinput>
            <sipinput
                v-if="sipinput"
                type="password"
                :placeholder="placeholder"
                class="input"
                :value="value"
                @input="oninput"
                @change="onchange"
                @focus="onfocus"
                @blur="onblur"
                :isEncrypt="false"
                keyboardType="full"
                :style="{ width: width - inputWidth }"
            ></sipinput>
            <image class="clear_icon" @click="clearValue" v-if="value.length>0 && env!=='iOS'" :src="clear_src"></image>
            <div ref="box">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    import source from 'utils/source';
    export default {
        props: {
            icon: { default: '' },
            type: { default: '' },
            placeholder: { default: '' },
            value: { default: '' },
            clearmode: { default: 'whileedit' },
            random: { default: false },
            width: { default: 600 },
            sipinput: { default: false }
        },
        data () {
            return {
                focus: false,
                env: 'iOS'
            }
        },
        created() {
            this.env = this.$getConfig().env ? this.$getConfig().env.platform : 'iOS';
        },
        computed: {
            clear_src: function () {
                return source('icon_search_clear_2x.png');
            },
        },
        methods: {
            oninput: function (e) {
                this.$emit('input', e);
            },
            onchange: function (e) {
                this.$emit('change', e);
            },
            onfocus: function (e) {
                this.focus = true;
            },
            onblur: function (e) {
                this.focus = false;
            },
            clearValue(){
                this.value = "";
            }
        }
    }
</script>
<style>
    .container {
        height: 100px;
        width: 750px;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
    }
    .icon {
        width: 48px;
        height: 48px;
        margin-right: 12px;
        margin-bottom: 4px;
    }
    .line {
        flex-direction: row;
        align-items: flex-end;
        border-bottom-width: 1px;
        border-bottom-color:  #979797;
        height: 100px;
    }
    .focus {
        border-bottom-width: 2px;
        border-bottom-color: #979797;
    }
    .input {
        font-size: 32px;
        height: 64px;
        flex: 1;
    }
    .clear_icon{
        width:48px;
        height:48px;
        margin-bottom: 7px;
    }
</style>
