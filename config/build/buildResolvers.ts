import webpack from 'webpack';
import { IBuildOptions } from './types';

export function buildResolvers (buildOptions: IBuildOptions): webpack.ResolveOptions {
  const { paths } = buildOptions;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.moduleResolve, 'node_modules'],
  };
}
