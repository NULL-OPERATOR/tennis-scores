const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    },
    devServer: {
        contentBase: './public',
    }
};
