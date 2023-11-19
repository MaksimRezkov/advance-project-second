import { FC, useMemo, useState } from 'react';
import { classNames } from 'shared/utils/classNames';
import './Sidebar.scss';
import { Button } from 'shared/Button/ui/Button';
import ArrowSvgDark from 'shared/assets/icons/chevron-down.svg';
import ArrowSvgLight from 'shared/assets/icons/chewron-down-light.svg';
import { useThemeContext } from 'app/lib/context/useThemeContext';

export const Sidebar: FC = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);
  const classNameSidebar: string = useMemo(() => classNames({
      mainClassName: 'app-sidebar',
      additional: ['flex-j-center'],
      mods: {
        'app-sidebar__collapsed': isCollapsed,
      },
    }),
    [isCollapsed],
  );

  const additionalClassesBtn = useMemo(() => {
      if (isCollapsed) return ['noBorder', 'toggle-sidebar-arrow', 'flex-all-center', 'rotate-toggle-sidebar'];
      return ['noBorder', 'toggle-sidebar-arrow', 'flex-all-center'];
    },
    [isCollapsed],
  );

  const { themeValue } = useThemeContext();

  return (
    <>
      <div className={classNameSidebar}>
        <Button
          onClick={() => { setCollapsed(!isCollapsed); }}
          additionalClasses={additionalClassesBtn}
          hovered={false}
        >
          {themeValue === 'light' ? <ArrowSvgDark /> : <ArrowSvgLight/>}
        </Button>
      </div>
    </>
  );
};
