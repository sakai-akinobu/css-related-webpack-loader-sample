const shared = require('./shared');

const config = {
  entry: './src/css-loader.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ]
      }
    ],
  },
};

module.exports = Object.assign(config, shared);
