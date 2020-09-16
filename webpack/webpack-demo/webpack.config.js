// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path");
// var HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/js/index.js", // 작성한 파일
  output: {
    filename: "bundle.js", // 하나로 번들링된 JS파일
    path: path.resolve(__dirname, "dist"), // 빌드 결과 경로
  },
  devServer: {
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({
    //   // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
    //   template: "index.html",
    // }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // scss
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader, // CSS를 별도의 파일로 분리
          // 'style-loader', // 읽어온 CSS 파일을 style 태그로 만들어 head 태그 안에 넣어줌
          "css-loader", // CSS파일을 읽어옴
          "sass-loader",
        ],
      },

      // images
      {
        test: /\.(png|jpe?g|gif)$/i,
        include: path.resolve(__dirname, "./src/images"),
        use: [
          {
            loader: "file-loader",
            options: {
              // publicPath: "./dist/", // prefix로 사용할 아웃풋 경로 지정 기능 (지금은 필요없음)
              name: "images/[name].[ext]?[hash]", // 번들링후 파일명 유지
            },
          },
        ],
      },

      // svg
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, "./src/images"),
        loader: "svg-sprite-loader",
        options: {
        },
      },
    ],
  },
};
