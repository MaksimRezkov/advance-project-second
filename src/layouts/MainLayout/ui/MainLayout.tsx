import { FC, memo } from 'react';
import { Header } from 'widgets/Header/ui/Header';
import { Sidebar } from 'widgets/Sidebar';
import './MainLayout.scss';
import { useModalOpenContext } from 'app/lib/context/useModalOpenContext';
import { Modal } from 'shared/Modal';
import { Portal } from 'shared/Portal/ui/Portal';

const SidebarMemo = memo(Sidebar);

export const MainLayout: FC = ({ children }) => {
  const { isModalOpen } = useModalOpenContext();

  return (
    <div className="app-layout">
      <Header/>
      <SidebarMemo/>
      <div className="layout_content-wrapp">
        { children }
      </div>

      {
        isModalOpen && <Portal>
          <Modal title='Test modal'>
            <div className='test_modal'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio officiis nihil incidunt nesciunt magni! Explicabo tenetur mollitia consequatur odio, non saepe praesentium dignissimos ipsum accusamus inventore laudantium provident eius recusandae.</p>
            </div>
          </Modal>
        </Portal>
      }
    </div>
  );
};
