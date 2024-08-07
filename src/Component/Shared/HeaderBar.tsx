import React from "react";
import img1 from "../../assets/Web Assets/MonChauffeur-06.png";
import BookDriver from "../Main/BookingModal";
import tollFreeIc from '../../assets/Web Assets/MonChauffeur-12.png';

const HeaderBar: React.FC = () => {
    return (
        <nav
            className="flex flex-row sm:flex-row  sm:px-24 h-auto  sm:h-16 items-center justify-between ml-0 p-4 sm:p-0">
            <img
                src={img1}
                alt="logo"
                className="w-40 h-auto sm:w-auto sm:h-10 mb-4 mr-2  sm:mb-0"
            />
            <div className='flex flex-row justify-center items-center relative'>
                <img src={tollFreeIc} alt='call center' className='w-8'/>
                <p className='text-customGreen text-xs sm:text-xl font-semibold'>6200</p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 sm:space-x-5">
                <BookDriver styles={'xl'}/>
                <div className="px-3 hidden sm:block py-1 sm:px-6 sm:py-2 border-blue-950 border-2 rounded-2xl">
                    <p className="font-semibold text-sm sm:text-md ">RW</p>
                </div>
            </div>
        </nav>
    );
};

export default HeaderBar;
