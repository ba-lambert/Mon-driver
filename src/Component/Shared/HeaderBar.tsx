 import React from "react";
 import img1 from "../../assets/images/Mon Chauffeur Logo-02.png";
import BookDriver from "../Main/BookingModal";

 const HeaderBar: React.FC = () => {
   return (
     <nav className="flex flex-row sm:flex-row  sm:px-24 h-auto  sm:h-20 items-center justify-between ml-0 p-4 sm:p-0">
       <img
         src={img1}
         alt="logo"
         className="w-40 h-auto sm:w-auto sm:h-[70px] mb-4 mr-2  sm:mb-0"
       />
       <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-5">
       <BookDriver styles={'xl'} />
       <div className="px-3 py-1 sm:px-6 sm:py-2 border-blue-950 border-2 rounded-2xl">
         <p className="font-semibold text-sm sm:text-md ">RW</p>
       </div>
       </div>
     </nav>
   );
 };

 export default HeaderBar;
