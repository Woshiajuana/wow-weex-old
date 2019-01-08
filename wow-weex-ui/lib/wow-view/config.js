/**
 * Created by Administrator on 2017/11/8.
 */
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    view_style: {
        backgroundColor: '#f8f8f8',
    },
    view_use_scroll: true,
    view_use_left_event: true,
    view_offset_accuracy: 10,

    view_use_header: true,
    view_use_compatible: true,
    view_header_style: {
        height: 90,
    },
    view_header_wrap_style: {
        backgroundColor: '#fff',
        borderColor: '#dedede',
        borderBottomWidth: 1,
    },
    view_header_left_style: {
        height: 90,
        bottom: 0,
    },
    view_header_left_src: '',
    view_header_left_src_style: {
        width: 48,
        height: 48,
        marginLeft: 25,
    },
    view_header_left_txt: '',
    view_header_left_txt_style: {
        color: '#3c3c3c',
        fontSize: 28,
        marginLeft: 25,
    },

    view_header_center_style: {
        height: 90,
    },
    view_header_center_txt: '',
    view_header_center_txt_style: {
        color: '#3c3c3c',
        fontSize: 34,
    },

    view_header_right_style: {
        height: 90,
        bottom: 0,
    },
    view_header_right_src: '',
    view_header_right_src_style: {
        width: 48,
        height: 48,
        marginRight: 25,
    },
    view_header_right_txt: '',
    view_header_right_txt_style: {
        color: '#3c3c3c',
        fontSize: 28,
        marginRight: 25,
    },
}, config)
