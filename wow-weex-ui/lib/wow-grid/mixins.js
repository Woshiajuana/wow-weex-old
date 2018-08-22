import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
    return {
        d_grid_style: {},
        d_grid_src_style: {},
        d_grid_item_style: {},
        d_grid_txt_style: {},
    }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}

