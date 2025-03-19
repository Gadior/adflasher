import { int_BuildOptions } from "../types/types";

export function BabelBuildLoader(options: int_BuildOptions) {
  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          "@babel/preset-react",
        ],
      },
    },
  };
}
