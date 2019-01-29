var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: {
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
      },
   output:{
       path: path.resolve(__dirname, './public'),
       publicPath: '/public/',
       filename: "[name].js"
   },
   devServer: {
     historyApiFallback: true,
   },
   resolve: {
    extensions: ['.ts', '.js']
  },
   module:{
       rules:[
           {
               test: /\.ts$/,
               use: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                  } ,
                   'angular2-template-loader'
               ]
            }, {
              test: /\.html$/,
              loader: 'html-loader'
            }, {
                test: /\.css$/,
                loader: 'raw-loader'
              }, {
                test: /\.scss$/,
                loader: 'raw-loader'
              },
              {test: /\.js$/, loader: 'babel-loader'},
       ]
   },
   stats: {
   },
   plugins: [
    new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, 'src'),
      {}
    ),
    new UglifyJSPlugin()
  ]
}