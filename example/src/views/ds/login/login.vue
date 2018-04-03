<template>
    <wov-view
        :view_header_left_src="close_src"
        view_background_color="#fff"
        view_header_border_width="0"
        @leftItemClick="handleClose"
        :view_not_use_left_default_click="true">
        <!--<title tit="登录" alt="请填写账号信息"></title>-->
        <!--<div class="ipt_box">-->
            <!--<label :icon="user_src" type="tel" placeholder="请输入手机号码" :value="account" @input="handleInput('account', $event)" clearmode="whileedit"></label>-->
            <!--<label :icon="pwd_src" type="password" placeholder="请输入密码" :value="password" @input="handleInput('password', $event)"></label>-->
        <!--</div>-->
        <!--<div>-->
            <!--<label v-if="codeImage" :icon="code_src" type="text" placeholder="请输入图形验证码" :value="checkCode" @input="handleInput('checkCode', $event)" random="true">-->
                <!--<div class="code">-->
                    <!--<image class="code-image" :src="codeImage"></image>-->
                    <!--<image class="code-icon" :src="refs_src" @click="handleRefsCode"></image>-->
                <!--</div>-->
            <!--</label>-->
        <!--</div>-->
        <!--<checkbox class="checkbox" :checked="isAgree" @change="handleInput('isAgree', $event)">-->
            <!--<text class="checkbox-txt">我已阅读并同意</text>-->
            <!--<text class="checkbox-txt clause" @click="handleService">服务条款</text>-->
        <!--</checkbox>-->
        <!--<div class="btn">-->
            <!--<wov-button @click="handleLogin" button_color="default" button_margin_top="96" :button_disabled="false" button_txt="登录"></wov-button>-->
        <!--</div>-->
        <!--<div class="note">-->
            <!--<div class="btn-container" @click="handleJump('register')">-->
                <!--<text class="note-txt">注册</text>-->
            <!--</div>-->
            <!--<div class="btn-container" @click="handleJump('forgetpwd', {mobileNo: account || ''})">-->
                <!--<text class="note-txt">忘记密码?</text>-->
            <!--</div>-->
        <!--</div>-->
    </wov-view>
</template>
<script>
    import WovButton    from 'wow-weex/lib/wow-button';
    import WovView      from 'wow-weex/lib/wow-view'
//    import dialogs from 'dd-pipe/plugins/dialogs';
//    import modal from 'dd-pipe/plugins/modal';
//    import router from 'dd-pipe/plugins/router';
//    import meta from 'dd-pipe/plugins/meta';
//    import loading from 'dd-pipe/plugins/loading';
//    import channel from 'dd-pipe/plugins/channel';
//    import auth from 'dd-pipe/auth';
//    import request from 'dd-pipe/request';
//    import regx from 'dd-pipe/regx';
//    import source from 'dd-pipe/source';
//    import record from 'async/record';
//    import service from 'async/service';
//    import jf from 'dd-pipe/jfservice';
    export default {
        components : {
            WovButton,
            WovView,
//            label: require('./components/label.vue'),
//            title: require('./components/title.vue'),
//            checkbox: require('./components/checkbox.vue')
        },
        data () {
            return {
                close_src: source('jfb_login_close_icon.png'),
                user_src: source('jfb_login_user_icon.png'),
                pwd_src: source('jfb_login_password_icon.png'),
                code_src: source('dl_2.png?v=1'),
                refs_src: source('dl_1.png'),

                password: '',
                account: '',
                checkCode: '',
                codeImage: '',
                isError: false,
                isAgree: true,
                history: [],
            }
        },
        methods: {
            /**事件-取值赋值*/
            handleInput (key, event) {
                this[key] = event.value;
            },
            /**事件-服务条款*/
            handleService () {
                service.getTipInfo().then((e) => {
                    dialogs.alert({
                        message: e.USER_CLIENT_SERVICE_PROTOCOL.tipText,
                        okTitle: '知道了'
                    });
                }).catch( (error) => {});
            },
            /**事件-刷新验证码*/
            handleRefsCode () {
                var options = {
                    method: 'POST',
                    body: {
                        mobileNo: this.account
                    },
                    https: true,
                };
                request('GetCheckCode.Req', options).then((result) => {
                    result.respCode === '0000'
                        ? this.codeImage = result.checkCode
                        : dialogs.toast({ message: result.respDesc });
                }).catch((error) => {
                    return dialogs.toast({ message: error });
                });
            },
            /**事件-关闭弹窗*/
            handleClose () {
                modal.close();
            },
            /**事件-登录*/
            handleLogin (call) {
                if (!this.account) {
                    call();
                    return dialogs.toast({ message: '请输入手机号！' });
                } else if (!regx.isPhone(this.account)) {
                    call();
                    return dialogs.toast({ message: '请输入正确的手机号！' });
                } else if (!this.password) {
                    call();
                    return dialogs.toast({ message: '请输入密码！' });
                } else if (this.isError && !this.checkCode) {
                    call();
                    return dialogs.toast({ message: '请输入验证码！' });
                } else if (!this.isAgree) {
                    call();
                    return dialogs.toast({ message: '未同意服务条款！' });
                } else {
                    jf.encryptPassword(this.password, this.account).then((pwd) => {
                        var req = {
                            mobileNo: this.account,
                            password: pwd
                        };
                        this.checkCode ? req.checkCode = this.checkCode : null; //验证码
                        var options = {
                            method: 'POST',
                            body: req,
                            https: true,
                        };
                        loading.show();
                        return request('NewUserLogin.Req', options);
                    }).then((result) => {
                        if (result.respCode === '0000') {
                            // 缓存账户以及头像信息
                            result['authScanRecognizeTimeoutCount'] = 0;
                            auth.login(result).then((success) => {
                                record.set({ mobileNo: this.account });
                                meta.refresh().finally(() => {
                                    channel.post('$$REFRESH_APP', {});
                                    modal.close();
                                });
                            }).catch((error) => {
                                dialogs.toast({ message: error });
                            });
                        } else {
                            dialogs.toast({ message: result.respDesc });
                            if (result.checkCode) {
                                this.isError = true;
                                this.codeImage = result.checkCode;
                            }
                        }
                    }).catch((error) => {
                        return dialogs.toast({ message: error });
                    }).finally(() => {
                        call();
                        loading.hide();
                    });
                }
            },
            /**事件-页面跳转*/
            handleJump (page, params = {}) {
                router.push(page, params);
            },
        },
        created () {
            record.get().then((history) => {
                this.history = history;
            }).then((history) => {
                this.account = this.history[0].mobileNo || '';
            });
        },
    }

</script>
<style>
    .ipt_box{
        margin-top: 72px;
    }
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
    .btn {
        width: 750px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .note {
        width: 750px;
        margin-top: 40px;
        flex-direction: row;
        padding-left:76px;
        padding-right:76px;
        justify-content: space-between;
    }
    .note-txt {
        color: #0076ff;
        font-size: 28px;
    }
    .checkbox {
        margin-top: 40px;
        padding-left:40px;
    }
    .checkbox-txt {
        font-size: 28px;
        color: #9f9f9f;
    }
    .clause {
        color: #0076ff;
    }
</style>
