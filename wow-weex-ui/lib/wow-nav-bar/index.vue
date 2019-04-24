<template>
    <div class="wrap"
         @viewappear="handleEmit('viewappear')"
         @viewdisappear="handleEmit('viewdisappear')">
        <!--主体-->
        <div class="inner"
             :style="computedNavInnerStyle">
            <embed class="content"
                   v-for="(item, index) in nav_arr"
                   :key="index"
                   :style="{visibility: item.checked ? 'visible' : 'hidden'}"
                   :src="item.url"
                   type="weex">
            </embed>
        </div>
        <!--/主体-->
        <slot v-if="!nav_use_menu" name="menu"></slot>
        <!--导航条-->
        <div class="nav"
             v-if="nav_use_menu"
             :class="[nav_position]"
             :style="computedNavBarStyle">
            <div :style="navMenuStyle(item.checked)"
                 class="item"
                 v-for="(item, index) in nav_arr"
                 @click="handleSwitch(item, index)"
                 :key="index">
                <image
                    class="icon"
                    v-if="item.img_src"
                    :style="computedNavMenuIconStyle"
                    :src="item.checked ? item.img_checked_src : item.img_src"
                ></image>
                <text class="text"
                      :style="navMenuTxtStyle(item.checked)"
                >{{item.txt}}</text>
            </div>
        </div>
        <!--/导航条-->
    </div>
</template>

<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    import WeexMixin                    from './../../mixins/weex.mixin'
    export default {
        mixins: [
            Mixin,
            EmitMixin,
            WeexMixin,
        ],
        props: {
            nav_position: { default: 'bottom' },

            nav_inner_style: { default: {} },
            nav_bar_style: { default: {} },
            nav_menu_style: { default: {} },
            nav_menu_checked_style: { default: {} },

            nav_menu_icon_style: { default: {} },

            nav_menu_txt_style: { default: {} },
            nav_menu_txt_checked_style: { default: {} },

            nav_use_switch: { default: config.nav_use_switch },
            nav_arr: { default: config.nav_arr },
            nav_use_menu: { default: config.nav_use_menu },
        },
        computed: {
            computedNavInnerStyle () {
                let top = 0;
                let bottom = this.nav_menu_style.height || config.nav_menu_style.height;
                if (!this.nav_use_menu) bottom = 0;
                let {
                    isX,
                } = this.weex$;
                if (isX && this.nav_position === 'bottom')
                    bottom += 40;
                if (this.nav_position === 'top') {
                    top = bottom;
                    bottom = 0;
                }
                return Object.assign({}, config.nav_inner_style, {top, bottom}, this.nav_inner_style)
            },
            computedNavBarStyle () {
                let borderTopWidth = 1;
                let borderBottomWidth = 0;
                let paddingBottom = 0;
                let {
                    isX,
                } = this.weex$;
                if (isX && this.nav_position === 'bottom')
                    paddingBottom = 40;
                if (this.nav_position === 'top') {
                    borderTopWidth = 0;
                    borderBottomWidth = 1;
                }
                return Object.assign({}, config.nav_bar_style, { borderTopWidth, borderBottomWidth, paddingBottom }, this.nav_bar_style );
            },
        },
        created () {
            this.weexGet();
        },
        methods: {
            // 切换菜单
            handleSwitch (item, index) {
                if (!this.nav_use_switch)
                    return this.switchNav(index);
                this.$emit('switch', {
                    item,
                    index,
                    callback: () => {
                        this.switchNav(index);
                    }
                });
            },
            // 切换页面
            switchNav (index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
            },
            navMenuStyle (checked) {
                return checked
                    ? Object.assign({}, config.nav_menu_style, this.nav_menu_style, config.nav_menu_checked_style, this.nav_menu_checked_style)
                    : Object.assign({}, config.nav_menu_style, this.nav_menu_style);
            },
            navMenuTxtStyle (checked) {
                return checked
                    ? Object.assign({}, config.nav_menu_txt_style, this.nav_menu_txt_style, config.nav_menu_txt_checked_style, this.nav_menu_txt_checked_style)
                    : Object.assign({}, config.nav_menu_txt_style, this.nav_menu_txt_style);
            },
        }
    }
</script>

<style>
    .wrap{
        flex: 1;
        width: 750px;
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
        background-color: #dedede;
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
