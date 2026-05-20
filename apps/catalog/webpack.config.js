const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto',
    clean: true,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'catalog',
      filename: 'remoteEntry.js',
      exposes: {
        './CatalogPage': './src/pages/CatalogPage',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '18.3.1',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '18.3.1',
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: '6.26.0',
        },
        axios: {
          singleton: true,
          requiredVersion: '1.16.1',
        },
        swr: {
          singleton: true,
          requiredVersion: '2.4.1',
        },
        '@federated-shop/api': {
          singleton: true,
          requiredVersion: '1.0.0',
        },
      }
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
