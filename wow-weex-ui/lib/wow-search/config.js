
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    search_style: {
        paddingLeft: 32,
        paddingRight: 32,
    },
    search_wrap_style: {
        height: 65,
        borderRadius: 65,
        backgroundColor: '#fff',
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
    },
    search_src_style: {
        width: 30,
        height: 30,
        marginRight: 15,
    },
    search_close_src_style: {
        width: 30,
        height: 30,
        marginRight: 15,
        marginLeft: 15,
    },
    search_inner_style: {
        height: 60,
    },
    search_input_style: {
        height: 56,
        color: '#333',
        fontSize: 30,
        lineHeight: 56,
    },
    search_src: '',
    search_close_src: '',
    search_input_placeholder: '搜索',
    search_input_type: 'text',
    search_input_placeholder_color: '#dedede',
    search_use_input: true,
}, config)
