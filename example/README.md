# market

> APP

## Author

> Ajuan <979703986@qq.com>

## 目录结构

```
project
├── build                                   // 打包脚本目录
|   ├── webpack.config.js                   // 打包脚本
├── cmd                                     // node命令目录
|   ├── app.cmd.js                           
|   ├── cmd.js                              
|   ├── index.js
|   ├── ip.cmd.js
|   ├── release.cmd.js
|   ├── tree.cmd.js
├── config                                  // node命令配置文件
|   ├── app.config.js
|   ├── ip.config.js
|   ├── log.config.js
|   ├── meta.config.js
|   ├── release.config.js
|   ├── tree.config.js
├── dist                                    // 打包出来的js目录
├── node_modules                            // 依赖
├── src                                     // 项目目录
|   ├── api                                 // 接口目录
│   ├── components                          // 组件目录
│   ├── config                              // 项目配置目录
│   ├── plugins                             // 插件目录
│   ├── utils                               // 工具目录
│   ├── services                            // 服务目录
│   ├── views                               // 页面目录
│   |   └── market
├── static                                  // 静态资源目录
|   ├── images
├── tools                                   // node命令工具目录
|   ├── common.tool.js
|   ├── fs.tool.js
|   ├── log.tool.js
|   ├── process.tool.js
├── .babelrc                                // babel 配置文件
├── .editorconfig                           // 代码格式文件
├── .gitignore                              // 忽略文件
├── old_tree.json                           // 老壳子tree
├── package.json                            
├── package-lock.json
├── README.md
├── tree.json                               // 新壳子tree
```

## 操作命令

> npm run serve => 启动一个本地服务

> npm run dev   => 本地打包JS

> npm run test  => 测试打包JS

> npm run build => 生产打包JS

> node cmd -r           [string]    =>  设置发布的环境
> node cmd --release    [string]    =>  设置发布的环境

> node cmd -t                       =>  生成tree.json
> node cmd --tree                   =>  生成tree.json

> node cmd -i           [string]    =>  设置本地环境IP
> node cmd --ip         [string]    =>  设置本地环境IP


### 样式命名

> 小写英文
> 中划线 -

```
<div class="node-demo">

```

### 属性命名

> 小写英文
> 下划线
> 数组加前缀 arr
> 节点加前缀 nd
> 对象加前缀 obj
> 数字加前缀 num
> 字符加前缀 str
> boolean   is

```
data () {
    return {
        arr_demo: [],
        nd_demo: this.$refs.demo,
        obj_demo: {},
        num_demo: 1,
        str_demo: 'demo',
        is_demo: false
    }
}

```

### 方法命名

> 驼峰写法，至少两个单词
> 表用户操作加前缀 handle

```
methods: {
    handleJump() {},
    jumpPage(){},
}

```

