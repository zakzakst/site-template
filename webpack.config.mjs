import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "node:url";
import path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// const environment = process.env.NODE_ENV || 'development';
const environment = "production";

export default {
  entry: {
    script: "./src/js/script.js",
  },
  resolve: {
    extensions: [".js"],
  },
  output: {
    path: `${__dirname}/dist/assets/js`,
    filename: "[name].js",
  },
  mode: environment,
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js$/,
        terserOptions: {
          compress: {
            // drop_console: environment === 'production' ? true : false,
            // drop_console: true,
            drop_console: false,
          },
        },
      }),
    ],
  },
};
