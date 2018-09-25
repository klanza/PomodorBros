const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

const textPlugin = new MiniCssExtractPlugin({});

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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[local]___[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin, textPlugin]
};
