const webpack = require('webpack')

module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.json$/,
        use: [
          'json-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
