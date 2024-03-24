declare module '*.scss' {
  type IStyleCalsses = Record<string, string>;
  const styleClasses: IStyleCalsses;
  export = styleClasses;
}

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare const _IS_DEV_: boolean;
declare const _API_: string;
declare const _PROJECT_: 'storybook' | 'frontend' | 'test';
