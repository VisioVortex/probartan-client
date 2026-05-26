import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">

        <DashboardNavbar />

        <div className="p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;