const path = require('path');

module.exports = options => {
  return {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      filename: 'index.js',
      path: path.join(__dirname)
    },
    target: 'node',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: [
            path.join(__dirname, 'node-modules')
          ],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true
              }
            }
          ]
        }
      ]
    }
  };
};
