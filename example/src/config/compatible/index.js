export default {
    dir: (weex, deviation = 90) => {
        var env = weex.$getConfig().env,
            dir = 0;
        if (env.platform === 'iOS') {
            var scale = env.scale;
            var deviceWidth = env.deviceWidth / scale;
            dir = 64.0 * 750.0 / deviceWidth - deviation;
        }
        return dir;
    }
}
