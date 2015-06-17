import _ from 'lodash';
import webpack from 'webpack';
import yargs from 'yargs';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const argv = yargs
  .alias('p', 'optimize-minimize')
  .alias('d', 'debug')
  .argv;

const defaultOptions = {
  development: argv.debug,
  test: false,
  optimize: argv.optimizeMinimize
};

export default (options) => {
  options = _.merge({}, defaultOptions, options);
  const environment = options.test || options.development ?
    'development' : 'production';
  const cssSourceMap = options.development ? '?sourceMap' : '';

  const config = {
    entry: {
      'app': './src/client.js'
    },

    output: {
      filename: '[name].js',
      path: './dist/assets',
      publicPath: '/assets/'
    },

    resolve: {
      extensions: ['', '.js', '.json']
    },

    module: {
      noParse: /babel-core\/browser/,
      loaders: [
        { test: /\.js/, loader: 'babel', exclude: /node_modules/ },
        { test: /\.css/, loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}`) },
        { test: /\.less$/, loader: ExtractTextPlugin.extract('style', `css${cssSourceMap}!less${cssSourceMap}`) },
        { test: /\.json$/, loader: 'json' },

        { test: /\.jpe?g$|\.gif$|\.png|\.ico$/, loader: 'file?name=[name].[ext]' },
        { test: /\.eot$|\.ttf$|\.svg$|\.woff2?$/, loader: 'file?name=[name].[ext]' }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(environment)
        }
      }),
      new ExtractTextPlugin('[name].css')
    ]
  };

  return config;
};
