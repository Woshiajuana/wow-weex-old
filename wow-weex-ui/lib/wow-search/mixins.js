import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_search_style: {},
        d_search_wrap_style: {},
        d_search_src_style: {},
        d_search_close_src_style: {},
        d_search_inner_style: {},
        d_search_input_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
