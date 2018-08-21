
import SrcServiceMixin              from 'services/src.service.mixin'

const mixins = [SrcServiceMixin];
const obj_src = {
    src_search: 'search-icon-bbb.png',
    src_close: 'search-close-icon.png',
};

const data = () => {
    return {

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
