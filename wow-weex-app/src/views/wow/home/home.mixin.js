import Source                       from 'utils/source.util'
const data = () => {
    return {
        src_logo: Source('wow-logo.png'),
        src_search: Source('search-icon-fff.png'),
        src_close: Source('search-close-icon.png'),
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
