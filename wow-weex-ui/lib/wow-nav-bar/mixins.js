import WatchUtil               from '../../utils/watch.util'

const { _generateWatch } = WatchUtil;

const data = () => {
   return {
       d_nav_inner_style: {},
       d_nav_bar_style: {},
       d_nav_menu_style: {},
       d_nav_menu_icon_style: {},
   }
};

const watch = _generateWatch(data());

export default {
    data,
    watch,
}
