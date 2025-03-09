import path from "path";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";

// plugins
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
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
  // Тип сборки
  let isDev = env.mode === "development";
  let isProd = env.mode === "production";

  const config: webpack.Configuration = {
    // ~ Режим разработки (может быть режим production)
    mode: env.mode ?? "development",

    // ~ Входная точка
    entry: "./src/index.tsx",

    // ~ Выходная точка
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.[contenthash].js",
      clean: true,
    },

    // ~ Плагины
    plugins: [
      // Копирование статичыеских файлов из public в build
      new CopyWebpackPlugin({
        patterns: [{ from: "files", to: "files" }],
      }),
      // Минификация стилей
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      // Вставляем хтмл
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      isProd && new webpack.ProgressPlugin(), // процентр загрузки в логах только dev
    ],

    // ~ Модули
    module: {
      rules: [
        // --- tsx
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },

        // --- scss
        {
          test: /\.scss$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
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

        // --- css
        {
          test: /\.css$/,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
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

    // ~ оптимизация
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },

    // ~ Обрабатываемые файлы
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },

    // ~ Сервер
    devtool: "inline-source-map",
    devServer: {
      // Расположение статических файлов после сборки
      static: {
        directory: path.join(__dirname, "build"),
      },
      // Компресия
      compress: true,
      // Порт
      port: env.port ?? 3000,
      // релоуд страницы при разработке
      hot: true,
      // относительная адресация в путях
      historyApiFallback: true,
    },
  };
  return config;
};
