import { FaBars as HamburgerIcon } from "react-icons/fa";
interface NavBarProps {
  toggleSidebar: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleSidebar }) => {
    return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-4 flex items-center justify-between">
      <button
        onClick={toggleSidebar}
        className="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
      >
        <HamburgerIcon size={24} />
      </button>
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Dashboard</h1>
      <div className="flex items-center">
          <p>{user?.username}</p>
      </div>
    </nav>
  );
};

export default NavBar;
