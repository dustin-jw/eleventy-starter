/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const fs = require('fs');
const path = require('path');

// return any files matching in the directory (non-recursively)
const getEntryPoints = (directory) => fs.readdirSync(path.join(__dirname, directory))
  .filter((file) => !fs.statSync(path.join(directory, file)).isDirectory())
  .reduce((entries, file) => ({
    ...entries,
    [file.split('.')[0]]: `./${directory}/${file}`,
  }), {});

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: () => getEntryPoints('src/js'),
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
    ],
  },
  output: {
    filename: '[name].legacy.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
