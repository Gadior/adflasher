import webpack from "webpack";
import path from "path";
import { buildWebPack } from "./webpackConfig/buildWebPack";
import {
  int_BuildPaths,
  t_BuildENV,
  t_BuildMode,
  t_BuildPlatform,
} from "./webpackConfig/types/types";

interface int_EnvVars {
  mode: t_BuildMode;
  port?: number;
  analyzer?: boolean;
  __PLATFOMR__?: t_BuildPlatform;
  __ISDEV__?: t_BuildENV;
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
    __PLATFOMR__: env.__PLATFOMR__ ?? "desktop",
    __ISDEV__: env.__ISDEV__ ?? "production",
  });

  return config;
};
