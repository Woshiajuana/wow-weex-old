/**
 * Created by Administrator on 2017/11/8.
 */
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    button_style: {
        width: 640,
        height: 100,
        borderRadius: '8px',
        marginLeft: 55,
        backgroundColor: '#5cc8ff',
    },
    button_disabled_style: {
        backgroundColor: '#bbb',
    },
    button_txt_style: {
        fontSize: 36,
        color: '#fff',
    },
    button_txt: '按钮',
    button_disabled: false,
    button_radius: '8px',
    button_delay: 0,
}, config)
