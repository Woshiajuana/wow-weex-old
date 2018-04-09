<template>
    <wow-view
        view_background_color="#fff"
        view_header_border_width="0">
        <sign-in-title
            sign_title="注册"
            sign_alt="请填写账号信息">
        </sign-in-title>
        <sign-input
            class="margin-top-100"
            :icon="user_src"
            type="tel"
            placeholder="请输入手机号码"
            :value="account"
            @input="handleInput('account', $event)"
            clearmode="whileedit">
        </sign-input>
        <sign-input
            :icon="code_src"
            type="tel"
            placeholder="填写验证码"
            :value="check_code"
            @input="handleInput('check_code', $event)">
            <wow-count-down class="code" @click="handleSend"></wow-count-down>
        </sign-input>
        <sign-input
            :icon="pwd_src"
            type="password"
            placeholder="设置密码(至少6位)"
            :value="password"
            @input="handleInput('password', $event)">
        </sign-input>
        <wow-check-box class="check-box" :checkbox_switch="is_agree" @input="handleInput('is_agree', $event)">
            <text class="checkbox-txt margin-left-20">我已阅读并同意</text>
            <text class="checkbox-txt clause" @click="handleService">服务条款</text>
        </wow-check-box>
        <wow-button
            class="button"
            button_margin_top="96"
            button_txt="注册"
            :button_disabled="!password || !account || !check_code || !is_agree"
            @click="handleSure">
        </wow-button>
    </wow-view>
</template>
<script>
    import WowButton    from 'wow-weex/lib/wow-button'
    import WowView      from 'wow-weex/lib/wow-view'
    import WowCheckBox  from 'wow-weex/lib/wow-checkbox'
    import WowCountDown from 'wow-weex/lib/wow-count-down'
    import SignInTitle  from 'ds/sign-in-title'
    import SignInput    from 'ds/sign-input'
    import source       from 'utils/source'
    import regular      from 'utils/regular'
    import Api          from 'api/register'
    import dialogs      from 'modules/dialogs'
    import router       from 'modules/router'
    export default {
        data () {
            return {
                user_src: source('ds-sign-user-icon.png'),
                pwd_src: source('ds-sign-pwd-icon.png'),
                code_src: source('ds-register-code-icon.png'),

                is_agree: true,
                password: '',
                account: '',
                check_code: '',
            }
        },
        methods: {
            handleSend(callback) {
                if(!this.account) return dialogs.toast({ message: '请输入手机号码' });
                if(!regular.isPhone(this.account)) return dialogs.toast({ message: '请输入正确的手机号!' });
                Api.sendCode(this.account).then((result) => {
                    if (result.respCode !== '0000') return dialogs.toast({ message: result.respDesc });
                    dialogs.toast({ message: '发送验证码成功' });
                    callback();
                }).catch((error) => {
                    dialogs.toast({ message: error });
                });
            },
            handleInput(key, event) {
                this[key] = event.value;
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
            handleSure(callback) {
                if(!regular.isPhone(this.account)){
                    callback();
                    return dialogs.toast({ message: '请输入正确的手机号！' });
                }
                if (this.password.length < 6) {
                    callback();
                    return dialogs.toast({message:'密码至少为6位'});
                }
                Api.register(this.account, this.password, this.check_code).then((result) => {
                    if (result.respCode !== '0000') throw result.respDesc;
                    dialogs.toast({ message: '注册成功！' });
                    return router.pop();
                }).catch((error) => {
                    dialogs.toast({ message: error });
                }).finally(() => {
                    callback();
                })
            },
        },
        components : {
            WowButton,
            WowView,
            SignInTitle,
            SignInput,
            WowCheckBox,
            WowCountDown,
        },
    }

</script>
<style>
    .code {
        margin-bottom: 10px;
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
</style>
