import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_carousel_style: {},
        d_carousel_inner_style: {},
        d_carousel_src_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
