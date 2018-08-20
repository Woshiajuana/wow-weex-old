
import SrcServiceMixin              from 'services/src.service.mixin'

const mixins = [SrcServiceMixin];
const obj_src = {
    src_logo: 'wow-logo-fff.png',
    src_search: 'search-icon-bbb.png',
    src_close: 'search-close-icon.png',
    src_new: 'version-new-icon.png',
};

const data = () => {
    return {
        style_search_input_style: {
            fontSize: 20,
            color: '#bbb'
        },
        style_search_wrap_style: {
            alignItem: 'center',
            justifyContent: 'center'
        },
        style_search_wrap_style1: {
            alignItem: 'center',
            justifyContent: 'center',
            paddingLeft: 10,
            paddingRight: 20
        },
        style_search_style: {
            paddingLeft: 10,
            paddingRight: 16
        },
    }
};

const created = function () {
    this.initSrc(obj_src);
};

export default {
    data,
    created,
    mixins,
}
