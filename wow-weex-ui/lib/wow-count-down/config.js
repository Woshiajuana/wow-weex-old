/**
 * Created by Administrator on 2017/11/8.
 */

import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    count_max: 60,
    count_txt: '获取验证码',
    count_disabled_before_txt: '已发送',
    count_disabled_after_txt: 's',
    count_style: {
        width: 150,
        height: 60,
    },
    count_txt_style: {
        color: '#5cc8ff',
        fontSize: 28,
    },
    count_disabled_txt_style: {
        color: '#ddd',
        fontSize: 28,
    },
    count_inner_style: {

    },
    count_disabled_inner_style: {

    },
}, config)
