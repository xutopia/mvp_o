module.exports = {
  entry: [
    './front-end/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/front-end/',
    filename: 'bundle.js'
  },
  modules: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: '/'
  }
};
