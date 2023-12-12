import { FC, useMemo, useState } from 'react';
import { classNames } from 'shared/utils/classNames';
import styleClasses from './Sidebar.module.scss';
import { Button, ButtonSizes } from 'shared/Button/ui/Button';
import ArrowSvgDark from 'shared/assets/icons/chevron-down.svg';
import ArrowSvgLight from 'shared/assets/icons/chewron-down-light.svg';
import { useThemeContext } from 'app/lib/context/useThemeContext';
import { LinkButton } from 'shared/LinkButton';
import { RoutePaths } from 'app/router/RouterConfig';
import HomeSvg from 'shared/assets/icons/home.svg';
import AboutSvg from 'shared/assets/icons/about.svg';

export const Sidebar: FC = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const classNameSidebar: string = useMemo(() => classNames({
      mainClassName: styleClasses.appSidebar,
      additional: ['flex-align-center', 'flex-column'],
      mods: {
        [styleClasses.appSidebarCollapsed]: isCollapsed,
      },
    }),
    [isCollapsed],
  );

  const additionalClassesBtn = useMemo(() => {
      const classes = ['noBorder', styleClasses.toggleSidebarArrow, 'flex-all-center'];
      if (isCollapsed) {
        classes.push(styleClasses.rotateToggleSidebar);
      }
      return classes;
    },
    [isCollapsed],
  );

  const { themeValue } = useThemeContext();

  return (
    <>
      <div data-testid="sidebar" className={classNameSidebar}>
        <Button
          onClick={() => { setCollapsed(!isCollapsed); }}
          additionalClasses={additionalClassesBtn}
          hovered={false}
          testId="toggleBtn"
          size={ButtonSizes.L}
        >
          {themeValue === 'light' ? <ArrowSvgDark /> : <ArrowSvgLight/>}
        </Button>

        <div className={classNames({ mainClassName: styleClasses.items, additional: ['flex-column'] })}>
          <div
            className={
              classNames({
                mainClassName: styleClasses.item,
              })
            }
          >
            <LinkButton
              to={RoutePaths.main}
              outline={false}
              additionalClassNames={[styleClasses.link, 'flex-align-center']}
            >
              <HomeSvg/>
              Home
            </LinkButton>
          </div>
          <div
            className={
              classNames({
                mainClassName: styleClasses.item,
              })
            }
          >
            <LinkButton
              to={RoutePaths.about}
              outline={false}
              additionalClassNames={[styleClasses.link, 'flex-align-center']}
            >
              <AboutSvg />
              About
            </LinkButton>
          </div>
        </div>
      </div>
    </>
  );
};
