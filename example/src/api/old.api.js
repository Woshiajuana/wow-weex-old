
import http                   from 'plugins/http.plugin'

export default {

    // 列表信息
    fetchList (options = {}, loading = true) {
        return http({url : '/exchange/dict/v1/view'}, options, {loading});
    },

    // 支行列表信息
    fetchBranchBankList (options = {}, loading = true) {
        return http({url : '/exchange/dict/v1/bankview'}, options, {loading});
    },
}
