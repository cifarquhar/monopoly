var config = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devtool: "source-map",
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      },
      {
        test: /\.scss$/,
        use:[{
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "sass-loader"
        },
      ]
      }
    ]
  }
};

module.exports = config;
