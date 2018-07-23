<template>
    <div class="wrap" @viewappear="handleViewAppear">
        <!--主体-->
        <div class="inner"
             :style="nav_inner_style">
            <embed class="content"
                   v-for="(item, index) in nav_arr"
                   :key="index"
                   :style="{visibility: item.checked ? 'visible' : 'hidden'}"
                   :src="item.url"
                   type="weex">
            </embed>
        </div>
        <!--/主体-->
        <!--导航条-->
        <div class="nav"
             :style="nav_bar_style">
            <slot v-if="!nav_use_menu" name="menu"></slot>
            <div v-if="nav_use_menu"
                 :style="nav_menu_style"
                 class="item"
                 v-for="(item, index) in nav_arr"
                 @click="handleSwitch(item, index)"
                 :key="index">
                <image
                    class="icon"
                    v-if="item.img_src"
                    :style="nav_menu_icon_style"
                    :src="item.checked ? (item.img_checked_src || item.img_src) : item.img_src"
                ></image>
                <text class="text"
                      :style="nav_menu_txt_style"
                >{{item.txt}}</text>
            </div>
        </div>
        <!--/导航条-->
    </div>
</template>

<script>
    import config                       from './config'
    import path                         from 'plugins/path.plugin'
    export default {
        props: {
            nav_use_switch: { default: config.nav_use_switch },
            nav_arr: { default: config.nav_arr },
            nav_inner_style: { default: config.nav_inner_style },
            nav_bar_style: { default: config.nav_bar_style },
            nav_use_menu: { default: config.nav_use_menu },
            nav_menu_style: { default: config.nav_menu_style },
            nav_menu_icon_style: { default: config.nav_menu_icon_style },
            nav_menu_txt_style: { default: config.nav_menu_txt_style },
        },
        created () {
            this.fetchPageUrl();
        },
        methods: {
            /**切换菜单*/
            handleSwitch (item, index) {
                if (!this.nav_use_switch) return this.switchNav(item, index);
                this.$emit('switch', item, index, () => {
                    this.switchNav(index);
                });
            },
            // 切换页面
            switchNav (index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
            },
            handleViewAppear () {
                this.$emit('viewappear')
            },
            fetchPageUrl () {
                this.nav_arr.forEach((it) => {
                    ((item) => {
                        if(!item.src) return '';
                        path.page(item.src).then((url) => {
                            this.$set(item, 'url', url);
                        }).catch((error) => {});
                    })(it)
                })
            }
        }
    }
</script>

<style>
    .wrap{
        flex: 1;
    }
    .inner{
        position: absolute;
        width: 750px;
        left: 0;
        right: 0;
    }
    .content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .nav {
        position: absolute;
        left: 0;
        width: 750px;
        flex-direction: row;
        align-items: center;
    }
    .top {
        top: 0;
    }
    .bottom {
        bottom: 0;
    }
    .item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom-style: solid;
        border-top-style: solid;
    }
    .item:active {
        background-color: #ddd;
    }
    .text {
        justify-content: center;
        align-items: center;
    }
    .icon {
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
    }
</style>
