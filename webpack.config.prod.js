const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
  ],
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.(png|js|jsx|css)$/,
      exclude: /node_modules/
    },{
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'api/booking/images/[hash]-[name].[ext]',
              //the path that will show on the actual webpage after being transpiled, normally it will be a relative path.
              publicPath: '/'
            },
          },
        ],
      }]
  }
};


