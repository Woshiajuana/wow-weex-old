import GenerateUtil            from '../../utils/generate.util'
import config                  from './config'

const {
    _generateComputed,
} = GenerateUtil;

const computed = _generateComputed(config);

export default {
    computed,
}

