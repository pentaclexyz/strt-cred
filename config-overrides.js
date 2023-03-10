const webpack = require('webpack');

// You can modify the webpack config in here, for instance to add polyfills.
module.exports = function override(config, env) {
  config.resolve.fallback = {
    os: require.resolve('os-browserify/browser'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    stream: require.resolve('stream-browserify'),
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "crypto": false,
    "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 

  };
  config.ignoreWarnings = [/Failed to parse source map/];
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  );
  return config;
}
