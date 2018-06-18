<template>
    <div class="image-wrap">
        <div class="image-item"
             @click="handleClick(item, key)"
             v-for="(item, key) in image_arr"
             :key="key">
            <div class="image-box">
                <image class="image"
                       :style="{width: image_size[0],
                       height: image_size[1]}"
                       :src="item.value || handleSrc(item)"
                       autoBitmapRecycle="false">
                </image>
            </div>
            <text class="text">{{item.text}}</text>
        </div>
    </div>
</template>
<script>
    import Source                   from 'utils/source.util'
    import Camera                   from 'plugins/camera.plugin'
    import Dialogs                  from 'plugins/dialogs.plugin'
    import Auth                     from 'plugins/auth.plugin'
    import Api                      from 'api/merchant.api'
    export default {
        data () {
            return {
                image: ''
            }
        },
        props:{
            image_num: {default: 3},
            image_size: {default: [196, 196]},
            image_arr: {default: []},
            image_arr_id: {default: []},
            image_disabled: {default: false,}
        },
        methods: {
            // 图片过滤
            handleSrc (item) {
                switch (item.text) {
                    case '身份证正面照':
                        item.type = '06';
                        return Source('market_sfz_f_photo.png');
                    case '身份证背面照':
                        item.type = '07';
                        return Source('market_sfz_b_photo.png');
                    case '手持身份证+银行卡照':
                        item.type = '05';
                        return Source('market_sfz_sc_photo.png');
                    case '银行卡正面照':
                        item.type = '08';
                        return Source('market_yhk_f_photo.png');
                    case '开户许可证照':
                        item.type = '09';
                        return Source('market_khxk_photo.png');
                    case '营业执照':
                        item.type = '01';
                        return Source('market_yyzz_photo.png');
                    case '门店照':
                        item.type = '02';
                        return Source('market_mdz_photo.png');
                    case '收银台照':
                        item.type = '03';
                        return Source('market_syt_photo.png');
                    case '店内照':
                        item.type = '04';
                        return Source('market_dnz_photo.png');
                }
            },

            // 调用相机
            handleClick (item, key) {
                if (this.image_disabled) return null;
                Auth.getToken().then((info) => {
                    Camera.pick().then((result) => {
                        return this.uploadImage(item.type, info.userNo, 'png', result.base64);
                    }).then((data) => {
                        let { result, success, errMsg} = data;
                        if (!success) throw errMsg;
                        let { filePath, fileid } = result;
                        item.value = filePath;
                        this.image_arr_id[key.replace('Url', '')].value = fileid;
                    }).catch((error) => {
                        Dialogs.toast({message: error});
                    })
                }).catch((error) => {
                    Dialogs.toast({message: error});
                    Auth.showLogin();
                });
            },

            // 上传图片
            uploadImage (fileType, userNo, fileName, base64FileContent) {
                let options = { fileType, userNo, fileName, base64FileContent };
                return Api.uploadImage(options);
            }
        }
    }
</script>
<style>
    .image-wrap{
        padding-left: 40px;
        padding-right: 40px;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 32px;
    }
    .image-item{
        margin-bottom: 20px;
        align-items: center;
    }
    .image-box{
        background-color: #029BDD;
    }
    .text{
        margin-top: 20px;
        font-size: 24px;
        color: #333;
    }
</style>
