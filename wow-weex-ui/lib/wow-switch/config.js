
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    switch_style: {
        width: 102,
        height: 62,
        backgroundColor: '#ccc',
        borderRadius: 62,
        paddingLeft: 3,
        paddingRight: 3,
        alignItems: 'center',
        flexDirection: 'row',
    },
    switch_active_style: {
        justifyContent: 'flex-end',
        backgroundColor: '#5cc8ff',
    },
    switch_inner_style: {
        width: 56,
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 56,
    },
    switch_value: false,
}, config)
