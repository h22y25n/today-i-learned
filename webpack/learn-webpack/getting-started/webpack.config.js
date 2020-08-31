var path = require('path');
// node.js module 문법
// node path 참고 자료: https://nodejs.org/api/path.html#path_path_resolve_paths

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};