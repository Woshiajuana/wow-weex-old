<template>
    <wow-view
        :view_header_left_src="close_src"
        view_background_color="#fff"
        view_header_border_width="0"
        @leftItemClick="handleClose"
        :view_not_use_left_default_click="true">
        <sign-in-title
            sign_title="登录"
            sign_alt="请填写账号信息">
        </sign-in-title>
        <sign-input
            class="margin-top-100"
            :icon="user_src" type="tel"
            placeholder="请输入手机号码"
            :value="account"
            @input="handleInput('account', $event)"
            clearmode="whileedit">
        </sign-input>
        <sign-input
            :icon="pwd_src"
            type="password"
            placeholder="请输入密码"
            :value="password"
            @input="handleInput('password', $event)">
        </sign-input>
        <div>
            <sign-input
                v-if="code_image_src && account"
                :icon="code_src"
                type="text"
                placeholder="请输入图形验证码"
                :value="check_code"
                @input="handleInput('check_code', $event)"
                random="true">
                <div class="code">
                    <image class="code-image" :src="code_image_src"></image>
                    <image class="code-icon" :src="refs_src" @click="handleRefsCode"></image>
                </div>
            </sign-input>
        </div>
        <wow-check-box class="check-box" :checkbox_switch="is_agree" @input="handleInput('is_agree', $event)">
            <text class="checkbox-txt margin-left-20">我已阅读并同意</text>
            <text class="checkbox-txt clause" @click="handleService">服务条款</text>
        </wow-check-box>
        <wow-button
            class="button"
            button_margin_top="96"
            button_txt="登录"
            :button_disabled="!password || !account || (code_image_src && !check_code) || !is_agree"
            @click="handleSure">
        </wow-button>
        <div class="user-link">
            <text class="note-txt" @click="handleJump('ds_register')">注册</text>
            <text class="note-txt" @click="handleJump('ds_retrieve', {account: account})">忘记密码?</text>
        </div>
    </wow-view>
</template>
<script>
    import WowButton    from 'wow-weex/lib/wow-button'
    import WowView      from 'wow-weex/lib/wow-view'
    import WowCheckBox  from 'wow-weex/lib/wow-checkbox'
    import SignInTitle  from 'ds/sign-in-title'
    import SignInput    from 'ds/sign-input'
    import source       from 'utils/source'
    import regular      from 'utils/regular'
    import Api          from 'api/login'
    import modal        from 'modules/modal'
    import dialogs      from 'modules/dialogs'
    import router       from 'modules/router'
    import meta         from 'modules/meta'
    import channel      from 'modules/channel'
    import store        from 'modules/store'
    import storage      from 'modules/storage'
    import auth         from 'service/auth'
    const USER_ACCOUNT_KEY = 'USER_ACCOUNT_KEY';
    export default {
        data () {
            return {
                close_src: source('ds-sign-close-icon.png'),
                user_src: source('ds-sign-user-icon.png'),
                pwd_src: source('ds-sign-pwd-icon.png'),
                code_src: source('ds-sign-code-icon.png'),
                refs_src: source('ds-sign-refs-icon.png'),
                code_image_src: '',

                is_agree: true,
                password: '',
                account: '',
                check_code: '',
            }
        },
        created () {
            this.getHistoryAccount();
        },
        methods: {
            getHistoryAccount() {
                storage.get(USER_ACCOUNT_KEY).then((result) => {
                    this.account = result;
                }).catch(() => {
                    this.account = '';
                })
            },
            setHistoryAccount() {
                storage.set(USER_ACCOUNT_KEY, this.account);
            },
            handleInput(key, event) {
                this[key] = event.value;
            },
            handleClose() {
                modal.close();
            },
            handleService() {
                Api.getTip().then((result) => {
                    dialogs.alert({
                        message: result.USER_CLIENT_SERVICE_PROTOCOL.tipText,
                        okTitle: '知道了'
                    });
                }).catch((error) => {
                    dialogs.toast({ message: error });
                })
            },
            handleRefsCode(){
                Api.refreshCode(this.account).then((result) => {
                    result.respCode === '0000' ? this.code_image_src = result.checkCode : dialogs.toast({ message: result.respDesc });
                }).catch(() => {
                    dialogs.toast({ message: error });
                })
            },
            handleSure(callback) {
                if(!regular.isPhone(this.account)){
                    callback();
                    return dialogs.toast({ message: '请输入正确的手机号！' });
                }
                Api.login(this.account, this.password, this.check_code).then((result) => {
                    if(result.respCode !== '0000'){
                        this.code_image_src = result.checkCode || '';
                        throw result.respDesc;
                    }
                    result['authScanRecognizeTimeoutCount'] = 0;
                    return auth.login(result)
                }).then(() => {
                    this.setHistoryAccount();
                    return meta.refresh();
                }).then(() => {
                    channel.post('$$REFRESH_APP', {});
                    router.root();
                    modal.close();
                }).catch((error) => {
                    dialogs.toast({ message: error });
                }).finally(() => {
                    callback();
                })
            },
            handleJump (page, params = {}) {
                router.push(page, params);
            },
        },
        components : {
            WowButton,
            WowView,
            SignInTitle,
            SignInput,
            WowCheckBox,
        },
    }

</script>
<style>
    .code {
        flex-direction: row;
        align-items: center;
    }
    .code-image {
        width: 168px;
        height: 54px;
        margin-right: 20px;
        margin-bottom: 5px;
    }
    .code-icon {
        width: 30px;
        height: 30px;
    }
    .check-box{
        margin-top: 40px;
        padding-right: 40px;
        padding-left: 48px;
    }
    .margin-top-100{
        margin-top: 100px;
    }
    .checkbox-txt {
        font-size: 28px;
        color: #9f9f9f;
    }
    .clause {
        color: #0076ff;
        margin-left: 10px;
    }
    .margin-left-20{
        margin-left: 20px;
    }
    .button{
        margin-left: 56px;
    }
    .user-link{
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
        padding-left: 56px;
        padding-right: 56px;
    }
    .note-txt{
        font-size: 28px;
        color: #0076FF;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
