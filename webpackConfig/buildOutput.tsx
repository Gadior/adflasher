import { Configuration } from "webpack";
import path from "path";

import { int_BuildOptions } from "./types/types";

export function buildOutput(
  options: int_BuildOptions
): Configuration["output"] {
  return {
    path: options.paths.output,
    filename: "bundle.[contenthash].js",
    clean: true,
  };
}
