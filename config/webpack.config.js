const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');//html文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除文件

// 从creat react app 扒出来的
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const homepage = require(resolveApp('package.json')).homepage

module.exports = {
  entry: "./src/index.tsx",
  output: {
    publicPath: process.env.NODE_ENV === 'development' ? '/':homepage + '/',
    path: path.resolve(__dirname, "../build"),
    filename: "static/js/[name].js"
  },
  devtool: "source-map",
  resolve: {
    alias:{
      '@':path.resolve(__dirname,'../src'),
      'pages':path.resolve(__dirname,'../src/pages'),
      'utils':path.resolve(__dirname,'../src/utils'),
      'components': path.resolve(__dirname,'../src/components'),
    }, // 解决typescript webpack 设置alias不生效的问题,https://blog.csdn.net/weixin_40013817/article/details/105074462
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json",'.jsx']
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
          options: {
            plugins: ["react-hot-loader/babel"]
          }
        }
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(css|less)$/,
        use: ["style-loader",
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //      mode: "local",
            //     localIdentName: "[path][name]-[local]-[hash:5]",
            //   }
            // }//防止css污染，但是ts引入css less模块有问题，关于css模块解决方案有types-for-css-module等，https://blog.csdn.net/qq_20473985/article/details/79132787?utm_source=blogxgwz1，暂未找到解决less，scss解决方案
          },
          "less-loader"]
      },
      // {
      //   test: /\.bundle\.js$/,
      //   use: {
      //     loader: 'bundle-loader',
      //     options: {
      //       lazy: true,
      //       name: '[name]'
      //     }
      //   }
      // }
    ]
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    // new HtmlWebpackInlineSourcePlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]
    }),

    // new webpack.DllReferencePlugin({
    //   context: '.',
    //   manifest: require("../manifest/bundle_dev.json"),
    // }),
  ]

};
