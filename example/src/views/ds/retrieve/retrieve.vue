<template>
    <wow-view
        view_background_color="#fff"
        view_header_border_width="0">
        <sign-in-title
            sign_title="找回密码"
            sign_alt="请填写账号信息并设置新密码">
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
            :icon="name_src"
            type="text"
            placeholder="请输入真实姓名"
            :value="real_name"
            @input="handleInput('real_name', $event)">
        </sign-input>
        <sign-input
            :icon="card_src"
            type="text"
            placeholder="请输入身份证号码"
            :value="card_id"
            @input="handleInput('card_id', $event)">
        </sign-input>
        <sign-input
            :icon="pwd_src"
            type="password"
            placeholder="设置密码(至少6位)"
            :value="password"
            @input="handleInput('password', $event)">
        </sign-input>
        <wow-button
            class="button"
            button_margin_top="160"
            button_txt="确认"
            :button_disabled="!password || !account || !check_code || !real_name || !card_id"
            @click="handleSure">
        </wow-button>
        <!-- 提示 -->
        <div class="need" >
            <text class="need-text">如需帮助，请拨打客服热线</text>
            <text class="need-phone" @click="handleCall('400-782-8888')">400-782-8888</text>
        </div>
    </wow-view>
</template>
<script>
    import WowButton    from 'wow-weex/lib/wow-button'
    import WowView      from 'wow-weex/lib/wow-view'
    import WowCountDown from 'wow-weex/lib/wow-count-down'
    import SignInTitle  from 'ds/sign-in-title'
    import SignInput    from 'ds/sign-input'
    import source       from 'utils/source'
    import regular      from 'utils/regular'
    import Api          from 'api/retrieve'
    import dialogs      from 'modules/dialogs'
    import router       from 'modules/router'
    import system       from 'modules/system'
    export default {
        data () {
            return {
                user_src: source('ds-sign-user-icon.png'),
                pwd_src: source('ds-sign-pwd-icon.png'),
                code_src: source('ds-register-code-icon.png'),
                card_src: source('ds-retrieve-card-icon.png'),
                name_src: source('ds-retrieve-real-name-icon.png'),

                password: '',
                account: '',
                check_code: '',
                real_name: '',
                card_id: '',
            }
        },
        created() {
            this.account = router.getParmas(this).account || '';
        },
        methods: {
            handleSend(callback) {
                if(!this.account) return dialogs.toast({ message: '请输入手机号码' });
                if(!regular.isPhone(this.account)) return dialogs.toast({ message: '请输入正确的手机号!' });
                if (!this.real_name) return dialogs.toast({ message: '请输入姓名' });
                if (!regular.isIDCard(this.card_id)) return dialogs.toast({ message: '请输入有效的身份证号' });
                Api.sendCode(this.account, this.real_name, this.card_id).then((result) => {
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
            handleSure(callback) {
                if(!regular.isPhone(this.account)){
                    callback();
                    return dialogs.toast({ message: '请输入正确的手机号！' });
                }
                if (this.password.length < 6) {
                    callback();
                    return dialogs.toast({message:'密码至少为6位'});
                }
                if (!regular.isIDCard(this.card_id)) {
                    callback();
                    return dialogs.toast({ message: '请输入有效的身份证号' });
                }
                Api.retrieve(this.account, this.password, this.check_code, this.real_name, this.card_id).then((result) => {
                    if (result.respCode !== '0000') throw result.respDesc;
                    dialogs.toast({ message: '设置新密码成功！' });
                    return router.pop();
                }).catch((error) => {
                    dialogs.toast({ message: error });
                }).finally(() => {
                    callback();
                })
            },
            handleCall(tel_no) {
                system.callTel(tel_no);
            }
        },
        components : {
            WowButton,
            WowView,
            SignInTitle,
            SignInput,
            WowCountDown,
        },
    }

</script>
<style>
    .code {
        margin-bottom: 10px;
    }
    .margin-top-100{
        margin-top: 100px;
    }
    .button{
        margin-left: 56px;
    }
    .need {
        align-items: center;
        margin-top:40px;
    }
    .need-text {
        color: #979797;
        font-size: 28px;
    }
    .need-phone{
        font-size: 28px;
        color: #0076FF;
        margin-top: 15px;
    }
</style>
