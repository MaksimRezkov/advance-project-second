import { IBuildOptions } from "./types";
import webpack from 'webpack';

export function buildLoaders(buildOptions: IBuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  return [
    tsLoader,
  ];
}
