import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_button_style: {},
        d_button_disabled_style: {},
        d_button_txt_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
