const path = require('path');

module.exports = {
  entry: './src/playground/redux-test.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(js|jsx)$/, // Regular Exp... chay babel moi khi thay file co duoi la .js hoac jsx
      exclude: /node_modules/ // tru cac file trong node_modules
    },{
      test: /\.s?css$/, // SCSS
      use: [ // use duoc dung de goi nhieu loader
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}