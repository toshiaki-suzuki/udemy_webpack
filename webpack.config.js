const path = require('path');

module.exports = {
  mode: 'development',
  entry: {app: './src/app.js'},
  output:  {
    path: path.resolve(__dirname, 'public'), // 出力先の絶対パスを指定
    filename: '[name].bundle.js' // 出力ファイル名
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // 拡張子.scssのファイルを対象とする
        use: [ // どのloaderを使うかを設定　下から順に実行される。
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}