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

  const svgLoader = {
    test: /\.(svg)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  };

  const webpLoader = {
    test: /\.(webp)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  };

  const gifLoader = {
    test: /\.(gif)$/i,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  };

  const imagesLoader = {
    test: /\.(png|jpe?g)$/i, // Убрали svg - его в WebP не конвертируют
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      // {
      //   loader: "image-webpack-loader",
      //   options: {
      //     mozjpeg: { progressive: true, quality: 70 },
      //     webp: {
      //       quality: 75,
      //       enabled: true, // Явно включаем
      //       force: true, // Игнорировать другие форматы
      //     },
      //     optipng: { enabled: false },
      //     pngquant: { quality: [0.75, 0.9], speed: 4 },
      //   },
      // },
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

    // --- svg
    svgLoader,

    // --- webp
    webpLoader,

    // --- gif
    gifLoader,

    // --- images
    imagesLoader,
  ];
}
