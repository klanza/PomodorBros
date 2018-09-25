const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('build'),
    filename: 'index_bundle.js'
  },
  devServer: {
    port: 8000,
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['src', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  },
  plugins: [htmlPlugin]
};
