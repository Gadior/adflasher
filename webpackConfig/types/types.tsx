export interface int_BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export type t_BuildMode = "production" | "development";

export interface int_BuildOptions {
  port: number;
  paths: int_BuildPaths;
  mode: t_BuildMode;
  analyzer?: boolean;
}
