<template>
    <wow-view
        view_use_scroll="">
        <wow-search
            class="search"
            v-model="str_search"
            search_input_placeholder="Search Components or Plugins"
            slot="view-header-center"
            search_input_max_length="20"
            :search_src="src$.src_search"
            :search_close_src="src$.src_close"
        ></wow-search>
        <scroller
            v-if="str_search"
            class="result-wrap">
            <wow-input-cell
                v-for="(item, index) in computedResult"
                :key="index"
                @click="routerPush(item.key, item)"
                input_placeholder=""
                input_use=""
                :input_label_style="{color: str_search.length > 1 ? '#999' : 'red'}"
                :input_label_txt="item.text">
                <image slot="input-left" :src="item.src" class="image"></image>
                <wow-arrow slot="input-right"></wow-arrow>
            </wow-input-cell>
            <wow-end
                :end_txt="arr_result.length ? '没有了' : '未找到 ' + str_search + ' 相关结果'"
                :end_txt_style="{color: '#fff'}"
                :end_bar_style="{backgroundColor: '#fff'}"
            ></wow-end>
        </scroller>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowSearch                    from 'wow-weex-ui/lib/wow-search'
    import WowInputCell                 from '../../../../../wow-weex-ui/lib/wow-input-cell'
    import WowArrow                     from 'wow-weex-ui/lib/wow-arrow'
    import WowEnd                       from 'wow-weex-ui/lib/wow-end'
    import MetaMixin                    from 'wow-weex-plugin/mixins/meta.mixin'
    import RouterMixin                  from 'wow-weex-plugin/mixins/router.mixin'
    import Mixin                        from './search.mixin'
    export default {
        mixins: [Mixin, MetaMixin, RouterMixin],
        data () {
            return {
                str_search: '',
                arr_result: [],
                arr_total: [],
            }
        },
        computed: {
            computedResult() {
                this.arr_result = [];
                if (this.arr_total.length) {
                    this.arr_total.forEach((item) => {
                        if (item.text.toUpperCase().indexOf(this.str_search.toUpperCase()) > -1)
                            this.arr_result.push(item);
                    });
                }
                return this.arr_result;
            }
        },
        created () {
            this.metaGetData('wow_plugin').then(() => {
                this.arr_total = [...this.arr_total, ...this.meta$.arr_grid];
                return this.metaGetData('wow_component');
            }).then(() => {
                this.arr_total = [...this.arr_total, ...this.meta$.arr_grid];
                return this.metaGetData('wow_demo');
            }).then(() => {
                this.arr_total = [...this.arr_total, ...this.meta$.arr_grid];
            });
        },
        components: {
            WowView,
            WowEnd,
            WowArrow,
            WowSearch,
            WowInputCell,
        }
    }
</script>
<style>
    .search{
        flex: 1;
        margin-left: 60px;
    }
    .result-wrap{
        flex: 1;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .image{
        width: 48px;
        height: 48px;
        margin-right: 10px;
    }
</style>
