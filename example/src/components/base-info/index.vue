<template>
    <div :class="[base_center && 'base-wrap']">
        <text class="base-name" :style="{fontSize: base_font_size, color: base_name_color}">{{base_title}}</text>
        <div class="base-info">
            <image class="base-user-image" :src="src_user"></image>
            <text class="base-info-text" :style="{color: base_info_color}">{{base_name}}</text>
            <image class="base-phone-image" :src="src_phone"></image>
            <text class="base-info-text" :style="{color: base_info_color}">{{base_phone}}</text>
        </div>
    </div>
</template>
<script>
    import Source                   from 'utils/source.util'
    export default {
        data () {
            return {
                src_user: Source('market_littlepeople_icon.png'),
                src_phone: Source('market_littlephone_icon.png'),
            }
        },
        props: {
            base_title: { default: '' },
            base_name: { default: '' },
            base_phone: { default: '' },
            base_center: { default: true },
            base_font_size: { default: 36},
            base_name_color: {default: '#333'},
            base_info_color: {default: '#999'}
        }
    }
</script>
<style>
    .base-wrap{
        align-items: center;
    }
    .base-name{
        height: 50px;
        line-height: 50px;
        margin-top: 24px;
    }
    .base-info{
        flex-direction: row;
        align-items: center;
        height: 40px;
        margin-top: 20px;
    }
    .base-user-image{
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    .base-info-text{
        font-size: 28px;
    }
    .base-phone-image{
        width: 32px;
        height: 32px;
        margin-left: 20px;
        margin-right: 8px;
    }
</style>
