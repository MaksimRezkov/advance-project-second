import { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLazy } from "../pages/Home";
import { AboutLazy } from "../pages/About";
import { IClassNamesParams, classNames } from "../shared/utils/classNames";
import { useThemeContext } from "./lib/context/useThemeContext";

export const App: FC = () => {
  const { themeValue } = useThemeContext();
  const appClassNames: IClassNamesParams = {
    mainClassName: 'app',
    additional: [themeValue],
  };

  return (
    <div className={classNames(appClassNames)}>
      <Suspense fallback={"Загрузка"}>
        <Routes>
          <Route path="/" element={<HomeLazy/>}></Route>
          <Route path="/about" element={<AboutLazy/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
