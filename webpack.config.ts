import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IBuildOptions, IBuildPaths, IEnvOptions, ProjectEnv } from './config/build/types';

export default function (env: IEnvOptions): webpack.Configuration {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000/';
    const paths: IBuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        moduleResolve: path.resolve(__dirname, 'src'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        bundleFileName: '[name].[contenthash].js',
    };

    const buildOptions: IBuildOptions = {
        mode,
        isDev,
        paths,
        port,
        apiUrl,
        project: JSON.stringify('frontend') as ProjectEnv,
    };
    console.log('build opts', buildOptions);

    return buildWebpackConfig(buildOptions);
};
