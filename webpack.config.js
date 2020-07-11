
//参考：https://qiita.com/10mi8o/items/2477f2640291f0ce6687

const fs = require('fs');
const path = require('path');
const { fstat } = require('fs');
const { Server } = require('http');
const CopyPlugin = require('copy-webpack-plugin');
//const outputPath = path.resolve(__dirname, 'dist');
const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
    mode :'production',
    entry: './src/index.js',//起点となるファイルのみを指定。src以下のファイルを個別に指定する必要はない
    output: {
        // バンドルしてmain.jsとして出力（これは実体として生成されないが、index.htmlなどで呼び出し記述が必要）
        filename: 'main.js',
        path: outputPath
    },
    devtool: 'inline-source-map',//ブラウザでのデバッグ用にソースマップを出力する

    // webpack-dev-serverを立ち上げた時のドキュメントルートを設定
    // 
    devServer: {
        contentBase: outputPath,
        watchContentBase: true,//html,cssなどに変更があればブラウザリロードを自動実行
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 3000,
        https:true,
        key:fs.readFileSync('./certkeys/naf-server.key'),
        cert:fs.readFileSync('./certkeys/naf-server.crt')

    },

    plugins:[
        new CopyPlugin({
            patterns:[
                {from : "src/index.html", to:path.resolve(__dirname, "dist")}
            ]
        })
    ]
}