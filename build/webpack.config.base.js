/* eslint-disable */
const path = require('path')

// 常用插件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// const vuxLoader = require('vux-loader')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');


// 配置文件
const myConfig = require("../config/index")

// 处理路径
function resolve(dir) {
    return path.join(__dirname, '../' , dir)
}

let webpackConfig = {
    mode: 'development',
    // 配置入口
    entry: {
        // vendor: ['vue', 'san', 'san-router', 'element-ui']
    },
    // 配置出口
    output: {
        path: resolve("dist"),
        filename: 'static/js/[name].[hash:7].js',
        publicPath: '/',
        globalObject: 'this'
    },
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: ['es3ify-loader', 'babel-loader'],
                loader: ['babel-loader'],
                include: [
                    resolve('src'),
                    resolve(myConfig.system.pages),
                    resolve('test'),
                    resolve('node_modules/webpack-dev-server/client'),
                    // resolve('node_modules'),
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // @deprecated 写法LOW
                        css: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader'] }),
                        less: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader', "less-loader" ] }),
                        // sass: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader', "sass-loader" ] }),
                        scss: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader', "sass-loader" ] }),
                        // stylus: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader', "stylus-loader" ] }),
                        styl: ExtractTextPlugin.extract({ use: ['css-loader?minimize&sourceMap=false', 'postcss-loader', "stylus-loader" ] })
                    }
                },
                include: [
                    resolve('src'),
                    // 包括当前工程
                    resolve(myConfig.system.pages),
                ]
            },
            // {
            //     test: /\.san$/,
            //     loader: 'san-loader',
            // },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'icon-[name]'
                },
                include: [resolve('src/icons')],
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/img/[name].[hash:7].[ext]'
                },
                exclude: [resolve('src/icons')],
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'static/fonts/[name].[hash:7].[ext]'
                },
                // @fix 本来为了优化，
                // 但一些情况可能导致报错
                // exclude: [resolve('node_modules/font-awesome')],
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader"],
                }),
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader", 'less-loader'],
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader", 'sass-loader'],
                }),
            },
            {
                test: /\.(stylus|styl)$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader?sourceMap=false', "postcss-loader", 'stylus-loader'],
                    // use: ['style-loader', 'css-loader', "postcss-loader", 'stylus-loader'],
                }),
            },
        ]
    },

    plugins: [
        new VueLoaderPlugin(),
      new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
          // messages: [`Your application is running here: http://${config.dev.host}:${config.dev.port}`],
        },
        // onErrors: config.dev.notifyOnErrors
        //   ? utils.createNotifierCallback()
        //   : undefined,
        quiet: true,
        clearConsole: true,
      }),
    ],
};

// 路径覆盖
Object.assign(webpackConfig.resolve.alias, myConfig.system.resolveAlias)
Object.assign(webpackConfig.externals, myConfig.system.external)

module.exports = webpackConfig;
