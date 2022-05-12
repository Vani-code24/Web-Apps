const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { appendFile } = require('fs');

module.exports = {
    mode:"development",
    entry: {
        bundle:path.resolve(__dirname,'src/js/index.js'),
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js',
    },
    devtool:'source-map',
    devServer: {
        static: {
            directory:path.resolve(__dirname,'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    module :{
        rules: [
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude:/node_modules/,
            //     use:{
            //         loader:'babel-loader',
            //         options:{
            //             presets:['@babel/preset-env']
            //         }
            //     }
            // },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            title:'web app',
            filename:'index.html',
            template:'src/template.html',
            inject: 'body'
        }),
    ],
    
}