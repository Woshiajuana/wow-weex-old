<template>
    <div class="wrap"
         :style="computedRadioStyle">
        <div class="item"
             @click="handleEmit('input', item)"
             :style="computedRadioItemStyle"
             v-for="(item, index) in radio_arr"
             :key="index">
            <div class="spot"
                 :style="spotStyle(radio_value === item.value)">
                <div class="spot-inner"
                     v-if="radio_value === item.value"
                     :style="computedRadioItemSpotInnerStyle"
                ></div>
            </div>
            <text class="text"
                  :style="textStyle(radio_value === item.value)"
            >{{item[radio_txt_key]}}</text>
        </div>
    </div>
</template>
<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import EmitMixin                    from './../../mixins/emit.mixin'
    export default {
        mixins: [
            Mixin,
            EmitMixin,
        ],
        props: {
            radio_arr: { default: config.radio_arr },
            radio_txt_key: { default: config.radio_txt_key },
            radio_value: { default: config.radio_value },

            radio_style: { default:{} },
            radio_item_style: { default: {} },
            radio_item_spot_style: { default: {} },
            radio_item_spot_checked_style: { default: {} },
            radio_item_spot_inner_style: { default: {} },
            radio_item_text_style: { default: {} },
            radio_item_text_checked_style: { default: {} },
        },
        methods: {
            spotStyle (type) {
                return type
                    ? Object.assign({}, config.radio_item_spot_style, this.radio_item_spot_style, config.radio_item_spot_checked_style, this.radio_item_spot_checked_style)
                    : Object.assign({}, config.radio_item_spot_style, this.radio_item_spot_style)
            },
            textStyle (type) {
                return type
                    ? Object.assign({}, config.radio_item_text_style, this.radio_item_text_style, config.radio_item_text_checked_style, this.radio_item_text_checked_style)
                    : Object.assign({}, config.radio_item_text_style, this.radio_item_text_style)
            },
        },
    }
</script>
