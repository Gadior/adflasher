import { Configuration } from "webpack";
import { int_BuildOptions } from "./types/types";

export function buildResolvers(
  options: int_BuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  };
}
