const HtmlWebpackPlugin = require('html-webpack-plugin');
const express = require('express');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './staticFiles/', // TODO: 没搞清楚具体作用
    watchContentBase: true,
    before(app) {
      app.use('/static', express.static('./staticFiles/'));
    }
  },
  plugins: [new HtmlWebpackPlugin()],
}
