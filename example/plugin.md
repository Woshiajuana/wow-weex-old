# h5与壳子native交互

## loading 模块 jfLoadingModule
> 无参数，无回调
> show()              打开
> dismiss()           关闭

## h5页面路径 模块 loadResurceModule
> getRoutePath          返回下载的本地h5js路径
```
    // page_name tree.json key值
    getRoutePath(String page_name, callback)
    js使用示例
    loadResurceModule.getRoutePath(page_name, e => {
       e.code === '0000' ? resolve(e.data) : reject(e);
    });
```

## h5页面管理 模块 pageManagerModule
> popToRootPage         返回根H5页面
```
popToRootPage(callback)
```
> deletePageWithParam   删除H5页面
```
deletePageWithParam({back_index:String back_index, front_index:String front_index}, callback)
```

# 相机模块 photoModule
> capturePhoto  拍照
```
capturePhoto(callback)
camera.capturePhoto(e => {
    e.code === '0000' ? resolve({
        image: 'data:image/png;base64,' + e.data.imageBase64,
        base64: e.data.imageBase64,
        sign: e.data.imageSign,
    }) : reject(e);
});
```
> selectPhoto   相册选取
```
 camera.selectPhoto(e => {
    e.code === '0000' ? resolve({
        image: 'data:image/png;base64,' + e.data.imageBase64,
        base64: e.data.imageBase64,
        sign: e.data.imageSign,
    }) : reject(e);
});
```

# 事件模块 channel
> addEventListener          监听事件
> postMessage               发起事件
> removeEventListener       删除事件监听
```
channel.addEventListener(String name, fn),
channel.postMessage(String name, {}),
channel.removeEventListener(String name),

add: ($event, fn) => channel.addEventListener(app_user + '_' + $event, fn),
remove: $event => channel.removeEventListener(app_user + '_' + $event),
post: ($event, input) => channel.postMessage(app_user + '_' + $event, input),
```

# 地址GPS模块 jfLocationModule
> getLocation       获取GPS
```
location.getLocation(callback)
 location.getLocation(e => {
    e.code === '0000' ? resolve(e.data) : reject(e);
});
```

# 级联模块 jsonPickModule
> show              //打开地址级联
```
options //级联数据
jsonPickModule.show(options, e => {
    e.code === '0000' ? resolve(e.data) : reject(e);
});
```
