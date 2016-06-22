var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.jsx?$/,  exclude: /(node_modules)/, loader: 'babel-loader'},
      {test: /\.(png|jpg|ico)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
}