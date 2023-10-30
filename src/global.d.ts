declare module "*.scss" {
  interface IStyleCalsses {
    [className: string]: string;
  }
  const styleClasses: IStyleCalsses;
  export = styleClasses;
}
