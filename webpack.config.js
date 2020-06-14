
//参考：https://qiita.com/10mi8o/items/2477f2640291f0ce6687


const path = require('path');
//const outputPath = path.resolve(__dirname, 'dist');
const outputPath = path.resolve(__dirname, './');//distではなくプロジェクトのトップに変更
module.exports = {
    
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
        port: 3000
    }
}