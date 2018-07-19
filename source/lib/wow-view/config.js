/**
 * Created by Administrator on 2017/11/8.
 */
import source from 'utils/source.util'
import config from '../../dist/config'
export default Object.assign({

    view_padding_top: 0,
    /**是否启用scroller*/
    view_use_scroll: true,

    /**是否不启用默认点击事件*/
    view_not_use_left_default_click: false,

    /**头部*/
    view_use_header: true,
    view_header_height: 88,

    view_header_border_width: 1,
    view_header_border_color: '#f2f2f2',

    /**主体背景颜色*/
    view_background_color: '#f8f8f8',

    /**头部背景色*/
    view_header_background_color: '#fff',
    view_header_background_image: '',

    /**头部左边图片样式定义*/
    view_header_left_src: source('view_return_icon.png'),
    view_header_left_src_size: [48, 48],
    view_header_left_src_mar_left: 25,
    view_header_left_src_mar_right: 0,
    view_header_left_src_pad_left: 0,
    view_header_left_src_pad_right: 0,

    /**头部左边文字样式定义*/
    view_header_left_txt: '',
    view_header_left_color: '#3c3c3c',
    view_header_left_size: 24,
    view_header_left_txt_mar_left: 0,
    view_header_left_txt_mar_right: 0,

    /**头部中间图片样式样式定义*/
    view_header_center_src: '',
    view_header_center_src_size: [48,48],
    view_header_center_src_mar_left: 0,
    view_header_center_src_mar_right: 0,
    view_header_center_src_pad_left: 0,
    view_header_center_src_pad_right: 0,

    /**头部中间文字样式定义*/
    view_header_center_txt: '',
    view_header_center_size: 34,
    view_header_center_color: '#3c3c3c',

    /**头部右边图片样式定义*/
    view_header_right_src: '',
    view_header_right_src_size: [48, 48],
    view_header_right_src_mar_left: 0,
    view_header_right_src_mar_right: 32,
    view_header_right_src_pad_left: 0,
    view_header_right_src_pad_right: 0,

    /**头部右边文字样式定义*/
    view_header_right_txt: '',
    view_header_right_size: 30,
    view_header_right_color: '#3c3c3c',
    view_header_right_txt_mar_left: 0,
    view_header_right_txt_mar_right: 25,

}, config)
