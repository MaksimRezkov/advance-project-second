import { FC, memo } from 'react';
import { Header } from 'widgets/Header/ui/Header';
import { Sidebar } from 'widgets/Sidebar';
import './MainLayout.scss';
// import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';
import { Portal } from 'shared/Portal/ui/Portal';
import { LoginModal } from 'features/LoginModal';
import { useSelector } from 'react-redux';
import { getModalOpenFlag } from 'shared/Modal/model/selectors/getModalOpenFlag';

const SidebarMemo = memo(Sidebar);

export const MainLayout: FC = ({ children }) => {
  // const { isModalOpen } = useModalOpenContext();
  const isModalOpen = useSelector(getModalOpenFlag);

  return (
    <div className="app-layout">
      <Header/>
      <SidebarMemo/>
      <div className="layout_content-wrapp">
        { children }
      </div>

      {
        isModalOpen &&
        <Portal>
          <LoginModal/>
        </Portal>
      }
    </div>
  );
};
