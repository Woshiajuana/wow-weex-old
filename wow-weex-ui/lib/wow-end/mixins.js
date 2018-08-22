import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_end_style: {},
        d_end_bar_style: {},
        d_end_txt_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
