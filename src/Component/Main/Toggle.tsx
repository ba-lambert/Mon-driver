 import  { useState, useEffect } from "react";
 import BookingModal from "../Main/BookingModal";
 import ch23 from "../../assets/images/f2.jpg";
 import ch2 from "../../assets/images/f.jpg";
 import ch from "../../assets/images/4.jpg";
 import driverImage from "../../assets/images/ch1.jpg";
 import driverImage1 from "../../assets/images/ch2.jpg";
 import ho from "../../assets/images/ho.webp";
 import lg from "../../assets/images/lg.png";
 import { Link } from "react-router-dom";

 const DriverRecruitmentForm = () => {
   const [modalIsOpen] = useState(false);

   useEffect(() => {
     if (modalIsOpen) {
       document.body.classList.add("no-scroll");

       const overlay = document.createElement("div");
       overlay.className = "fixed-background";
       document.body.appendChild(overlay);
       return () => {
         document.body.classList.remove("no-scroll");
         document.body.removeChild(overlay);
       };
     }
   }, [modalIsOpen]);

   return (
     <div className="">
       <div
         className="relative min-h-screen bg-cover bg-center flex flex-col"
         // style={{ backgroundImage: `url(${ch23})` }}
       >
         <div className="absolute inset-0 bg-black opacity-20 "></div>
         <div className="flex sm:flex-row flex-col max-w-screen-lg mx-auto">
           <div className="relative bg-opacity-80 sm:w-full sm:max-w-2xl p-8 mt-36 font-sans font-semibold text-white text-lg">
             <p className="text-3xl mb-10 text-green-500">
               We prioritize your safety and comfort
             </p>
             <div className="flex sm:w-auto w-full">
               <div className="flex flex-col w-full justify-center sm:justify-start">
                 <div className="flex w-full justify-between">
                   <p>
                     Enjoy seamless travel with our professional drivers.
                     Skilled and courteous, they ensure safe and comfortable
                     journeys to your desired destinations. Relax and let us
                     handle the driving.
                   </p>
                 </div>
                 <div className="mt-10 font-sans not-italic flex flex-row space-x-4">
                   <Link
                     to="/contactus"
                     className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-green-500"
                   >
                     Contact us
                   </Link>

                   <BookingModal />
                 </div>
               </div>
             </div>
           </div>
           <div className="hidden sm:block">
             <img src={ho} alt="" className="" />
           </div>
         </div>
       </div>
       <div className="w-full grid md:grid-cols-4 grid-cols-1 bg-emerald-100 bg-opacity-90 p-8 text-gray-500 font-sans rounded-lg shadow-lg">
         <div className="flex flex-col mx-auto">
           <img
             src={driverImage}
             alt="Driver"
             className="ring-0 ring-offset-customGreen ring-offset-[5px] rounded-full object-cover h-32 w-32 sm:mb-0 sm:mr-4"
           />
           <div className="mt-10">
             <p className="text-lg font-bold">Trust</p>
             <p className="text-md">
               With our fleet of trained, verified, and trusted drivers, we make
               the drive better and safer for you and your family.
             </p>
           </div>
         </div>
         <div className="flex flex-col ml-7">
           <img
             src={driverImage1}
             alt="Driver"
             className="w-32 h-32 rounded-full ring-0 ring-offset-customGreen ring-offset-[5px] object-cover sm:mb-0 sm:mr-4"
           />
           <div className="mt-10">
             <p className="text-lg font-bold">Secure</p>
             <p className="text-md">
               DriveU Secure helps you insure your drives from vehicle damages
               and personal injuries, while we insure our drivers for all trips.
             </p>
           </div>
         </div>
         <div className="flex flex-col ml-7">
           <img
             src={ch2}
             alt="Driver"
             className="ring-0 ring-offset-customGreen ring-offset-[5px] rounded-full object-cover h-32 w-32 sm:mb-0 sm:mr-4"
           />
           <div className="mt-10">
             <p className="text-md font-bold">Versatile</p>
             <p className="text-md">
               Book a driver for daily office commutes, mid-day shopping,
               night-outs, airport transfers, or weekend getaways with our
               hourly packages.
             </p>
           </div>
         </div>
         <div className="">
           <img src={lg} />
           <img src={ch} className="h-72 w-72 rounded-full object-cover" />
         </div>
       </div>
     </div>
   );
 };

 export default DriverRecruitmentForm;
