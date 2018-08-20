import Source                       from 'utils/source.util'

const data = () => {
    return {
        src$: {},
    }
};

const methods = {
    initSrc(obj) {
        for (let key in obj) {
            this.$set(this.src$, key, Source(obj[key]))
        }
    }
};

export default {
    data,
    methods,
}
