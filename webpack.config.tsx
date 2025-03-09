import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";

// plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const devServer: DevServerConfiguration = {};

// __ int
type Mode = "production" | "development";

interface int_Config {
  mode: Mode;
  port?: number;
}

// ___ export
export default (env: int_Config) => {
  console.log(env);
  const config: webpack.Configuration = {
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

    // Обрабатываемые файлы
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    // Сервер
    devtool: "inline-source-map",
    devServer: {
      // Расположение статических файлов после сборки
      static: {
        directory: path.join(__dirname, "build"),
      },
      // Компресия
      compress: true,
      // Порт
      port: env.port,
      // релоуд страницы при разработке
      hot: true,
      // относительная адресация в путях
      historyApiFallback: true,
    },
  };
  return config;
};
