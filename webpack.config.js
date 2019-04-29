
const path = require('path');


module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react','@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        exclude: /(node_modules)/
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "client"),
    proxy: {
      '/api': 'http://[::1]:3000',  //added [::1] because voodoo https://github.com/saikat/react-apollo-starter-kit/issues/20
      secure: false
    },
  },
};
