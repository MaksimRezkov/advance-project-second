import path from 'path';
import { IBuildPaths } from '../build/types';
import { WebpackConfiguration } from 'webpack-dev-server';
import { buildStylesLoader } from '../common/buildStylesLoader';
import webpack, { RuleSetRule } from 'webpack';

/** Конфигурация вебпака для среды сторибука, у него она отдельная, дополняем дефолтные настройки */
export default ({ config }: { config: WebpackConfiguration }): WebpackConfiguration | undefined => {
  if (!config?.resolve || !config?.module) {
    console.warn('Not parameters in webpack config of storybook');
    return;
  }
  const paths: IBuildPaths = {
    bundleFileName: '',
    entry: '',
    moduleResolve: path.resolve(__dirname, '..', '..', 'src'),
    output: '',
    template: '',
  };

  const definePluginOpts = {
    _IS_DEV_: true,
    // _API_: buildOptions.apiUrl,
  };

  config.resolve?.modules?.push(paths.moduleResolve);
  config.resolve?.extensions?.push('.ts', 'tsx');
  config.module?.rules?.push(buildStylesLoader(true));

  // eslint-disable-next-line
  // @ts-ignore
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/i.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(new webpack.DefinePlugin(definePluginOpts));

  return config;
};
