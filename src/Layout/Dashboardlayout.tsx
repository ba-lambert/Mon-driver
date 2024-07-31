 import { Outlet } from "react-router-dom";
 //  import Sidebar from "../Component/sidebar";
 import NavBar from "../Component/dashboard/NavBar";
 import { useState } from "react";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import '@mantine/charts/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Button.css';
import './layout.css';
import ProtectedRoute from "../Component/Auth/ProtectedRoutes.tsx";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
      <ProtectedRoute>
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavBar toggleSidebar={toggleSidebar} />
        <main className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-10 relative w-full">
          <Outlet />
        </main>
      </div>
    </div>
      </ProtectedRoute>
  );
};

 export default DashboardLayout;
