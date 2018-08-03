import Source                       from 'utils/source.util'
const data = () => {
    return {
        src_logo: Source('wow-logo-fff.png'),
        src_search: Source('search-icon-fff.png'),
        src_close: Source('search-close-icon.png'),
        view_header_style: {
            backgroundColor: '#fff',
            // backgroundColor: 'red',
            borderBottomWidth: 1,
        }
    }
};

export default {
    data,
}
