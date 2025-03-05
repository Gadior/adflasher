const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // Импортируем плагин

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/", // Указываем корневой путь
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Встраивает стили в DOM
          "css-loader", // Обрабатывает CSS
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
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // Очищает папку 'build' перед каждой сборкой
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // Копирование файла из папки public  в экспортную папку
    new CopyWebpackPlugin({
      patterns: [
        // 1
        {
          from: path.resolve(__dirname, "public/files/1/index.html"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/1/index.html"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/1/index.js"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/1/index.js"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/1/index_atlas_NP_.jpg"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/1/index_atlas_NP_.jpg"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/1/index_atlas_P_.png"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/1/index_atlas_P_.png"), // В папку build
        },
        // 2
        {
          from: path.resolve(__dirname, "public/files/2/index.html"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/2/index.html"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/2/index.js"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/2/index.js"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/2/index_atlas_NP_.jpg"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/2/index_atlas_NP_.jpg"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/2/index_atlas_P_.png"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/2/index_atlas_P_.png"), // В папку build
        },
        // 3
        {
          from: path.resolve(__dirname, "public/files/3/index.html"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/3/index.html"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/3/index.js"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/3/index.js"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/3/index_atlas_NP_.jpg"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/3/index_atlas_NP_.jpg"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/3/index_atlas_P_.png"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/3/index_atlas_P_.png"), // В папку build
        },
        // 4
        {
          from: path.resolve(__dirname, "public/files/4/index.html"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/4/index.html"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/4/index.js"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/4/index.js"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/4/index_atlas_NP_.jpg"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/4/index_atlas_NP_.jpg"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/4/index_atlas_P_.png"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/4/index_atlas_P_.png"), // В папку build
        },
        // 5
        {
          from: path.resolve(__dirname, "public/files/5/index.html"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/5/index.html"), // В папку build
        },
        {
          from: path.resolve(__dirname, "public/files/5/index.js"), // Копируем index.html
          to: path.resolve(__dirname, "build/files/5/index.js"), // В папку build
        },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 3000,
    hot: true, // Включаем Hot Module Replacement
    historyApiFallback: true,
  },
};
