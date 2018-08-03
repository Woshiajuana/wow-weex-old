
import config                       from '../../config'
import Assign                       from '../../assign'
export default Assign({
    grid_style: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    grid_item_style: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#dedede',
        borderRightWidth: 1,
    },
    grid_src_style: {
        width: 120,
        height: 120,
    },
    grid_txt_style: {
        fontSize: 24,
        color: '#333',
        marginTop: 20,
    }
}, config)
