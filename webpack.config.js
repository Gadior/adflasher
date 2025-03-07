const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Импортируем плагин

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader", // Встраивает стили в DOM
          "css-loader", // Обрабатывает CSS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require("autoprefixer"), // Добавляет префиксы
                ],
              },
            },
          },
          "sass-loader", // Компилирует SCSS в CSS
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Копирование файла из папки public  в экспортную папку
    new CopyWebpackPlugin({
      patterns: [{ from: "files", to: "files" }],
    }),

    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  mode: "development",

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3000,
    hot: true, // Включаем Hot Module Replacement
    historyApiFallback: true,
  },
};
