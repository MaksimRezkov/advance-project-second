import { PathRouteProps } from 'react-router-dom';
import { HomeLazy } from 'pages/Home';
import { AboutLazy } from 'pages/About';
import { NotFound } from 'pages/NotFound';
import { ProfilePage } from 'pages/ProfilePage';

export enum RouteNames {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',

  NOT_FOUND = 'not_found',
}

export const RouteTitles: Record<string, string> = {
  [RouteNames.ABOUT]: 'О приложении',
  [RouteNames.MAIN]: 'Главная',
  [RouteNames.PROFILE]: 'Профиль',
};

export const RoutePaths: Record<RouteNames, string> = {
  [RouteNames.MAIN]: '/',
  [RouteNames.ABOUT]: '/about',
  [RouteNames.PROFILE]: '/profile',

  [RouteNames.NOT_FOUND]: '*',
};

export interface IAppPathRouteProps extends PathRouteProps {
 title?: string
 authOnly?: boolean
 hiddenLink?: boolean
}

export const RouteConfig: IAppPathRouteProps[] = [
  {
    path: RoutePaths[RouteNames.MAIN],
    element: <HomeLazy/>,
    title: RouteTitles[RouteNames.MAIN],
  },
  {
    path: RoutePaths[RouteNames.ABOUT],
    element: <AboutLazy/>,
    title: RouteTitles[RouteNames.ABOUT],
  },
  {
    path: RoutePaths[RouteNames.PROFILE],
    element: <ProfilePage/>,
    title: RouteTitles[RouteNames.PROFILE],
    authOnly: true,
  },

  {
    path: RoutePaths[RouteNames.NOT_FOUND],
    element: <NotFound/>,
    hiddenLink: true,
  },
];
