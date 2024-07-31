import { useEffect, useRef, useState, FC } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Untitled-1-01.png";

// Import your SVG icons here
import { RiHome5Line as HomeIcon } from "react-icons/ri";
import { LiaBlogSolid as BlogsIcon} from "react-icons/lia";
import { FaCarRear as BookingsIcon} from "react-icons/fa6";
import { FaRegCalendarAlt as ChauffeursIcon} from "react-icons/fa";
import { IoSettingsOutline as SettingsIcon} from "react-icons/io5";
import { TbLogout as LogoutIcon} from "react-icons/tb";
import { FaUsers as Users } from "react-icons/fa6";


interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebarRef.current || !trigger.current) return;
            if (!sidebarOpen || sidebarRef.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    }, [sidebarOpen, setSidebarExpanded]);

  // Close if the ESC key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen, setSidebarOpen]);

    return (
        <aside
            ref={sidebarRef}
            style={sidebarStyles}
            className="absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden duration-300 ease-linear bg-blue-900 dark:bg-blue-950 lg:static lg:translate-x-0"
        >
            <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-20">
                <NavLink to="/">
                    <img src={Logo} alt='logo' className='w-28 h-auto cursor-pointer' />
                </NavLink>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                <NavItem title="Home" icon={<HomeIcon />} to="/dashboard" />
                <NavItem title="Blogs" icon={<BlogsIcon />} to="/dashboard/blogs" />
                <NavItem title="Users" icon={<Users />} to="/dashboard/users" />
                <NavItem title="Bookings" icon={<BookingsIcon />} to="/dashboard/bookings" />
                <NavItem title="Chauffeurs" icon={<ChauffeursIcon />} to="/dashboard/drivers" />
                <NavItem title="Settings" icon={<SettingsIcon />} to="/dashboard/settings" />
            </nav>

            <div className="px-4 py-2">
                <NavItem title="Logout" icon={<LogoutIcon />} to="/logout" />
            </div>
        </aside>
    );
};

export default Sidebar;


interface NavItemProps {
    title: string;
    icon: JSX.Element;
    to: string;
}

const NavItem: FC<NavItemProps> = ({ title, icon, to }) => {
    return (
        <NavLink
            to={to}
            className="flex items-center gap-3 p-4 text-white hover:bg-blue-700 dark:hover:bg-blue-800"
            activeClassName="bg-blue-800 dark:bg-blue-900"
        >
            {icon}
            <span>{title}</span>
        </NavLink>
    );
};