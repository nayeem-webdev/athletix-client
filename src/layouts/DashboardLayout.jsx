import { Outlet } from "react-router-dom";

import DashboardNavbar from "../components/dashboard-components/DashboardNavbar";
import DashboardSideNav from "../components/dashboard-components/DashboardSideNav";
import { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <DashboardNavbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="flex h-screen text-black dark:text-white py-[64px]">
        <DashboardSideNav toggleSidebar={toggleSidebar} isOpen={isOpen} />

        {/* Outlet */}
        <div className="flex-1 overflow-hidden p-4">
          <div className="overflow-auto">
            <Outlet />{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
