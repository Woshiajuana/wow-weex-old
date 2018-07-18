const touchID = weex.requireModule('touchIDModule');
import './Promise'
export default {
  support: () => new Promise((resolve, reject) => {
    touchID.deviceSupportTouchID(e => {
      e.code === '0000' ? resolve() : reject(e);
    });
  }).handle(),

  check: () => new Promise((resolve, reject) => {
    touchID.touchIDAuth(e => {
      e.code === '0000' ? resolve() : reject(e);
    });
  }).handle(),

  open: string => new Promise((resolve, reject) => {
    touchID.setTouchIDWork(string ,e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),

  get: () => new Promise((resolve, reject) => {
    touchID.isOpenTouchID(e => {
      e.code === '0000' ? resolve(e.data) : reject(e);
    });
  }).handle(),
};
