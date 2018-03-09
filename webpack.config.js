const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // Tell webpack to start bundling our app at app/index.js
  entry: {
    main: './app',
    vendor: [
      'react', 'react-dom', 'jquery',
      // 'jquery-ui', 'bootstrap',
      'react-bootstrap', 'lodash'
    ]
  },
  // Output our app to the dist/ directory
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  // Emit source maps so we can debug our code in the browser
  devtool: 'source-map',
  // Tell webpack to run our source code through Babel
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        "presets": [
          ["es2015", {"modules": false}],
          //Webpack understands the native import syntax, and uses it for tree shaking

          "stage-2",
          //Specifies what level of language features to activate.
          //State 2 is "draft", 4 is finished, 0 is strawman.
          //See https://tc39.github.io/process-document/

          "react"
          //Transpile React components to JS
        ],
        "plugins": [
          "react-hot-loader/babel"
          //Enables React code to work with HMR.
        ]
      },
    },{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },{
      test: /\.(jpe?g|png|gif)$/,
      loader: 'file-loader',
      query:{
        name: 'assets/img/[name].[ext]'
      }
    },{
      test: /\.(ttf|eot|woff|woff2|svg)$/,
      loader: 'file-loader',
      query:{
        name: 'assets/fonts/[name].[ext]'
      }
    }]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.   
  plugins: [
    // Configure HtmlPlugin to use our own index.html file
    // as a template.
    // Check out https://github.com/jantimon/html-webpack-plugin
    // for the full list of options.
    new HtmlPlugin({
      template: 'app/index.html'
    }),
    new CopyWebpackPlugin([{
     from: "./app/assets", to: "./assets"
    }])
  ]
}
