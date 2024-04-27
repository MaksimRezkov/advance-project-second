import { FC, memo } from 'react';
import { Header } from 'widgets/Header/ui/Header';
import { Sidebar } from 'widgets/Sidebar';
import './MainLayout.scss';
import { LoginModalPortal } from './Portals/LoginModalPortal/LoginModalPortal';

const SidebarMemo = memo(Sidebar);

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="app-layout">
      <Header/>
      <SidebarMemo/>
      <div className="layout_content-wrapp">
        { children }
      </div>
      <LoginModalPortal/>
    </div>
  );
};
