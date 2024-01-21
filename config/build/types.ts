export interface IBuildPaths {
  entry: string
  output: string
  template: string
  moduleResolve: string
  bundleFileName: string
}

export type BuildMode = 'development' | 'production';

export interface IBuildOptions {
  paths: IBuildPaths
  mode: BuildMode
  isDev: boolean
  port: number
  apiUrl: string
}

export interface IEnvOptions {
  port: number
  mode: BuildMode
  apiUrl: string
}
