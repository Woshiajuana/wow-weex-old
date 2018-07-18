<template>
    <div class="nav-bar-wrap" @viewappear="handleViewAppear">
        <!--主体-->
        <div class="nav-bar-inner"
             :style="{ top: nav_position == 'top' ? (+nav_height) - (+nav_height_offset) : 0,
             bottom: nav_position == 'top' ? 0 : (+nav_height) - (+nav_height_offset) }">
            <embed class="nav-bar-content"
                   v-for="(item, index) in nav_arr"
                   :key="index"
                   :style="{visibility: item.checked ? 'visible' : 'hidden'}"
                   :src="item.url"
                   type="weex">
            </embed>
        </div>
        <!--/主体-->
        <!--导航条-->
        <div class="nav-wrap"
             :class="[nav_position == 'top' ? 'top' : 'bottom']"
             :style="{ height: nav_height,
             backgroundColor: nav_background_color }">
            <slot v-if="!nav_use_menu" name="menu"></slot>
            <div v-if="nav_use_menu"
                 :style="{ height: nav_height,
                 borderTopWidth: item.img_src ? (nav_position == 'top' ? 0 : nav_border_width) : (nav_position == 'top' ? 0 : nav_border_width),
                 borderBottomWidth: item.img_src ? (nav_position == 'top' ? nav_border_width : 0) : (nav_position == 'top' ? nav_border_width : 0),
                 borderTopColor: item.img_src ? nav_border_color : (item.checked ? nav_checked_color : nav_border_color),
                 borderBottomColor: item.img_src ? nav_border_color : (item.checked ? nav_checked_color : nav_border_color)}"
                 class="nav-item"
                 v-for="(item, index) in nav_arr"
                 @click="switchNavHandle(item, index)"
                 :key="index">
                <image class="nav-item-img"
                       v-if="item.img_src"
                       :style="nav_item_img_style"
                       :src="item.checked ? (item.img_checked_src || item.img_src) : item.img_src">
                </image>
                <text class="nav-item-txt"
                      :style="{color: item.checked ? nav_checked_color : nav_font_color,
                      fontSize: item.img_src ? '22px' : nav_font_size }">{{item.txt}}</text>
            </div>
        </div>
        <!--/导航条-->
    </div>
</template>

<script>
    import config   from './config'
    import path     from 'plugins/path.plugin'
    import dialogs  from 'plugins/dialogs.plugin'
    export default {
        props: {
            nav_use_menu: { default: config.nav_use_menu },
            nav_arr: { default: config.nav_arr },
            nav_position: { default: config.nav_position },
            nav_height: { default: config.nav_height },
            nav_height_offset: { default: config.nav_height_offset },
            nav_background_color: { default: config.nav_background_color },
            nav_border_width: { default: config.nav_border_width },
            nav_border_color: { default: config.nav_border_color },
            nav_font_size: { default: config.nav_font_size },
            nav_font_color: { default: config.nav_font_color },
            nav_checked_color: { default: config.nav_checked_color },
            nav_item_img_style: { default: config.nav_item_img_style },
        },
        created () {
            this.fetchPageUrl();
        },
        methods: {
            /**切换菜单*/
            switchNavHandle (item, index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
                this.$emit('switch', item, index);
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
                        }).catch((error) => {
                            dialogs.toast({message: error});
                        });
                    })(it)
                })
            }
        }
    }
</script>

<style>
    .nav-bar-wrap{
        flex: 1;
    }
    .nav-bar-inner{
        position: absolute;
        width: 750px;
        left: 0;
        right: 0;
    }
    .nav-bar-content{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .nav-wrap {
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
    .nav-item {
        flex: 1;
        justify-content: center;
        align-items: center;
        border-bottom-style: solid;
        border-top-style: solid;
    }
    .nav-item:active {
        background-color: #ddd;
    }
    .nav-item-txt {
        justify-content: center;
        align-items: center;
    }
    .nav-item-img {
        justify-content: center;
        align-items: center;
        width: 44px;
        height: 44px;
    }
</style>
