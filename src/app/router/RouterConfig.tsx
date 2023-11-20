import { PathRouteProps } from 'react-router-dom';
import { HomeLazy } from 'pages/Home';
import { AboutLazy } from 'pages/About';
import { NotFound } from 'pages/NotFound';

export enum RouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN]: '/',
  [RouteNames.ABOUT]: '/about',
  [RouteNames.NOT_FOUND]: '*',
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
  {
    path: RoutePaths[RouteNames.NOT_FOUND],
    element: <NotFound/>,
  },
];
