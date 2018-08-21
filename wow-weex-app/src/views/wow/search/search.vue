<template>
    <wow-view>
        <wow-search
            class="search"
            search_input_placeholder="Search Components or Plugins"
            slot="view-header-center"
            :search_src="src$.src_search"
            :search_close_src="src$.src_close"
        ></wow-search>
    </wow-view>
</template>
<script>
    import WowView                      from 'wow-weex-ui/lib/wow-view'
    import WowSearch                    from '../../../../../wow-weex-ui/lib/wow-search'
    import Mixin                        from './search.mixin'
    export default {
        mixins: [Mixin],
        components: {
            WowView,
            WowSearch,
        }
    }
</script>
<style>
    .search{
        flex: 1;
        margin-left: 60px;
    }
</style>
