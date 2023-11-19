export interface IClassNamesParams {
  mainClassName: string
  additional?: string[]
  mods?: Record<string, boolean>
}

export function classNames (params: IClassNamesParams) {
  const { mainClassName, additional = [], mods = {} } = params;
  let classNameResult = mainClassName;

  additional.filter(Boolean).forEach((className: string) => {
    classNameResult += ` ${className}`;
  });

  Object.entries(mods).forEach(([modName, flag]) => {
    if (flag) classNameResult += ` ${modName}`;
  });

  return classNameResult;
}
