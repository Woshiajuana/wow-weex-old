
import http                   from 'plugins/http.plugin'

export default {

    // 文件上传
    uploadImage (options = {}) {
        return http({ code:'M000001' }, options, {loading: true});
    },

    // 保存商户执照信息
    submitLicenseInfo (options = {}) {
        return http({ code:'M000002' }, options, {loading: true});
    },

    // 保存商户经营信息
    submitGoodsInfo (options = {}) {
        return http({ code:'M000003' }, options, {loading: true});
    },

    // 保存商户法人信息
    submitLegalInfo (options = {}) {
        return http({ code:'M000004' }, options, {loading: true});
    },

    // 保存商户结算卡信息
    submitAccountInfo (options = {}) {
        return http({ code:'M000005' }, options, {loading: true});
    },

    // 查询商户信息
    queryMerchantInfo (options = {}) {
        return http({ code:'M000006' }, options, {loading: true});
    },

    // 商户列表信息
    fetchMerchantList (options = {}) {
        return http({ code:'M000007' }, options, {loading: true});
    },

    // 获取城市
    fetchCityList (options = {}) {
        return http('', options, {loading: true, mode: 'city'});
    }
}
