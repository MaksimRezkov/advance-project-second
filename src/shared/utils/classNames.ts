export interface IClassNamesParams {
  mainClassName: string;
  additional?: string[];
}

export function classNames(params: IClassNamesParams) {
  const { mainClassName, additional = [] } = params;
  let classNameResult = mainClassName;

  additional.forEach((className: string) => {
    classNameResult += ` ${className}`;
  });

  return classNameResult;
}
