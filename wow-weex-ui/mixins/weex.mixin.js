import config                       from '../config'

let iOSX = config.iOSX || [];
const data = () => {
    return {
        weex$: {},
        iphoneX$: [
            'iPhone10,3',
            'iPhone10,6',
            'iPhone11,2',
            'iPhone11,4',
            'iPhone11,8',
            ...iOSX,
        ]
    }
};

const methods = {
    weexGet () {
        const {
            deviceWidth,
            deviceHeight,
            platform,
            deviceModel,
        } = weex.config.env;
        this.weex$ = weex.config.env;
        let compatible = 0;
        if (platform === 'iOS')
            compatible = 40;
        if (this.iphoneX$.indexOf(deviceModel) > -1)
            compatible = 80;
        this.weex$ = {
            deviceWidth,
            deviceHeight,
            deviceModel,
            platform,
            height: 750 / deviceWidth * deviceHeight,
            compatible,
            isX: compatible === 80,
        };
    },
};

export default {
    data,
    methods,
}
