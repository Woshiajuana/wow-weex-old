<template>
    <wow-view
        @viewappear="handleViewAppear"
        @rightItemClick="handlePop"
        view_header_left_src=""
        :view_header_right_src="right_src"
        :view_header_right_size="[48, 48]"
        view_header_right_src_mar_right="32"
        view_header_border_width="0"
        view_background_color="#f8f8f8"
        view_header_background_image="linear-gradient(to left, #EE6833, #EE4432)">
        <div class="tab-wrap">
            <div class="tab-item"
                 @click="handleSwitch(index)"
                 v-for="(item, index) in nav_arr"
                 :key="index">
                <text class="tab-text" :class="[item.checked && 'tab-text-active']">{{item.txt}}</text>
                <div class="tab-bar" :class="[item.checked && 'tab-bar-active']"></div>
            </div>
        </div>
        <embed class="content"
               v-for="(item, index) in nav_arr"
               :key="index"
               :style="{visibility: item.checked ? 'visible' : 'hidden'}"
               :src="item.url"
               type="weex">
        </embed>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import source       from 'utils/source'
    import path         from 'modules/path'
    import dialogs      from 'modules/dialogs'
    export default {
        data () {
            return {
                right_src: source('app-main-right-icon.png'),
                nav_arr:  [{
                    txt: '付款',
                    src: 'ds_main_payment',
                    checked: false
                }, {
                    txt: '收款',
                    src: 'ds_main_gathering',
                    checked: true
                }]
            }
        },
        created() {
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
        },
        methods: {
            handleViewAppear() {},
            handlePop() {},
            handleSwitch(index) {
                this.nav_arr.forEach((item, i) => {
                    item.checked = i === index;
                });
            }
        },
        components: {
            WowView,
        }
    }
</script>
<style>
    .content{
        position: absolute;
        bottom: 0;
        left: 0;
        top: 170px;
        width: 750px;
    }
    .tab-wrap{
        height: 228px;
        background-image: linear-gradient(to left, #EE6833, #EE4432);
        padding-left: 32px;
        padding-right: 32px;
        flex-direction: row;
    }
    .tab-item{
        width: 120px;
        margin-top: 14px;
        font-size: 56px;
        height: 100px;
        color: #FFF;
        margin-right: 20px;
        align-items: center;
    }
    .tab-text{
        font-size: 36px;
        color: #FFFFFF;
        height: 80px;
        line-height: 80px;
    }
    .tab-bar{
        margin-top: 4px;
        width: 72px;
        height: 4px;
        border-radius: 2px;
    }
    .tab-text-active{
        font-size: 56px;
    }
    .tab-bar-active{
        background-color: #fff;
    }
</style>
