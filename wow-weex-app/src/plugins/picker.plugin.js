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
