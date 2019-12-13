const webpackModule = require('webpack')
const webpack = {
    devServer:{
        contentBase: '.',
        hot:true,
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    plugins: [
        new webpackModule.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }, {
                test: /.js$/,
                loader: 'source-map-loader',
                enforce: 'pre',
            }
        ]
    },
      externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};

module.exports = webpack;