export interface int_BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export type t_BuildMode = "production" | "development";

export type t_BuildENV = "production" | "development";

export type t_BuildPlatform = "desktop" | "mobile";

export interface int_BuildOptions {
  port?: number;
  paths: int_BuildPaths;
  mode: t_BuildMode;
  analyzer?: boolean;
  __PLATFOMR__?: t_BuildPlatform;
  __ISDEV__?: t_BuildENV;
}
