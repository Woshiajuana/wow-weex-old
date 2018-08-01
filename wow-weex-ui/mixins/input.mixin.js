const methods = {
    handleInput (event) {
        this.$emit('input', event.value)
    },
};

export default {
    methods,
}
