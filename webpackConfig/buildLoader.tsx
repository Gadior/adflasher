import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

// ~ settings
import { int_BuildOptions } from "./types/types";
import { BabelBuildLoader } from "./babel/babelBuildLoader";

export function buildLoader(options: int_BuildOptions): ModuleOptions["rules"] {
  // Тип сборки
  const isDev = options.mode === "development";

  // __ loaders ts or babel
  // #region
  const tsxLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const babelLoader = BabelBuildLoader(options);
  // #endregion

  const scssLoader = {
    test: /\.scss$/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader, // минифициурем
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [
              require("autoprefixer"), // Добавляет префиксы
            ],
          },
        },
      },
      "sass-loader", // Компилирует SCSS в CSS
    ],
  };

  const cssLoader = {
    test: /\.css$/,
    use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
  };

  const imagesLoader = {
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  };

  return [
    // --- tsx
    // tsxLoader,
    babelLoader,

    // --- scss
    scssLoader,

    // --- css
    cssLoader,

    // --- images
    imagesLoader,
  ];
}
