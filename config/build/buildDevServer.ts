import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { IBuildOptions } from './types';

export function buildDevServer (buildOptions: IBuildOptions): DevServerConfiguration {
  return {
    historyApiFallback: true,
  };
}
