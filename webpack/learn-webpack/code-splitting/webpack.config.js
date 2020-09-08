var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production(배포), development(개발 진행시), none(교육 용이니 이번엔 none)
  entry: './index.js', // webpack으로 변환할 파일의 경로
  output: {
    filename: 'bundle.js', // [name][chunckhash].js 와 같이도 선언 가능하다. chunckhash == 고유값
    path: path.resolve(__dirname, 'dist')
  },
  module: { // module == loader
    rules: [
      // 하나의 로더 규칙 시작
      //  - 모든 CSS 파일의 use 에 불러올 로더를 적용한다
      //  - 로더를 불러오는 순서는 오른쪽에서 부터 시작한다. 때문에 로더 작성 순서가 올바르지 않으면 에러가 발생한다
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
      // 하나의 로더 규칙 끝
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  // 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다
  plugins: [
    new MiniCssExtractPlugin()
  ],
}