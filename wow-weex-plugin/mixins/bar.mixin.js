import BarPlugin                    from '../lib/bar.plugin'
import config                       from '../config'

const { BAR_COLOR } = config;

const methods = {
    barSet (options = { color: BAR_COLOR }) {
        return BarPlugin.set(options);
    }
};

export default {
    methods,
}
