const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../dist'),
    hot: true,
    open: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset',
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { progressive: true },
              optipng: { enabled: true }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../dist/index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
