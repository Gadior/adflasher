import { Configuration, DefinePlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import webpack from "webpack";

import { int_BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugin(options: int_BuildOptions) {
  // Тип сборки
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";

  // ~ стартовый общий набор плагинов
  const plugins: Configuration["plugins"] = [
    // - генерация html из шаблона
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    // - Копирование статичыеских файлов из public в build
    new CopyWebpackPlugin({
      patterns: [{ from: "files", to: "files" }],
    }),
    // - экстракт css файлов
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    // позволяет передавать переменные из сборки
    new DefinePlugin({
      __PLATFOMR__: JSON.stringify(options.__PLATFOMR__),
      __ISDEV__: JSON.stringify(options.__ISDEV__),
    }),
  ];

  // ~ Плагины в сборках

  // !__dev
  if (isDev) {
  }

  // !__prod
  if (isProd) {
    // - процентр загрузки в логах только dev)
    plugins.push(new webpack.ProgressPlugin());

    // !__ bandle analizer ~ скрипт npm run build:analize
    if (options.analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
  }

  return plugins;
}
