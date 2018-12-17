const shared = require('./shared');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  entry: './src/css-loader.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:  'css-loader',
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ]
};

module.exports = Object.assign(config, shared);
