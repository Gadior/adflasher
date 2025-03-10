import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";

// ~ settings
import { int_BuildOptions } from "./types/types";

export function buildDevServer(
  options: int_BuildOptions
): DevServerConfiguration {
  return {
    // Расположение статических файлов после сборки
    static: {
      directory: path.join(__dirname, "build"),
    },
    // Компресия
    compress: true,
    // Порт
    port: options.port ?? 3000,
    // релоуд страницы при разработке
    hot: true,
    // относительная адресация в путях
    historyApiFallback: true,
  };
}
