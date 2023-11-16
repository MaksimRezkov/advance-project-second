import { FC } from "react";
import { Header } from "widgets/Header/ui/Header";
import { Sidebar } from "widgets/Sidebar";
import "./MainLayout.scss";

export const MainLayout: FC = ({ children }) => {
  return (
    <div className="app-layout">
      <Header/>
      <Sidebar/>
      <div className="layout_content-wrapp">
        { children }
      </div>
    </div>
  );
};
