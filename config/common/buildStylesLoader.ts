import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export function buildStylesLoader (isDev: boolean): webpack.RuleSetRule {
  const cssModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        auto: (resourcePath: string) => resourcePath.includes('.module.'),
        // Имена классов стилей в реж. isDev читаемые
        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
      },
    },
  };

  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssModuleLoader,
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
}
