import { IAppPathRouteProps, RouteConfig, RoutePaths } from 'app/router/RouterConfig';
import { FC, memo, useMemo } from 'react';
import styleClasses from './HeaderItems.module.scss';
import { HeaderLinkItem } from '../HeaderLinkItem/HeaderLinkItem';

export interface IHeaderItemsProps {
  authUserId?: number
}

export const HeaderItems: FC<IHeaderItemsProps> = memo(({ authUserId }) => {
  const filteredLinks = useMemo(() => {
    return RouteConfig.filter((route: IAppPathRouteProps) => {
      return !route.hiddenLink && (authUserId || !route.authOnly);
    });
  }, [RoutePaths, RouteConfig, authUserId]);

  return (
    <div className={styleClasses.headerItems}>
      {
        filteredLinks
          .map(conf => <HeaderLinkItem key={conf.path} path={conf.path} title={conf.title || ''}/>)
      }
    </div>
  );
});
