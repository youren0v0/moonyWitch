const path = require('path');
const {merge} = require("webpack-merge");
const webpackCommon = require("./webpack.config");
const port = 3000

module.exports = merge(webpackCommon, {
  mode: 'development',
  output: {
    publicPath: "/"
  },
  devServer: {
    host: '0.0.0.0', // 如果你希望服务器外部可访问,使用0.0.0.0
    disableHostCheck: true,
    port: port,
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, "../dist"),
    // open: true //打开当前页面
    open: `http://127.0.0.1:${port}` //open可接收字符串。host为0.0.0.0时可使用此方式打开页面
  }

})