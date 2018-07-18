const manager = weex.requireModule('pageManagerModule');

export default {
  close: () => {
    manager.closeKeyboard();
  }
};
