import webpack from "webpack";

// ~ декомпозиция
import { buildOutput } from "./buildOutput";
import { buildLoader } from "./buildLoader";
import { buildPlugin } from "./buildPlugin";
import { buildResolvers } from "./buildResolvers";
import { buildOptimization } from "./buildOptimization";
import { buildDevServer } from "./buildDevServer";
// ~ типы
import { int_BuildOptions } from "./types/types";

export function buildWebPack(options: int_BuildOptions): webpack.Configuration {
  return {
    // ~ Режим разработки (может быть режим production)
    mode: options.mode ?? "development",

    // ~ Входная точка
    entry: options.paths.entry,

    // ~ Выходная точка
    output: buildOutput(options),

    // ~ Плагины
    plugins: buildPlugin(options),

    // ~ Модули
    module: {
      rules: buildLoader(options),
    },

    // ~ оптимизация
    optimization: buildOptimization(options),

    // ~ Обрабатываемые файлы
    resolve: buildResolvers(options),

    // ~ Сервер
    devtool: "inline-source-map",
    devServer: buildDevServer(options),
  };
}
