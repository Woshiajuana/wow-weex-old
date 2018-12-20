import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_count_style: {},
        d_count_txt_style: {},
        d_count_disabled_txt_style: {},
        d_count_inner_style: {},
        d_count_disabled_inner_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
