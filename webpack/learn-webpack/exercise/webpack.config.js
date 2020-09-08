var path = require('path')
var webpack = require('webpack')

module.exports = {
  // 배포 모드 정의: production, development, none
  mode: 'production', 
  // 진입점: webpack으로 변환할 파일의 경로, 빌드를 위한 진입점
  entry: './src/main.js',
  // 결과물: 결과물이 떨어질 폴더의 경로를 설정하는 속성
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    // filename: [name][chunckhash].js 와 같이도 선언 가능하다. chunckhash == 고유값
    filename: 'build.js'
  },
  // module: 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성
  module: { // module == loader
    rules: [
      {
        test: /\.css$/, // 파일명이 .css로 끝나는 파일들은 해당 loader을 사용
        use: [ // 불러올 로더를 작성, 로더를 불러오는 순서는 오른쪽에서 오른쪽에서 왼쪽(아래에서 위)
          'vue-style-loader', // https://www.npmjs.com/package/vue-style-loader
          'css-loader' // https://www.npmjs.com/package/css-loader 
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: { // 웹팩이 경로나 확장자를 자동으로 처리하게 도와주는 옵션
    alias: { // 모듈 로드시 별칭 설정
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: { //개발 진행하며 빠르게 빌드할 수 있도록 해줌 (참고: https://webpack.js.org/configuration/dev-server/)
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

// Webpack3에서 사용되는 문법
// Node의 개발 환경이 production일 때, 추가적으로 아래에 있는 내용을 추가해 빌드한다
// 이제는 아래 내용이 mode에 추가하면 production 레벨로 최적화가 된다

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
