const path = require('path');

module.exports = {
  mode: 'development',
  entry: {app: './src/app.js', sub: './src/sub.js'},
  output:  {
    path: path.resolve(__dirname, 'public'), // 出力先の絶対パスを指定
    filename: '[name].bundle.js' // 出力ファイル名
  }
}