import { Configuration } from "webpack";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

import { int_BuildOptions } from "./types/types";

export function buildOptimization(
  options: int_BuildOptions
): Configuration["optimization"] {
  return {
    minimizer: [new CssMinimizerPlugin()],
  };
}
