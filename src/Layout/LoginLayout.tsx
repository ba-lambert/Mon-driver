// components/LoginLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Component/Footer";

const LoginLayout: React.FC = () => {
  return (
    <div>
      <main className="min-h-screen">
        <Outlet/>
     </main>
      < Footer/> 
    </div>
  );
};

export default LoginLayout;
