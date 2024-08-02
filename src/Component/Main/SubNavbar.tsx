import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";

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
      <div className="flex justify-between sm:justify-end h-14 w-full bg-cover bg-center relative">
        {/* <img src={driverImage2} className="hidden sm:block sm:absolute top-0 left-0 sm:ml-10 w-20 h-20" /> */}
        <div className="flex justify-between items-center space-x-6 h-full px-4 w-full">
          <div className="flex ml-auto items-center"></div>
          <button
            className="sm:hidden mr-8 absolute text-white"
            onClick={handleMenuClick}
          >
            <FiMenu size={30} />
          </button>

          <ul className="hidden sm:flex flex-row text-white">
            <div className="flex sm:flex-row sm:space-x-5 space-x-3">
              <li className="ml-3">
                <Link to="/">
                  <button className="sm:text-md font-semibold">Home</button>
                </Link>
              </li>

              <li>
                <Link to="/aboutus">
                  <button className="text-sm sm:text-md font-semibold">
                    About
                  </button>
                </Link>
              </li>
            </div>
            <div className="flex sm:flex-row sm:space-x-5 space-x-3">
              <li>
                <Link to="/contactus">
                  <button className="text-sm sm:text-md font-semibold sm:left-0 sm:w-24">
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="sm:text-md sm:mt-4 sm:mr-0 text-sm sm:mb-0 mb-10 font-semibold"
                >
                  Log In
                </Link>
              </li>
            </div>
          </ul>

          {/* Other Elements */}
          <div className="flex items-center justify-center space-x-4">
            <button>
              <FiUser size={25} color="white" className="" />
            </button>
            <Link
              to="/monchauffeur"
              className="sm:text-lg text-md font-bold text-customBlue opacity-80"
            >
              My Chauffeurs
            </Link>
              <IoIosNotifications size={25} color="white" />
          </div>
        </div>

        {/* Popup Menu for Small Screens */}
        {showMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-50">
            <div className="bg-customGreen bg-opacity-95 text-white w-full h-full flex flex-col items-center justify-center space-y-10 relative">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={handleMenuClick}
              >
                <FiX size={30} />
              </button>
              <ul className="flex flex-col space-y-4 text-center">
                <li>
                  <Link to="/" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold">
                      Home
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={handleMenuItemClick}>
                    <button className="text-md sm:text-md font-semibold">
                      about
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={handleMenuItemClick}>
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
