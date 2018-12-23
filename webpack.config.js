const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.css$/, /\.scss$/],
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', '@babel/preset-react'],
          //   plugins: [
          //     '@babel/plugin-transform-runtime',
          //     '@babel/plugin-proposal-class-properties',
          //   ],
          // },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|mp4|webm)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    stats: 'errors-only',
    open: true,
  },
};
// {
//   jest: {
//     moduleFileExtensions: ['js', 'jsx'],
//     moduleDirectories: ['node_modules'],
//     transform: {
//       '^.+\\.jsx$': 'babel-jest',
//     },
//   },
// },
