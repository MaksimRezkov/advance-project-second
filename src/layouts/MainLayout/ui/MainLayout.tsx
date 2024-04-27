import { FC, memo } from 'react';
import { Header } from 'widgets/Header/ui/Header';
import { Sidebar } from 'widgets/Sidebar';
import './MainLayout.scss';
import { Portal } from 'shared/Portal/ui/Portal';
import { LoginModal } from 'features/LoginModal';
import { useSelector } from 'react-redux';
import { getOpenLoginModal } from 'features/LoginModal/model/selectors/getOpenLoginModal/getOpenLoginModal';

const SidebarMemo = memo(Sidebar);

export const MainLayout: FC = ({ children }) => {
  const isLoginModalOpen = useSelector(getOpenLoginModal);

  return (
    <div className="app-layout">
      <Header/>
      <SidebarMemo/>
      <div className="layout_content-wrapp">
        { children }
      </div>

      {
        isLoginModalOpen &&
        <Portal>
          <LoginModal/>
        </Portal>
      }
    </div>
  );
};
