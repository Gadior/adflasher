import webpack from "webpack";
import path from "path";
import { buildWebPack } from "./webpackConfig/buildWebPack";
import { int_BuildPaths, t_BuildMode } from "./webpackConfig/types/types";

interface int_EnvVars {
  mode: t_BuildMode;
  port: number;
  analyzer?: boolean;
}

// ___ export
export default (env: int_EnvVars) => {
  // ~ заполнение путей
  const paths: int_BuildPaths = {
    entry: "./src/index.tsx",
    html: path.resolve(__dirname, "public", "index.html"),
    output: path.resolve(__dirname, "build"),
  };

  //  ___ вызов конфига
  const config: webpack.Configuration = buildWebPack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths: paths,
    analyzer: env.analyzer,
  });

  return config;
};
