 import React from "react";
 import img1 from "../../assets/images/Mon Chauffeur Logo-02.png";

 const HeaderBar: React.FC = () => {
   return (
     <nav className="flex flex-row sm:flex-row  sm:px-24 h-auto  sm:h-20 items-center justify-between ml-0 p-4 sm:p-0">
       <img
         src={img1}
         alt="logo"
         className="w-40 h-auto sm:w-auto sm:h-[70px] mb-4 mr-2  sm:mb-0"
       />
       <div className="flex flex-row items-center justify-center space-x-5">
       <div className="sm:px-6 sm:py-2 sm:w-36 bg-green-500 rounded-full sm:ml-80 mb-4 sm:mb-0">
         <p className="text-md sm:text-md font-semibold text-white">
           Hire a driver
         </p>
       </div>
       <div className="px-6 py-2 border-blue-950 border-2 rounded-2xl">
         <p className="font-semibold text-sm sm:text-md ">RW</p>
       </div>
       </div>
     </nav>
   );
 };

 export default HeaderBar;
