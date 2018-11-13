module.exports = {
  context: __dirname + "/src",
  entry: "./index",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-object-rest-spread']
        }
      },
      { test: /\.css$/, loader: [ 'style-loader', 'css-loader' ] },
      { test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf)$/, loader: 'url-loader' }
    ]
  },
  plugins: []
}
