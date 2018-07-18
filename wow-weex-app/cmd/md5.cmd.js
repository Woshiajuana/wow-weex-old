import crypto               from 'crypto'
import path                 from 'path'
import wowCool              from 'wow-cool'
import fsTool               from '../tools/fs.tool'
import _                    from 'lodash'
import env                  from '../config/release.config'
import log                  from './../tools/log.tool'

export default((arr_parameter) => new Promise((resolve, reject) => {
    try {
        let num_ip_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
            return item === '--md5' || item === '-m';
        });
        if (num_ip_index === -1) return resolve();
        let tree = fsTool.readFileSync(path.join(__dirname, `./../dist/${env}/tree.json`));
        tree = JSON.parse(tree);
        _.forEach(tree.resource, (source, key) => {
            const filename = source.src;
            console.log(path.join(__dirname, `./../dist/${env}/${filename}`));
            const file = fsTool.readFileSync(path.join(__dirname, `./../dist/${env}/${filename}`));
            source.md5 = crypto.createHash('md5').update(file).digest('hex');
            log(`${filename}md5值 => ${ source.md5 }`);
        });
        fsTool.writeFileSync(`./dist/${env}/tree.json`, JSON.stringify(tree, null, 4));
        log('md5计算完成');
        return resolve();
    } catch (err) {
        console.log(err);
        resolve();
    }
}));
