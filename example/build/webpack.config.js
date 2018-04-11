let path = require('path');
let fs = require('fs-extra');
let webpack = require('webpack');
let env = require('../config/release');
let entry = {};
let bannerExcludeFiles = [];
let log = require('../tools/log');

switch (env) {
    case 'BD':
        log('即将本地环境打包');
        break;
    case 'CS':
        log('即将测试环境打包');
        break;
    case 'SC':
        log('即将生产环境打包');
        break;
}

(function walk(dir) {
    dir = dir || '.';
    let directory = path.join(__dirname, '../src/views', dir);
    fs.readdirSync(directory).forEach( (file) => {
        let full_path = path.join(directory, file);
        let stat = fs.statSync(full_path);
        let ext_name = path.extname(full_path);
        if (stat.isFile() && ext_name === '.vue') {
            let file_path = path.join(dir, path.basename(file, ext_name));
            let file_path_arr = file_path.replace(/\\/g, '/').split('\/');
            file_path_arr = unique(file_path_arr);
            let name = file_path_arr.join('_');
            entry[name] = full_path + '?entry=true';
        } else if (stat.isDirectory()) {
            let sub_dir = path.join(dir, file);
            walk(sub_dir);
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

let bannerPlugin = new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" }\n',
    raw: true,
    exclude: bannerExcludeFiles
});

let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        unused: true,
        dead_code: true,
        warnings: false,
        screw_ie8: true,
    }
});

module.exports = {
    entry: entry,
    output: {
        path: path.join(__dirname, '../dist/' + env),
        filename: '[name].js'
    },
    resolve: {
        alias: {
            'utils': path.resolve(__dirname, '../src/utils/'),
            'modules': path.resolve(__dirname, '../src/plugins/modules/'),
            'ds': path.resolve(__dirname, '../src/components/ds/'),
            'api': path.resolve(__dirname, '../src/api/'),
            'config': path.resolve(__dirname, '../src/config/'),
            'service': path.resolve(__dirname, '../src/service/'),
        }
    },
    module: {
        rules: [
            { test: /\.js(\?[^?]+)?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.(we|vue)(\?[^?]+)?$/, loader: 'weex-loader' },
        ]
    },
    plugins: [uglifyJsPlugin, bannerPlugin]
};
