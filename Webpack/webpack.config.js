const modoDev = process.env.NODE_ENV !== "production";
const UglifyJsWebpack = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssets = require("optimize-css-assets-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: modoDev ? "development" : "production",
  entry: "./src/principal.js",
  output: {
    filename: "principal.js",
    path: __dirname + "/public",
  },
  devServer:{
    contentBase: "./public",
    port: 9000
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpack({
        parallel: true,
        cache: true,
      }),
      new OptimizeCSSAssets({}),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'style-loader',//Adiciona CSS a DOM injetando a tag <style>
          "css-loader", //interpreta @import, url()...
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
