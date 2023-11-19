import { PathRouteProps } from 'react-router-dom';
import { HomeLazy } from 'pages/Home';
import { AboutLazy } from 'pages/About';

export enum RouteNames {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN]: '/',
  [RouteNames.ABOUT]: '/about',
};

export const RouteConfig: PathRouteProps[] = [
  {
    path: RoutePaths[RouteNames.MAIN],
    element: <HomeLazy/>,
  },
  {
    path: RoutePaths[RouteNames.ABOUT],
    element: <AboutLazy/>,
  },
];
