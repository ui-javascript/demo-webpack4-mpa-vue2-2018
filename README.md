# README

webpack4-vue多页面模板

但配置文件写的不理想, 目前仅学习用...

# 使用

- nodejs版本可能影响安装(随缘...)

```
npm install -g node-gyp ??

先尝试使用npm安装!! -> 安装结束可能会报错, 但不影响运行结果
```

- 覆盖配置, 需要在config/system 下新建同名配置文件

# FAQ

- html里引用static内容注意相对路径 ../../static
- html里引用static内容注意相对路径 ../../static
- 工程下某个模块跑起来报错 --> 可能是`路由`的问题，检查router.js
- main.js 引用css报错 -> 改为引用less/sass, css格式忘记配置了
- `element-admin`样式错乱 -> node v.10.13.0 + yarn
- `neteasecloud`: router require().default https://www.cnblogs.com/legendjslc/p/9041804.html

```shell
# muse-ui 降为旧版本 --> 拷下来的项目代码很旧
cnpm install -S muse-ui@2.1.0
```