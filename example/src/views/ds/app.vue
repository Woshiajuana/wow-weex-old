<template>
    <wow-nav-bar :nav_arr="nav_arr" :nav_use_menu="false" nav_height="136" @viewappear="handleViewAppear">
        <div class="menu-wrap" slot="menu">
            <image class="menu-bg" :src="menu_bg_src"></image>
            <div class="menu-inner">
                <div class="menu-item"
                     :class="[index == 1 && 'menu-main-item']"
                     v-for="(item, index) in nav_arr"
                     :key="index"
                     @click="handleSwitch(index)">
                    <image class="menu-item-icon"
                           :class="[index == 1 && 'menu-main-item-icon']"
                           :src="item.checked ? item.img_checked_src : item.img_src"></image>
                    <text v-if="item.txt" class="menu-item-txt">{{item.txt}}</text>
                </div>
            </div>
        </div>
    </wow-nav-bar>
</template>
<script>
    import source       from 'utils/source'
    import path         from 'modules/path'
    import WowNavBar    from 'wow-weex/lib/wow-navbar'
    export default {
        data () {
            return {
                nav_arr:  [{
                    txt: '商城',
                    src: 'ds_mall',
                    img_src: source('app-menu-mall-icon.png'),
                    img_checked_src: source('app-menu-mall-icon.png'),
                    checked: true
                },
                {
                    src: 'ds_main',
                    img_src: source('app-menu-main-icon.png'),
                    img_checked_src: source('app-menu-main-icon.png'),
                    checked: false
                },
                {
                    txt: '我的',
                    src: 'ds_mine',
                    img_src: source('app-menu-mine-icon.png'),
                    img_checked_src: source('app-menu-mine-active-icon.png'),
                    checked: false
                }],
                menu_bg_src: 'data:image/png;base64,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'
            }
        },
        methods: {
            /**事件-全局刷新*/
            handleViewAppear () {

            },
            /**事件-导航条切换*/
            handleSwitch (index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
            },
        },
        components: {
            WowNavBar,
        },
        /**销毁 【清空相关内容】*/
        destroyed () {

        }
    }
</script>
<style>
    .menu-wrap{
        height: 136px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        align-items: center;
        flex-direction: row;
    }
    .menu-inner{
        flex: 1;
        height: 136px;
        flex-direction: row;
    }
    .menu-item{
        flex: 1;
        margin-top: 36px;
        justify-content: center;
        align-items: center;
    }
    .menu-item-icon{
        width: 48px;
        height: 48px;
    }
    .menu-main-item{
        margin-top: 0;
    }
    .menu-main-item-icon{
        width: 104px;
        height: 104px;
    }
    .menu-item-txt{
        font-size: 20px;
        color: #4A4A4A;
        margin-top: 4px;
    }
    .menu-bg{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
</style>
