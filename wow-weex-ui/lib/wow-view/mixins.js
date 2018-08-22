import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_view_style: {},
        d_view_header_style: {},
        d_view_header_left_style: {},
        d_view_header_left_src_style: {},
        d_view_header_left_txt_style: {},
        d_view_header_center_style: {},
        d_view_header_center_txt_style: {},
        d_view_header_right_style: {},
        d_view_header_right_src_style: {},
        d_view_header_right_txt_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
