import { IBuildOptions } from './types';
import webpack from 'webpack';
import { buildStylesLoader } from '../common/buildStylesLoader';

export function buildLoaders (buildOptions: IBuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const stylesLoader = buildStylesLoader(buildOptions.isDev);

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }],
        ],
      },
    },
  };

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    tsLoader,
    stylesLoader,
  ];
}
