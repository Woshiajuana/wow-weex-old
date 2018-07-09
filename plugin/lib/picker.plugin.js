
// picker 弹窗选择模块 数据选择，日期选择，时间选择

import Handle                           from '../handle'


const Picker    = weex.requireModule('picker');
const SupPicker = weex.requireModule('supPickModule');

export default {

    // 数据选择
    // pick(options, callback[options])
    // @param   opt     [object]    参数
    pick (opt = {}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(Picker.pick, options);
    },

    // 日期选择
    // pickDate(options, callback[options])
    // @param   opt     [object]    参数
    pickDate (opt = {}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(Picker.pickDate, options);
    },

    // 时间选择
    // pickTime(options, callback[options])
    // @param   opt     [object]    参数
    pickTime (opt = {}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(Picker.pickTime, options);
    },

    // 功能更全的弹窗
    // @param   opt     [object]    参数
    supPick (opt = {}) {
        let main = Handle.checkKey();
        if (main.msg) return Handle.error(main);
        let options = { main, ...opt };
        return Handle(SupPicker.supPick, options);
    },

}

const picker = weex.requireModule('picker');
const supPicker = weex.requireModule('jsonPickModule');
import './Promise'
export default {
    pick: options => new Promise((resolve, reject) => {
        picker.pick(options, e => {
            e.result === 'success' ? resolve(e.data) : null;
        });
    }).handle(),

    picks: options => new Promise((resolve, reject) => {
        supPicker.show(options, e => {
            e.code === '0000' ? resolve(e.data) : reject(e);
        });
    }).handle(),
};
