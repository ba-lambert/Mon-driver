import {Outlet}  from "react-router-dom";
import HeaderBar from "../Component/Shared/HeaderBar.tsx";
import Footer    from "../Component/Footer.tsx";
import SubNavBar from "../Component/Main/SubNavbar.tsx";
const MainLayout = () => {
    return (
        <div className=''>
            <HeaderBar />
            < SubNavBar/>
            <Outlet/>
            <Footer />
        </div>
    );
}
export default MainLayout;