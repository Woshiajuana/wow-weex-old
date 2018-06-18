<template>
    <wow-view
        view_header_center_txt="状态">
        <div class="wrap">
            <wow-null
                null_txt="资料提交成功"
                :null_src_size="[140,140]"
                :null_src="src_success">
            </wow-null>
            <wow-button button_txt="立即签约产品" button_margin_top="208"></wow-button>
        </div>
    </wow-view>
</template>
<script>
    import WowView                  from 'wow-weex/lib/wow-view'
    import WowButton                from 'wow-weex/lib/wow-button'
    import WowNull                  from 'wow-weex/lib/wow-null'
    import Source                   from 'utils/source.util'
    export default {
        data () {
            return {
                src_success: Source('market_progress_success.png')
            }
        },
        components: {
            WowView,
            WowButton,
            WowNull,
        }
    }
</script>
<style>
    .wrap{
        align-items: center;
    }
</style>
