
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    input_wrap_style: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
    },
    input_type: 'text',
    input_label_txt: '左边',
    input_label_style: {
        fontSize: 32,
        color: '#333',
    },
    input_value: '',
    input_style: {
        height: 100,
        lineHeight: 100,
        fontSize: 32,
        color: '#333',
    },
    input_placeholder: '请输入',
    input_placeholder_color: '#DEDEDE',
    input_disabled: false,
    input_use: true,
    input_use_right: true,
    input_max_length: 9999,
}, config)
