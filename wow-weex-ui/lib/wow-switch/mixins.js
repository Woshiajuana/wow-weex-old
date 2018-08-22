import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_switch_style: {},
        d_switch_active_style: {},
        d_switch_inner_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
