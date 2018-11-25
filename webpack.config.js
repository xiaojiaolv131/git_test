var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', // 打包模式
    // entry: ['./src/script/main.js', './src/script/a.js'], // 入口
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: { // 输出配置
        path: __dirname + "/dist", // 输出路径
        // filename: '[name].[hash].js' // 输出文件名
        filename: 'js/[name].[chunkhash].js', // 输出文件名
        publicPath: 'https://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html', // 模版，这里直接用根目录下的index.html
            // filename: 'index-[hash].html', // 输出文件名
            filename: 'index.html', // 输出文件名
            inject: 'head',
            // inject: false,
            title: 'Hulk Lv Blog',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new htmlWebpackPlugin({
            template: 'index.html', // 模版，这里直接用根目录下的index.html
            filename: 'a.html', // 输出文件名
            // filename: 'index-[hash].html', // 输出文件名
            inject: 'head',
            // inject: false,
            title: 'this is a page'
        })
    ]
}