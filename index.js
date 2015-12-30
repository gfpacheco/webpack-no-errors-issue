var webpack = require('webpack');

webpack(require('./webpack.config.js')).run(function(err, stats) {
  console.log(err, stats.errors);
});
