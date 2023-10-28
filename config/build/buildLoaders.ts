import { IBuildOptions } from "./types";
import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(buildOptions: IBuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssModuleLoader = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (resourcePath: string) => resourcePath.includes('.module.'),
      },
    },
  };
  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      buildOptions.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssModuleLoader,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [
    tsLoader,
    stylesLoader,
  ];
}
