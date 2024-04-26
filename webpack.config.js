const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',  // Ensure your entry points correctly, adjust as necessary
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']  // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Updated to include JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Ensure Babel can handle JSX via presets
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Confirm the path to your HTML template
      filename: 'index.html'
    }),
  ],
};
