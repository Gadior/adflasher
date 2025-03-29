import { Configuration } from "webpack";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

import { int_BuildOptions } from "./types/types";

export function buildOptimization(
  options: int_BuildOptions
): Configuration["optimization"] {
  const isProd = options.mode === "production";

  // Общие
  const plugins: (CssMinimizerPlugin | TerserPlugin)[] = [];

  if (isProd) {
    plugins.push(
      new CssMinimizerPlugin(), // минификатор css
      new TerserPlugin() // Добавляем минификатор JS
    );
  }
  return {
    minimize: isProd,
    minimizer: plugins,
  };
}
