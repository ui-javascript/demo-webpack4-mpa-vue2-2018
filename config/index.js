/* eslint-disable */
const  path = require('path')
const merge = require('webpack-merge')
const fs = require('fs')

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

let config = {
    // 系统共用
    system: {
        // @TODO 入口生成标准
        // 1. html为准 'html'
        // 2. js为准 'js'
        // 3. html、js都要 'both'
        entryFirst: 'html',

        // @deprecated 是否兼容IE8
        supportIE8: false,

        // @TODO 适配
        isMobile: false,

        // 页面所在
        pages: '_pages',
        // 指定运行的模块
        // 1. 默认所有 "*"
        // 2. 指定单个模块 "index"
        // 3. 指定多个模块  "{index,router,todo}"
        modules: 'index',

        // 路径别名
        resolveAlias: {
            // 'assets': resolve('_pages/index/assets'),
        },
        external: {
            // jquery: 'window.$',
            // $: 'window.$',
            // san: 'window.san',
            // seajs: 'window.seajs',
            // requirejs: 'window.requirejs',
        }
    },

    // 构建配置
    build: {
        env: {
            NODE_ENV: '"production"',
        },
        proxyTable: {},
        cssSourceMap: false,
        // 路径替换 ===============
        // 1. 默认相对路径    '/'
        // 2. 指定域名cdn "https://www.bootcdn.cn/"
        cdn: '',
        copyDir: [
            { from: resolve('static/*.ico'), to: resolve('dist')},
            { from: resolve('static/img/**'), to: resolve('dist')},
            // { from: resolve('static/vendor/**'), to: resolve('dist')}
            // { from: resolve('static/plus/layui/**'), to: resolve('dist')},
        ],
    },
    // 开发配置
    dev: {
        env: {
            NODE_ENV: '"development"',
        },
        port: 9522,
    },
    // 部署配置
    deploy: {
        // 选择上传
        // 'aLi' || 'qiNiu'
        use: 'ali',
        // 七牛
        qiNiu: {
            host: '',
            bucket: '',
            ak: '',
            sk: '',
            zone: '',
            // 路径前缀
            prefix: ''
        },
        // 阿里OSS相关配置
        aLi: {
            host: '',
            accessKeyId: '',
            accessKeySecret: '',
            bucket: '',
            region: '',
            prefix: ''
        },
    }
};

// 切换指定系统
let sysName = [

    /* Vue简单示例 ============ */
    // 'default/_all',
    // 'default/index',
    // 'default/bootstrap',
    // 'demo/demo',
    // 'demo/spa',
    'demo/admin',


    /* vue小应用 ============== */
    // 'app/_all',
    // 'app/index',
    // 'app/notepad',
    // 'app/calculator',
    // 'app/neteasecloud',
    // 'socket/chat',
    // 'map/map',
    // 'app/nreader',
    // 'app/bilibili',
    // 'app/todo',
    // 'app/mmplayer',
    // 'app/happyfri',
    // 'veui/table',

    // 'cmpts/model',
    // 'cmpts/effects',
    // 'cmpts/toolbox',
    // 'cmpts/layout',

    // 'd3/basics',
][0]

sysName = sysName || 'default/index'

// 如果存在配置文件就覆盖
if (fs.existsSync(`./config/system/${sysName}.js`)) {
    var sysConfig = require(`./system/${sysName}`)
    config = merge(config, sysConfig)
    console.log('当前系统: ' + sysName + ' 配置生效(๑•̀ㅂ•́)و✧\n\n')
}
module.exports = config
