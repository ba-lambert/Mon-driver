 import { Outlet } from "react-router-dom";
import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import '@mantine/charts/styles.layer.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/core/styles/Input.css';
import '@mantine/core/styles/Button.css';
import './layout.css';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main className="mx-auto max-w-screen-3xl p-4 md:p-6 2xl:p-10 relative w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

 export default DashboardLayout;
