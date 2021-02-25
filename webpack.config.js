const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const isProd = process.env.NODE_ENV === "production";

const port = 8082;

module.exports = {
  mode: isProd ? "production" : "development",
  devServer: {
    port,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: isProd ? "/p2p/latest/" : `http://localhost:${port}/`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "p2p",
      filename: "remoteEntry.js",
      exposes: {
        "./P2pApp": "./src/bootstrap",
        "./contacts": "./src/components/contacts",
      },
    }),
  ],
};
