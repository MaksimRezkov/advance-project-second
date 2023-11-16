declare module "*.scss" {
  interface IStyleCalsses {
    [className: string]: string;
  }
  const styleClasses: IStyleCalsses;
  export = styleClasses;
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
