<template>
    <wow-view
        view_header_left_src=""
        view_header_center_txt="DEMO"
        :view_header_style="view_header_style">
        <wow-grid
            :grid_arr="arr_grid"
        ></wow-grid>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowGrid                      from 'wow-weex-ui/lib/wow-grid'
    import Mixin                        from './demo.mixin'
    export default {
        mixins: [Mixin],
        data () {
            return {
                view_header_style: {},
                arr_grid: [
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例1'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例2'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例3'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例4'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例5'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例6'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例7'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例8'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例9'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例10'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例11'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例12'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例13'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例14'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例15'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例16'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例17'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例18'},
                    { src: 'http://www.owulia.com/static/temp/2.jpg', text: '案例19'},
                ],
            }
        },
        components: {
            WowView,
            WowGrid,
        }
    }
</script>
<style>


</style>
