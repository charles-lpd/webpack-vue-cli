// 引入path 解决路径
const path = require('path')
// 引入eslint插件
const EslintWebpackPlugin = require('eslint-webpack-plugin')
// 引入 html 插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { DefinePlugin } = require('webpack')
// 判断是否是生产环境 和测试环境
const isProd = process.env.NODE_ENV === 'production'
console.log(isProd)
const { VueLoaderPlugin } = require('vue-loader')
// 导入插件 用于返回错误给 dev-server
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const getStyleLoaders = (loader) => {
  return [
    'vue-style-loader',
    'css-loader',
    {
      // 处理css兼容性问题
      // 配合 package.json中 browserslist 来指定兼容性
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: ['postcss-preset-env']
        }
      }
    },
    loader
  ].filter(Boolean)
}

module.exports = {
  entry: './src/main.ts',
  output: {
    path: undefined,
    // 入口文件名
    filename: 'static/js/[name].js',
    // chunk 文件路径
    publicPath: '/',
    chunkFilename: 'static/js/[name].chunk.js',
    // asset 处理文件路径
    assetModuleFilename: 'static/media/[hash:10][ext][query]'
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.less$/,
        use: getStyleLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        use: getStyleLoaders('sass-loader')
      },
      {
        test: /\.styl$/,
        use: getStyleLoaders('stylus-loader')
      },
      // 处理图片
      {
        test: /\.(jpe?g|png|gif|svg|webp|mp4)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 如果没有超出maxSize 将会被转化成base64 格式输出
            maxSize: 10 * 1024
          }
        }
      },
      // 处理 element-plus 版本太高 出现无法处理后缀 mjs 的情况
      {
        test: /\.(js|jsx|mjs)$/,
        // 只处理src文件下的 jsx
        include: path.resolve(__dirname, '../node_modules/element-plus'),
        loader: 'babel-loader',
        resolve: {
          fullySpecified: false
        }
      },
      // 其他资源
      {
        test: /\.(woff2?|ttf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        // 如果babel > 7 可使用babel 进行转译
        // loader: 'babel-loader',
        // options: {
        //   presets: [
        //     '@babel/preset-env',
        //     [
        //       '@babel/preset-typescript', // 引用Typescript插件
        //       {
        //         allExtensions: true // ?支持所有文件扩展名
        //       }
        //     ]
        //   ]
        // },
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '../tsconfig.json'),
              appendTsSuffixTo: [/\.vue$/], //  默认是个数组
              transpileOnly: true // 只做语言转换，而不做类型检查, 这里如果不设置成TRUE，就会HMR 报错
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  //处理 html
  plugins: [
    new EslintWebpackPlugin({
      // 处理文件路径
      context: path.resolve(__dirname, '../src'),
      //不包含哪些文件
      exclude: 'node_modules',
      cache: true,
      // 开启eslint 缓存
      cacheLocation: path.resolve(
        __dirname,
        '../node_modules/.cache/.eslintcache'
      )
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new VueLoaderPlugin(),
    // cross-env 定义的环境变量是给打包工具使用的
    // definePlugin 定义环境变量给源代码使用的 从而解决vue 页面警告的问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new ForkTsCheckerWebpackPlugin()
  ],
  // 开启测试环境
  mode: 'development',
  // 开启错误提示
  devtool: 'cheap-module-source-map',
  // 压缩操作
  optimization: {
    // 代码分割
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`
    }
  },
  // webpack 解析模块加载选项
  resolve: {
    // 自动补全文件扩展名
    extensions: ['.ts', '.vue', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src') // 这样配置后 @ 可以指向 src 目录
    }
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    open: true,
    hot: true,
    // 当出现编译错误或警告时，在浏览器中显示全屏覆盖。
    historyApiFallback: true // 解决前端路由刷新404问题
  }
}
