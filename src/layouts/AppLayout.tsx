import { Outlet } from "react-router";
import Header from "@/shared/components/Header/Header";
import { SideNavigation } from "rently-components";
import { useSidebar } from "@/shared/hooks/useSidebar";
import { GamepadDirectionalIcon } from "lucide-react";
import useSidebarOptions from "@/shared/hooks/useSidebarOptions";
import { useLoading } from "@/shared/store/useLoading";
import Loading from "@/shared/components/Loading/Loading";

const AppLayout = () => {
  const { open, setOpen } = useSidebar();
  const { loading } = useLoading();
  console.log({ loading });
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
      {loading && <Loading />}
    </div>
  );
};

export default AppLayout;
