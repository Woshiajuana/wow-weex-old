import wowCool          from 'wow-cool'
import path             from 'path'
import fs_extra         from 'fs-extra'
import log              from './../tools/log.tool'
import appConfig        from './../config/app.config'
import ipConfig         from './../config/ip.config'
import env              from './../config/release.config'

/**
 * tree.config.js
 * */
export default((arr_parameter) => new Promise((resolve, reject) => {
    let num_tree_index = wowCool.findFirstIndexForArr(arr_parameter, (item) => {
        return item === '--tree' || item === '-t';
    });
    if (num_tree_index === -1) return resolve();
    let out_tree = Object.assign({
        app: 'app',
        base: `http://${ipConfig}:32580/dist/${env}`,
        version: '0.0.1',
        entry: 'app',
        resource: {},
    }, appConfig);
    let old_out_tree = Object.assign({
        app: 'app',
        base: `http://${ipConfig}:32580/dist/${env}`,
        version: '0.0.1',
        entry: 'app',
        resource: {},
    }, appConfig);
    log(`设置APP入口文件为：${out_tree.entry}`);
    log(`设置APP页面JS基础地址为：${out_tree.base}`);
    log(`即将遍历views目录下APP所有页面`);
    (function findDirBuildTree(dir) {
        dir = dir || '.';
        let directory = path.join(__dirname, './../src/views', dir);
        fs_extra.readdirSync(directory).forEach((file) => {
            let full_path = path.join(directory, file);
            let stat = fs_extra.statSync(full_path);
            let ext_name = path.extname(full_path);
            if (stat.isFile() && (ext_name === '.vue' || ext_name === '.js')) {
                let file_path = path.join(dir, path.basename(file, ext_name));
                let file_path_arr = file_path.replace(/\\/g, '/').split('\/');
                file_path_arr = unique(file_path_arr);
                let name = file_path_arr.join('_');
                if (ext_name === '.vue') {
                    out_tree.resource[name] ? out_tree.resource[name].src = name + '.js' : out_tree.resource[name] = { src: name + '.js' };
                    old_out_tree.resource[name] = name + '.js';
                } else if (file_path.indexOf('.meta.json') > -1) {
                    let json = require( path.join(__dirname, './../src/views', file_path + '.js')).default;
                    name = name.split('.')[0];
                    name = name.split('_');
                    name = unique(name);
                    name = name.join('_');
                    out_tree.resource[name] ? out_tree.resource[name].meta = json : out_tree.resource[name] = { meta: json };
                }
            } else if (stat.isDirectory()) {
                let sub_dir = path.join(dir, file);
                findDirBuildTree(sub_dir);
            }
        })
    })();
    function unique(array){
        let n = [];
        for(let i = 0; i < array.length; i++){
            if (n.indexOf(array[i]) === -1 && array[i] !== 'index') n.push(array[i]);
        }
        return n;
    }
    log(`即将生成tree.json`);
    fs_extra.createWriteStream('tree.json',{defaultEncoding:'utf8'});
    fs_extra.createWriteStream('old_tree.json',{defaultEncoding:'utf8'});
    fs_extra.writeFileSync('./tree.json', JSON.stringify(out_tree, null, 4));
    fs_extra.writeFileSync('./old_tree.json', JSON.stringify(old_out_tree, null, 4));
    fs_extra.ensureDirSync(`./dist/${env}`);
    fs_extra.writeFileSync(`./dist/${env}/tree.json`, JSON.stringify(out_tree, null, 4));
    fs_extra.writeFileSync(`./dist/${env}/old_tree.json`, JSON.stringify(old_out_tree, null, 4));
    log(`生成tree.json操作完成`);
    return resolve();
}));
