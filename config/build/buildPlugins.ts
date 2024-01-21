import { IBuildOptions } from './types';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildPlugins (buildOptions: IBuildOptions): webpack.WebpackPluginInstance[] {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: buildOptions.paths.template,
  });

  const definePluginOpts = {
    _IS_DEV_: buildOptions.isDev,
    // _API_: buildOptions.apiUrl,
  };

  return [
    htmlWebpackPlugin,
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash].css',
    }),
    new webpack.DefinePlugin(definePluginOpts),
  ];
}
