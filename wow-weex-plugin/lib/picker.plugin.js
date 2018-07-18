
// picker 弹窗选择模块 数据选择，日期选择，时间选择

import Handle                           from '../handle'


const Picker    = weex.requireModule('picker');
const SupPicker = weex.requireModule('supPickModule');

export default {

    // 数据选择
    // pick(options, callback[options])
    // @param   options     [object]    参数
    pick (options = {}) {
        return Handle(Picker.pick, options);
    },

    // 日期选择
    // pickDate(options, callback[options])
    // @param   options     [object]    参数
    pickDate (options = {}) {
        return Handle(Picker.pickDate, options);
    },

    // 时间选择
    // pickTime(options, callback[options])
    // @param   options     [object]    参数
    pickTime (options = {}) {
        return Handle(Picker.pickTime, options);
    },

    // 功能更全的弹窗
    // @param   opt     [object]    参数
    supPick (options = {}) {
        return Handle(SupPicker.supPick, options);
    },

}
