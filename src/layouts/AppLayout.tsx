import { Outlet } from "react-router";
import Header from "../modules/common/components/Header/Header";
import { SideNavigation } from "rently-components";
import { useSidebar } from "../store/useSidebar";
import { GamepadDirectionalIcon } from "lucide-react";
import useSidebarOptions from "../modules/common/hooks/useSidebarOptions";

const AppLayout = () => {
  const { open, setOpen } = useSidebar();
  const { sections, pathname } = useSidebarOptions();
  return (
    <div className="lg:flex h-dvh">
      <SideNavigation
        IconHeader={GamepadDirectionalIcon}
        textHeader="Rently"
        containerClassName="lg:relative"
        sections={sections}
        pathname={pathname}
        open={open}
        setOpen={setOpen}
      />
      <div className="flex-1 flex flex-col z-10 h-dvh overflow-y-auto custom-scroll">
        <Header />
        <div className="p-5 lg:p-6 text-text-1 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
