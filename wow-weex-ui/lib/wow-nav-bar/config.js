
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    nav_arr: [],
    nav_inner_style: {
        top: 0,
        bottom: 100,
    },
    nav_bar_style: {
        bottom: 0,
        backgroundColor: '#fff',
    },
    nav_use_menu: true,
    nav_menu_style: {
        height: 100,
        borderColor: '#ddd',
        borderTopWidth: 1,
    },
    nav_menu_icon_style: {
        width: 44,
        height: 44,
    },
    nav_menu_txt_style: {
        fontSize: 22,
    },
}, config)
