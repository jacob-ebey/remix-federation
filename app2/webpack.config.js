let path = require("path");
let webpack = require("webpack");
let { builtinModules } = require("module");

let pkg = require("./package.json");

/** @type {import("webpack").Configuration} */
module.exports = {
  mode: "development",
  devtool: false,
  entry: "./webpack-noop.js",
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    fallback: builtinModules.reduce((p, m) => ({ ...p, [m]: false })),
  },
  output: {
    path: path.resolve(__dirname, "public/webpack"),
    publicPath: "auto",
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "app2",
      filename: "remote-entry.js",
      exposes: {
        // "./app/routes/$filler.$name": "./app/routes/$filler.$name.tsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: pkg.dependencies["react-dom"],
        },
        "@remix-run/react": {
          singleton: true,
          requiredVersion: pkg.dependencies["@remix-run/react"],
        },
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "esbuild-loader",
        options: {
          loader: "js",
          target: "es2015",
        },
      },
      {
        test: /\.jsx$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es2015",
        },
      },
      {
        test: /\.ts$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "es2015",
        },
      },
      {
        test: /\.tsx$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx",
          target: "es2015",
        },
      },
    ],
  },
};
