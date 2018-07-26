<template>
    <div>1</div>
</template>
<script>
    import source                       from 'utils/source.util'
    export default {
        data () {
            return {
            }
        },
        created () {
            new Promise((resolve, reject) => {
                resolve();
            }).then(() => {
                console.log('then')
            }).catch(() => {
                console.log('catch')

            }).finally(() => {

                console.log('finally')
            })
        },
        components: {
        }
    }
</script>
