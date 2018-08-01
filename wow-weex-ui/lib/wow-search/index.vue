<template>
    <div class="wrap"
         :style="d_search_style">
        <div class="wrap"
             :style="d_search_wrap_style">
            <image
                :style="d_search_src_style"
                v-if="search_src"
                :src="search_src"
            ></image>
            <div class="inner"
                 :style="d_search_inner_style">
                <input
                    v-model="search_value"
                    class="input"
                    @input="handleInput"
                    v-if="search_use_input"
                    :style="d_search_input_style"
                    :type="search_input_type"
                    :maxlength="search_input_max_length || 9999"
                    :placeholder-color="search_input_placeholder_color"
                    :placeholder="search_input_placeholder"/>
                <text
                    class="input"
                    :style="d_search_input_style"
                    v-else
                >{{search_input_placeholder}}</text>
            </div>
            <image
                @click="handleClear"
                :style="d_search_close_src_style"
                v-if="search_close_src && search_value"
                :src="search_close_src"
            ></image>
        </div>
        <solt name="search-button"></solt>
    </div>
</template>

<script>
    import config                       from './config'
    import Mixin                        from './mixins'
    import InputMixin                   from './../../mixins/input.mixin'
    import AssignMixin                  from './../../mixins/assign.mixin'

    const navigator = weex.requireModule('navigator');

    export default {
        mixins: [InputMixin, Mixin, AssignMixin],
        props: {
            search_style: { default: {} },
            search_wrap_style: { default: {} },
            search_src_style: { default: {} },
            search_close_src_style: { default: {} },
            search_inner_style: { default: {} },
            search_input_style: { default: {} },
            search_value: { default: config.search_value },
            search_use_input: { default: config.search_use_input },
            search_src: { default: config.search_src },
            search_close_src: { default: config.search_close_src },
            search_input_max_length: { default: config.search_input_max_length },
            search_input_placeholder: { default: config.search_input_placeholder },
            search_input_placeholder_color: { default: config.search_input_placeholder_color },
            search_input_type: { default: config.search_input_type },
        },
        model: {
            prop: 'search_value',
            event: 'input'
        },
        created(){
            this._wowAssign(Mixin.data(), config);
        },
        methods: {
            handleClear () {
                this.search_value = ' ';
                setTimeout(() => {
                    this.search_value = '';
                }, 200)
            }
        }
    }
</script>

<style>
    .wrap{
        flex-direction: row;
        align-items: center;
    }
    .inner{
        flex: 1;
    }
    .input{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
