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

  module: {
      rules: [
          {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: "ts-loader"
                  }
              ]
          },
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
          }
      ]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};
