// 处理路径
const  path = require('path')
function resolve(dir) {
    return path.join(__dirname, '../../../' + dir)
}

module.exports = {
    system: {
        supportIE8: true,
        pages: "_default",
        modules: "*",
        resolveAlias: {},
        externals: {
            jquery: 'window.$',
            $: 'window.$',
            seajs: 'window.seajs',
        },
    },
};
