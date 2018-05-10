<template>
    <list class="scroll">
        <refresh class="refresh" v-if="scroll_use_refresh" :display="refresh_status" @refresh="handleRefresh">
            <loading-indicator class="indicator"></loading-indicator>
            <text class="text" v-if="refresh_status === 'hide'"> 松开刷新 </text>
        </refresh>
        <slot></slot>
        <loading class="loading" v-if="scroll_use_loading" :display="loading_status" @loading="handleLoading">
            <loading-indicator class="indicator"></loading-indicator>
            <text class="text" v-if="(loading_status === 'hide' && loading_more === true)"> 加载中... </text>
        </loading>
    </list>
</template>
<script>
    import config       from './config'
    export default{
        data () {
            return {
                refresh_status: 'hide',
                loading_status: 'hide',
                loading_more: true
            }
        },
        props: {
            scroll_delay: { default: config.scroll_delay },
            scroll_use_refresh: { default: config.scroll_delay },
            scroll_use_loading: { default: config.scroll_delay },
        },
        methods: {
            handleRefresh () {
                this.refresh_status = 'show';
                this.$emit('refresh', () => {
                    setTimeout(() => {
                        this.done();
                    }, this.scroll_delay)
                });
            },
            handleLoading () {
                this.loading_status = 'show';
                this.$emit('loading', () => {
                    setTimeout(() => {
                        this.done();
                    }, this.scroll_delay)
                });
            },
            done () {
                this.refresh_status = 'hide';
                this.loading_status = 'hide';
            },
            disabled () {
                this.loading_more = false;
            },
            reset () {
                this.loading_more = true;
                this.done();
            }
        }
    }
</script>
<style>
    .loading,
    .refresh {
        width: 750px;
        height: 100px;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }
    .indicator {
        height: 60px;
        width: 60px;
        color: #889967;
    }
    .text{
        font-size: 28px;
        color: #666;
    }
</style>
