import { IAppPathRouteProps, RouteConfig } from 'app/router/RouterConfig';
import { getAuthUserId } from 'entityes/AuthUser';
import { useMemo } from 'react';
import { useAppSelector } from 'store/lib/hooks/useAppSelector';

export function useRouteLinksList (): IAppPathRouteProps[] {
  const authUserId = useAppSelector(getAuthUserId);
  return useMemo(() => {
    return RouteConfig.filter(route => authUserId || !route.authOnly);
  }, [authUserId, RouteConfig]);
};
