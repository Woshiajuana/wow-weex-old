import Source                       from 'utils/source.util'
const data = () => {
    return {
        src_logo: Source('wow-logo-fff.png'),
        src_search: Source('search-icon-bbb.png'),
        src_close: Source('search-close-icon.png'),
        src_new: Source('version-new-icon.png'),
        view_header_style: {
            backgroundColor: '#5cc8ff',
            // backgroundColor: 'red',
            borderBottomWidth: 0,
        }
    }
};

export default {
    data,
}
