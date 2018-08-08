import Source               from '../../utils/source.util'
export default {
    data: {
        arr_nav: [
            {
                txt: 'WoW',
                src: 'wow_home',
                img_src: Source('menu-icon-wow.png'),
                img_checked_src: Source('menu-icon-wow-checked.png'),
                checked: true,
                color: '#d6d6cf',
                checked_color: '#5cc8ff',
            },
            {
                txt: 'Demo',
                src: 'wow_demo',
                img_src: Source('menu-icon-ys.png'),
                img_checked_src: Source('menu-icon-ys-checked.png'),
                checked: false,
                color: '#d6d6cf',
                checked_color: '#5cc8ff',
            },
            {
                txt: 'Help',
                src: 'wow_help',
                img_src: Source('menu-icon-help.png'),
                img_checked_src: Source('menu-icon-help-checked.png'),
                checked: false,
                color: '#d6d6cf',
                checked_color: '#5cc8ff',
            }
        ]
    }
}
