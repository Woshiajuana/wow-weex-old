import BD_IP from './../../config/ip.config'
export default {
    PICTURE_URL: 'http://'+ BD_IP +':22580/static/images/',             // 图片服务器
    HTML_URL:'http://'+ BD_IP +':22580/static/html/',                   // 静态页面
    JSON_URL: 'http://'+ BD_IP +':22580/static/json/',                  // JSON文件地址
    API_URL: 'http://192.168.2.52:8082/exchange/openapi/v1/app',        // 接口
    OLD_API_URL: 'http://192.168.2.52:8082'                             // 老接口
}
