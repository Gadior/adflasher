const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// progress
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Импортируем плагин

module.exports = (env) => {
  return {
    // Режим разработки (может быть режим production)
    mode: env.mode ?? "development",

    // Входная точка
    entry: "./src/index.tsx",

    // Выходная точка
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.[contenthash].js",
      clean: true,
    },

    // Обрабатываемые файлы
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    // Модули
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

    // Плагины
    plugins: [
      // Копирование статичыеских файлов из public в build
      new CopyWebpackPlugin({
        patterns: [{ from: "files", to: "files" }],
      }),
      // Минификация стилей
      new MiniCssExtractPlugin({
        filename: "styles.css",
      }),
      // Вставляем хтмл
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new webpack.ProgressPlugin(), // процентр загрузки в логах
    ],

    // Сервер
    devServer: {
      // Расположение статических файлов после сборки
      static: {
        directory: path.join(__dirname, "build"),
      },
      // Компресия
      compress: true,
      // Порт
      port: 3000,
      // релоуд страницы при разработке
      hot: true,
      // относительная адресация в путях
      historyApiFallback: true,
    },
  };
};
