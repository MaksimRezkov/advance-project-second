import { IBuildOptions } from "./types";
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


export function buildPlugins(buildOptions: IBuildOptions): webpack.WebpackPluginInstance[] {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: buildOptions.paths.template,
  });

  return [
    htmlWebpackPlugin,
    new webpack.ProgressPlugin(),
  ];
}
