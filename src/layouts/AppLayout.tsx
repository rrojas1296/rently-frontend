import { Outlet } from "react-router";
import Header from "../modules/common/components/Header/Header";
import Sidebar from "../modules/common/components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="lg:flex h-dvh">
      <Sidebar />
      <div className="flex-1 z-10 overflow-y-auto custom-scroll">
        <Header />
        <div className="p-5 lg:p-6 text-text-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
