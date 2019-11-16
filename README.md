# README

webpack4-vue多页面模板

配置文件写的不理想, 目前仅学习用...

# 使用

- nodejs版本(v.10.12.0)

```
能不能install成功随缘... @deprecated

可以先用yarn install试试
```

- 以html作为entry入口 @deprecated
- 覆盖配置, 需要在config/system 下新建同名配置文件 @deprecated

# FAQ

- html里引用static内容注意相对路径 ../../static
- 工程下某个模块跑起来报错 --> 可能是`路由`的问题，检查router.js
- main.js 引用css报错 -> 改为引用less/sass, css格式忘记配置了
- `element-admin`样式错乱 -> node v.10 + yarn??
- `neteasecloud`: router require().default https://www.cnblogs.com/legendjslc/p/9041804.html

```shell
# muse-ui 降为旧版本 --> 拷下来的项目代码很旧
cnpm install -S muse-ui@2.1.0
```
