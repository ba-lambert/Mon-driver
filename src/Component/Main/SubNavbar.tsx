import React, { useState } from "react";
import not from "../../assets/images/notif.svg";
import { Link } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import driverImage2 from "../../assets/images/cc.png";

const SubNavBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex justify-between sm:justify-end h-auto bg-customGreen bg-opacity-95 bg-cover bg-center">
      <div className="flex justify-between sm:justify-end h-20 w-full bg-cover bg-center relative">
        <img src={driverImage2} className="hidden sm:absolute top-0 left-0 sm:ml-10 w-20 h-20" />
        <div className="flex justify-between items-center h-full px-4 w-full">
          <div className="flex ml-auto items-center"></div>
          <button
            className="sm:hidden mr-8 absolute text-white"
            onClick={handleMenuClick}
          >
            <FiMenu size={30} />
          </button>

          {/* Menu Items */}
          <ul className="sm:flex hidden sm:flex-row sm:space-x-5 space-x-3 text-white sm:mt-7 sm:ml-4 sm:p-0">
            <div className="flex sm:flex-row sm:space-x-5 space-x-3">
              <li className="ml-3">
                <Link to="/Landingpage">
                  <button className="sm:text-md font-semibold">Home</button>
                </Link>
              </li>

              <li>
                <Link to="/Driverpage">
                  <button className="text-sm sm:text-md font-semibold">
                    Drivers
                  </button>
                </Link>
              </li>
            </div>
            <div className="flex sm:flex-row sm:space-x-5 space-x-3">
              <li>
                <Link to="/ContactUsPage">
                  <button className="text-sm sm:text-md font-semibold sm:left-0 sm:w-24">
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to="/LogIn"
                  className="sm:text-md sm:mt-4 sm:mr-0 text-sm sm:mb-0 mb-10 font-semibold"
                >
                  Log In
                </Link>
              </li>
            </div>
          </ul>

          {/* Other Elements */}
          <div className="flex items-center sm:mt-2 sm:ml-14 space-x-4">
            <button>
              <FiUser size={30} color="white" className="" />
            </button>
            <Link
              to="/monchauffeur"
              className="sm:text-lg text-md font-bold text-customBlue opacity-80"
            >
              My Chauffeurs
            </Link>

            <div>
              <img
                src={not}
                alt="Notifications"
                className="sm:h-[60px] h-[60px]"
              />
            </div>
          </div>
        </div>

        {/* Popup Menu for Small Screens */}
        {showMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-customGreen bg-opacity-95 text-white w-full h-full flex flex-col items-center justify-center space-y-10 relative">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={handleMenuClick}
              >
                <FiX size={30} />
              </button>
              <ul className="flex flex-col space-y-4 text-center">
                <li>
                  <Link to="/Landingpage" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/Driverpage" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold">
                      Drivers
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/ContactUsPage" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold w-20 sm:w-24">
                      Contact Us
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/LogIn" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold">
                      Log In
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubNavBar;
