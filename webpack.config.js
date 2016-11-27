var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/javascripts');
var APP_DIR = path.resolve(__dirname, 'src/app');
var STYLE_DIR = path.resolve(__dirname, 'src/sass');

var config = {
  entry: {
    app: APP_DIR + '/app.js'
  },
 
  output: {
    path: BUILD_DIR,
    filename: '[name]_bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      },
      {
        test: /\.scss$/,
        include: __dirname+'src/sass',
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

module.exports = config;