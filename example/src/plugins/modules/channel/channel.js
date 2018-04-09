const channel = weex.requireModule('channel');

export default {
  add: ($event, fn) => channel.addEventListener($event, fn),

  remove: $event => channel.removeEventListener($event),

  post: ($event, input) => channel.postMessage($event, input),
};