<template>
    <wow-view
        view_header_border_width="0"
        view_header_left_src_mar_left="40"
        :view_header_left_src_size="[54,54]"
        view_header_left_src_style="view-extend"
        :view_not_use_left_default_click="true"
        :view_header_right_src="right_src"
        :view_header_left_src="user_avatar_src || avatar_default_src"
        view_header_background_image="linear-gradient(to left, #EE6833, #EE4432)">
        <div class="user-wrap" >
            <div class="user-left" @click="handleLogin">
                <div class="user-prompt">
                    <text class="user-top-txt">{{auth ? '待结营业收入(元)' : '请登录帐号' }}</text>
                    <image class="user-top-icon" @click="is_on_off = !is_on_off" :src="is_on_off ? eye_on_src : eye_off_src" v-if="auth"></image>
                </div>
                <div class="user-amount">
                    <text class="user-amount-txt">{{amountComputed}}</text>
                </div>
            </div>
            <div class="user-right">
                <image class="user-right-icon" :src="auth ? user_after_src : user_src"></image>
                <text class="user-txt" v-if="!auth" @click="handleLogin">登录帐号</text>
                <text class="user-txt" v-if="auth">营业余额</text>
            </div>
        </div>
        <div class="bank-wrap border-bottom">
            <div class="bank-title">
                <text class="bank-title-txt">我的提款帐号</text>
                <text class="bank-link" @click="handleWithdrawalsCard('drawing_account_manage')">提款帐号管理</text>
            </div>
            <div class="bank-inner">
                <scroller scroll-direction="horizontal" class="bank-after">
                    <div class="bank-item" v-if="!card_arr || !card_arr.length">
                        <image class="bank-item-logo" :src="bank_default_src"></image>
                        <text class="bank-item-name">请添加绑定提款卡</text>
                    </div>
                    <div class="bank-item" v-if="card_arr.length"  v-for="(item, index) in card_arr" :key="index">
                        <image class="bank-item-logo" :src="item.bankId | cardLogoFilter"></image>
                        <text class="bank-item-name">{{item.bankName | cardNameFilter}}</text>
                        <text class="bank-item-default" v-if="item.isMainCard == 1">默认提款账户</text>
                    </div>
                    <div v-if="card_arr.length <= 1 || !card_arr.length" class="bank-add" @click="handleWithdrawalsCard('drawing_account_add')">
                        <image class="bank-add-icon" :src="bank_add_src"></image>
                        <text class="bank-add-txt">添加</text>
                    </div>
                </scroller>
            </div>
            <div class="bank-default" :class="[!card && 'bank-default-center']">
                <image class="bank-default-icon" v-if="card" :src="card.bankId | cardLogoFilter"></image>
                <text class="bank-default-txt" v-if="card">{{card.bankName | cardNameFilter}} {{returnCardNo(card.accountNo)}}</text>
                <text class="bank-default-txt" v-if="!card">提款卡未绑定</text>
            </div>
        </div>
    </wow-view>
</template>
<script>
    import WowView      from 'wow-weex/lib/wow-view'
    import source       from 'utils/source'
    export default {
        data () {
            return{
                menu: '',
                auth: '',
                amount: '0.00',
                balance_info: '',
                card_arr: '',
                card: '',
                user_avatar_src: '',
                right_src: source('app-mine-right-msg.png'),
                avatar_default_src: source('app-mine-default-user-head.png'),
                is_on_off: true,
                eye_on_src: source('ds-mine-eye-on-icon.png'),
                eye_off_src: source('ds-mine-eye-off-icon.png'),
                user_src: source('ds-mine-user-icon.png'),
                user_after_src: source('ds-mine-after-icon.png'),
            }
        },
        computed: {
            amountComputed () {
                if (!this.auth) return '未登录';
                return this.is_on_off ? this.amount : '******';
            }
        },
        filters: {
            cardIdFilter (value) {
                return value ?  value.substr(0, 6) + '****' + value.substr(value.length - 4, 4) : '';
            },
            cardLogoFilter (value) {
                return value ? source('bank_' + value + '.png') : '';
            },
            cardNameFilter (value) {
                return value ? value.substr(0, value.indexOf('银行') + 2) : ''
            }
        },
        components: {
            WowView
        }
    }
</script>
<style>
    .user-wrap{
        width: 750px;
        height: 228px;
        background-image: linear-gradient(to left, #EE6833, #EE4432);
        flex-direction: row;
        align-items: center;
        padding-left: 44px;
    }
    .user-left{
        flex: 1;
    }
    .user-right{
        background-color: #f1805b;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        width: 200px;
        height: 60px;
        align-items: center;
        flex-direction: row;
        padding-left: 20px;
    }
    .user-right-icon{
        width: 28px;
        height: 28px;
        border-radius: 28px;
        margin-right: 20px;
    }
    .user-top-txt,
    .user-txt{
        font-size: 28px;
        color: #fff;
    }
    .user-prompt{
        height: 40px;
        flex-direction: row;
        align-items: center;
    }
    .user-top-icon{
        width: 48px;
        height: 48px;
        margin-left: 40px;
    }
    .user-amount{
        justify-content: center;
        height: 100px;
    }
    .user-amount-txt{
        font-size: 72px;
        color: #fff;
    }
    .bank-wrap{
        background-color: #fff;
    }
    .border-bottom{
        border-bottom-width: 2px;
        border-bottom-color: #f2f2f2;
    }
    .border-top{
        border-top-width: 2px;
        border-top-color: #f2f2f2;
    }
    .border-right{
        border-right-width: 2px;
        border-right-color: #f2f2f2;
    }
    .bank-title{
        flex-direction: row;
        padding-left: 32px;
        padding-right: 24px;
        height: 106px;
        align-items: center;
    }
    .bank-title-txt{
        font-size: 36px;
        color: #4A4A4A;
        flex: 1;
    }
    .bank-link{
        font-size: 28px;
        color: #0076FF;
    }
    .bank-inner{
        height: 152px;
        width: 750px;
        flex-direction: row;
        background-image:linear-gradient(to bottom, #FFFFFF, #ececec)
    }
    .bank-before,
    .bank-after{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        flex-direction: row;
        width: 750px;
        padding-right: 20px;
    }
    .bank-item{
        background-image:linear-gradient(to bottom, #F5F5F5, #FDFDFD);
        width: 572px;
        margin-left: 20px;
        flex-direction: row;
        height: 152px;
        align-items: center;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .bank-item-logo{
        width: 64px;
        height: 64px;
        margin-left: 32px;
    }
    .bank-item-name{
        margin-left: 28px;
        font-size: 28px;
        color: #4A4A4A;
        flex: 1;
    }
    .bank-add{
        width: 110px;
        height: 152px;
        background-color: #f8f8f8;
        margin-left: 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        justify-content: center;
        align-items: center;
    }
    .bank-add-icon{
        margin-top: 20px;
        margin-bottom: 8px;
        width: 40px;
        height: 40px;
    }
    .bank-add-txt{
        font-size: 28px;
        color: #9B9B9B;
    }
    .bank-item-default{
        margin-right: 18px;
        font-size: 28px;
        color: #0076FF;
    }
    .bank-default{
        height: 92px;
        width: 750px;
        flex-direction: row;
        align-items: center;
    }
    .bank-default-center{
        justify-content: center;
    }
    .bank-default-icon{
        margin-left: 34px;
        width: 40px;
        height: 40px;
        margin-right: 24px;
    }
    .bank-default-txt{
        font-size: 28px;
        color: #4A4A4A;
    }
    .entry-wrap{
        margin-top: 20px;
        width: 750px;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
</style>
