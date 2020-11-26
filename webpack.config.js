const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  watch: true,
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




  // [
  //   {
  //     test: /\.(png|js|jsx|css)$/,
  //     exclude: /node_modules/,
  //     use: {
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['@babel/preset-env', '@babel/preset-react'],
  //         plugins: [
  //           '@babel/plugin-proposal-class-properties'
  //         ]
  //       }
  //     }
  //   }
  // ]