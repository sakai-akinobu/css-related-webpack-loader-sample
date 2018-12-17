const path = require('path');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  devServer: {
    contentBase: './public',
  },
};
