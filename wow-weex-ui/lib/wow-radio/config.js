
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    radio_arr: [],
    radio_txt_key: 'text',
    radio_value: '',
    radio_style: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    radio_item_style: {
        alignItems: 'center',
        flexDirection: 'row',
        marginRight: 32,
    },
    radio_item_spot_style: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    radio_item_spot_checked_style: {
        borderColor: '#5cc8ff',
    },
    radio_item_spot_inner_style: {
        width: 20,
        height: 20,
        backgroundColor: '#5cc8ff',
        borderRadius: 20,
    },
    radio_item_text_style: {
        fontSize: 28,
        color: '#999',
    },
    radio_item_text_checked_style: {
    },
}, config)
