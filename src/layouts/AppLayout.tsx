import { Outlet } from "react-router";
import Header from "../modules/common/components/Header/Header";
import Sidebar from "../modules/common/components/Sidebar/Sidebar";

const AppLayout = () => {
  return (
    <div className="lg:flex h-screen overflow-auto custom-scroll">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5 lg:p-6 text-text-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
