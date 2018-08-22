import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
   return {
       d_input_wrap_style: {},
       d_input_label_style: {},
       d_input_style: {},
   }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
