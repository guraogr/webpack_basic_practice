const path  = require('path');
// MODE変数でmodeの値を設定する。
const MODE = "development";
// MODE変数がdevelopmentならsourceMapStatusをtrueにする。
const sourceMapStatus = MODE === "development";

module.exports = {
  mode: 'development',
  context: path.join(__dirname, "src"),
  entry: {
    main: "./index.js",
    sub1: "./sub1.js",
    sub2: "./sub2.js",
  },
  output: {
    //  出力ファイルのディレクト名
    path: path.join(__dirname, "dist"),
    // 出力ファイル名
    // 出力ディレクト内のこの設定場所に書き出される。
    filename: "[name].bundle.js",
    // 出力ファルダ内のファイルを全て削除してから、出力します。
    clean: {
      keep: /index.html/, // index.html をキープ（削除しない）
    },
  },
  watch: true,  //watch オプションを有効にする
  watchOptions: {
    ignored: /node_modules/
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader',
        {
          loader: 'css-loader',
          url: false, // CSS内のurl()の有効無効を設定します
          options: { sourceMap: sourceMapStatus }
        }
      ]
      }
    ]
  }
}