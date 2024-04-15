module.exports = {
  // エントリーポイント
  entry: "./src/index.js",
  // ファイルの出力設定
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },
  mode: "development",
  // 本番用
  // mode: "production",

  // ローカルサーバーの設定
  devServer: {
    static: "dist",
    open: true,
  },
}
