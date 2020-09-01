var path = require('path');

module.exports = {
  mode: 'production',
  // 진입점
  entry: './js/app.js',
  // 결과물
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.bundle.js'
  },
  // 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
