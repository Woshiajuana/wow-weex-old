
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    nav_arr: [],
    nav_use_switch: false,
    nav_inner_style: {
        top: 0,
        bottom: 100,
    },
    nav_bar_style: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
    },
    nav_use_menu: true,
    nav_menu_style: {
        height: 100,
    },
    nav_menu_checked_style: {

    },
    nav_menu_icon_style: {
        marginBottom: 6,
        width: 44,
        height: 44,
    },
    nav_menu_txt_style: {
        fontSize: 22,
        color: '#999'
    },
    nav_menu_txt_checked_style: {
        color: '#5cc8ff'
    },
}, config)
