import { IAppPathRouteProps, RouteConfig, RoutePaths } from 'app/router/RouterConfig';
import { FC, memo, useMemo } from 'react';
import { LinkButton } from 'shared/LinkButton';
import styleClasses from './HeaderItems.module.scss';
import { HeaderLinkItem } from '../HeaderLinkItem/HeaderLinkItem';

export interface IHeaderItemsProps {
  authUserId: number
}

export const HeaderItems: FC<IHeaderItemsProps> = memo(({ authUserId }) => {
  const filteredLinks = useMemo(() => {
    return RouteConfig.filter((conf: IAppPathRouteProps) => {
      return conf.path !== RoutePaths.not_found && (!authUserId ? conf.path !== RoutePaths.profile : true);
    });
  }, [RoutePaths, RouteConfig, authUserId]);

  return (
    <div className={styleClasses.headerItems}>
      {
        filteredLinks
          .map(conf => <HeaderLinkItem key={conf.path} path={conf.path} title={conf.title}/>)
      }
    </div>
  );
});
