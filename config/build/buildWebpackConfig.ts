import webpack from 'webpack';
import { IBuildOptions } from './types';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig (buildOptions: IBuildOptions): webpack.Configuration {
  return {
    mode: buildOptions.mode,
    entry: buildOptions.paths.entry,
    output: {
      filename: buildOptions.paths.bundleFileName,
      path: buildOptions.paths.output,
      clean: true,
    },
    plugins: buildPlugins(buildOptions),
    module: {
        rules: buildLoaders(buildOptions),
    },
    resolve: buildResolvers(buildOptions),
    devtool: buildOptions.isDev ? 'inline-source-map' : undefined,
    devServer: buildDevServer(buildOptions),
  };
}
