const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // CSSを別ファイルに出力するには MiniCssExtractPlugin というプラグインを使用
const HtmlWebpackPlugin = require("html-webpack-plugin"); // HTMLが自動で出力される。出力されるHTMLにはWebpackでビルドされるJavascriptとCSSが配置される。
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // https://github.com/johnagan/clean-webpack-plugin

module.exports = {
  mode: 'development',
  devtool: 'source-map',
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
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                  ['@babel/preset-env', { "targets": "> 0.25%, not dead" }],
                ], // ブラウザで0.25%以上のシェアがあり、公式サポートが終了していないブラウザで動作するように設定する
                  // 30%とかにすると、googleだけとかになる
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/, // どのファイルが対象になるのかを、正規表現で設定
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //
          },
          {
            loader: "css-loader", // どのローダーを使用するかを設定
            options: { sourceMap: false },
          },
          {
            loader: 'sass-loader', // 追加
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]', // [name]ファイル名、[ext]拡張子
        },
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     esModule: false,
          //     name: 'images/[name][ext]',
          //   },
          // },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
      {
        test: /\.pug/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './stylesheets/main.css',
    }),
    new HtmlWebpackPlugin({ template: './src/templates/index.pug',filename: 'index.html' }), // https://pugjs.org/api/getting-started.html
    new HtmlWebpackPlugin({
      template: './src/templates/access.pug',
      filename: 'access.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.pug',
      filename: 'members/taro.html',
    }),
    new CleanWebpackPlugin(),
  ],
};
