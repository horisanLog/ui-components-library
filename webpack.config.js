const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSSを別ファイルに出力するには MiniCssExtractPlugin というプラグインを使用
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTMLが自動で出力される。出力されるHTMLにはWebpackでビルドされるJavascriptとCSSが配置される。
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin

module.exports = {
  entry: {
    main: './src/javascripts/main.js', 
  },
  output: {
    path: path.resolve(__dirname, "./dist"), // 絶対パスを指定する
    filename: 'javascripts/main.js',
  },
  module: {
    rules: [
      {
        test: /\.css/, // どのファイルが対象になるのかを、正規表現で設定
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //
          },
          {
            loader: "css-loader", // どのローダーを使用するかを設定
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({ template: './src/templates/index.html' }),
    new CleanWebpackPlugin(),
  ],
};
