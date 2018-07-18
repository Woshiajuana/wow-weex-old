import apiConfig from 'appConfig/app.config'
const channel = weex.requireModule('channel');

const app_user = apiConfig.appUser;

export default {
    add: ($event, fn) => channel.addEventListener(app_user + '_' + $event, fn),

    remove: $event => channel.removeEventListener(app_user + '_' + $event),

    post: ($event, input) => channel.postMessage(app_user + '_' + $event, input),
};
