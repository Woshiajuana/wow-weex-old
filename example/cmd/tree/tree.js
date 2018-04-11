/**
 * 打包生成tree.json资源文件
 * */
import log          from '../../tools/log'
import fs_extra     from 'fs-extra'
import path         from 'path'
import version      from '../../config/version'
import tree_config  from '../../config/tree'
import env_config   from '../../config/release/env'
import meta_config  from '../../config/meta'
import env          from '../../config/release'
let out_tree = {
    engine: tree_config.engine,
    entry: tree_config.entry,
    base: '',
    version,
    resource: {},
    meta: meta_config
};
log(`设置APP入口文件为：${out_tree.entry}`);
out_tree.base = env_config.TREE_BASE_URL;
if (env !== 'BD') out_tree.base = `${out_tree.base}/${version}`;
log(`设置APP页面JS基础地址为：${out_tree.base}`);
log(`即将遍历views目录下APP所有页面`);
(function findDirBuildTree(dir) {
    dir = dir || '.';
    let directory = path.join(__dirname, '../../src/views', dir);
    fs_extra.readdirSync(directory).forEach((file) => {
        let full_path = path.join(directory, file);
        let stat = fs_extra.statSync(full_path);
        let ext_name = path.extname(full_path);
        if (stat.isFile() && ext_name === '.vue') {
            let file_path = path.join(dir, path.basename(file, ext_name));
            let file_path_arr = file_path.replace(/\\/g, '/').split('\/');
            file_path_arr = unique(file_path_arr);
            let name = file_path_arr.join('_');
            out_tree.resource[name] = name + '.js';
        } else if (stat.isDirectory()) {
            let sub_dir = path.join(dir, file);
            findDirBuildTree(sub_dir);
        }
    })
})();
function unique(array){
    let n = [];
    for(let i = 0; i < array.length; i++){
        if (n.indexOf(array[i]) === -1) n.push(array[i]);
    }
    return n;
}
log(`即将生成tree.json`);
fs_extra.createWriteStream('tree.json',{defaultEncoding:'utf8'});
fs_extra.writeFileSync('./tree.json', JSON.stringify(out_tree, null, 4));
log(`生成tree.json操作完成`);
