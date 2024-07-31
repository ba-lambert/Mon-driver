 import React, { useState } from "react";
 import { Link } from "react-router-dom";
 import CallToActionSection from "./CallToAction";
 
 import cm from "../../assets/images/com.svg";
 import { LuHistory } from "react-icons/lu";
 import { IoIosArrowForward } from "react-icons/io";
 import { AiFillStar, AiOutlineStar } from "react-icons/ai";
 import pe1 from "../../assets/images/p1.jpeg";
 import pe2 from "../../assets/images/p2.jpeg";
 import pe3 from "../../assets/images/p3.jpg";


 interface DriverInfo {
   name: string;
   avatar: string;
   letters: string;
   text: string;
 }

 const drivers: DriverInfo[] = [
   { name: "Jeira Wren", avatar: pe1, letters: "ABC", text: "Hire again" },
   { name: "Ava Smith", avatar: pe2, letters: "DEF", text: "Hire again" },
   { name: "Ella Brown", avatar: pe3, letters: "GHI", text: "Hire again" },
 ];

 const Monchauffeur: React.FC = () => {
   const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0]);
    

   const handleRatingClick = (index: number, rating: number) => {
     const newRatings = [...ratings];
     newRatings[index] = rating;
     setRatings(newRatings);
   };
    

   const ListOfBlogs = [
     {
       title: "Don't Drink and drive",
       image:
         "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
     },
     {
       title: "EV Charging near you in Kigali",
       image:
         "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
     },
     {
       title: "Burundi combats high fuel rates",
       image:
         "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
     },
   ];

   return (
     <div className="min-h-screen">
       
       <div className="container text-white text-3xl bg-customBlue mt-0 h-28">
         <p className="text-center flex justify-center pt-9">
           Good Evening <span className="font-bold ml-5 text-3xl">Paul !</span>
         </p>
       </div>
       <div className="bg-customBlue min-h-screen flex  flex-col items-center justify-center">
         <div className="bg-white shadow sm:flex-row flex-col rounded-lg   sm:w-82 p-4 flex text-center justify-center sm:mr-10    sm:ml-20 h-auto">
           <h2 className="text-3xl mt-6 font-bold text-customBlue">
             Kagabo Paul
           </h2>
           <div className="">
             <p className="mt-4 text-yellow-800 sm:ml-16 ">Gold client</p>
             <p className="bg-slate-100 rounded-full font-bold text-emerald-500 w-30 pl-2 pr-2 sm:ml-28 mt-3">
               2/10 left to get a gift
             </p>
           </div>
           <ul className="mt-4 text-gray-600 sm:ml-16">
             <li>Telephone: 078xxxxxx</li>
             <li className="ml-8">Email: home@g5mail.com</li>
             <li className="ml-9">Address: Kigali, Nyarugenge</li>
           </ul>
         </div>
         <div className="flex flex-wrap">
           <div className="mt-16 sm:ml-0 ml-20">
             <div>
               <p className="text-green-500 ml-20 flex text-2xl">
                 <span className="mt-1 mr-2">
                   <LuHistory />
                 </span>
                 History
               </p>
             </div>
             <div className="rounded-2xl border-2 border-emerald-500">
               <p className="flex mt-1 mb-1">
                 <span className="text-emerald-500 border-r-2 text-sm pl-2">
                   yesterday
                 </span>
                 <span className="pl-2 text-white pr-2 text-sm flex">
                   nyamirambo -
                   <span className="mt-1 mr-2">
                     <IoIosArrowForward />
                   </span>
                   kanombe
                 </span>
               </p>
               <p className="bg-emerald-500 rounded-b-2xl text-center text-white">
                 How was the driver
               </p>
             </div>
             <div className="rounded-2xl border-2 border-emerald-500 mt-2">
               <p className="flex mt-1 mb-1">
                 <span className="text-emerald-500 border-r-2 text-sm pl-2">
                   yesterday
                 </span>
                 <span className="pl-2 text-white pr-2 text-sm flex">
                   nyamirambo -
                   <span className="mt-1 mr-2">
                     <IoIosArrowForward />
                   </span>
                   kanombe
                 </span>
               </p>
               <p className="bg-emerald-500 rounded-b-2xl text-center text-white">
                 How was the driver
               </p>
             </div>
             <div className="rounded-2xl border-2 border-emerald-500 mt-2">
               <p className="flex mt-1 mb-1">
                 <span className="text-emerald-500 border-r-2 text-sm pl-2">
                   yesterday
                 </span>
                 <span className="pl-2 text-white pr-2 text-sm flex">
                   nyamirambo -
                   <span className="mt-1 mr-2">
                     <IoIosArrowForward />
                   </span>
                   kanombe
                 </span>
               </p>
               <p className="bg-emerald-500 rounded-b-2xl text-center text-white">
                 How was the driver
               </p>
             </div>
           </div>
           <div className="mt-24 sm:ml-24 ml-14 h-auto mb-10">
             <p className="rounded-full bg-emerald-500 w-80 h-10 text-center">
               <span className="text-white">My drivers</span>
             </p>
             {drivers.map((driver, idx) => (
               <div
                 key={idx}
                 className="flex    flex-row items-center  mr-11 rounded-lg overflow-hidden h-auto relative group mt-5 lg:mt-5"
               >
                 l
                 <img
                   src={driver.avatar}
                   alt="Driver avatar"
                   className="w-16 h-20 sm:mt-5  lg:mt-0 rounded-lg"
                 />
                 <div className="w-72 h-20 bg-blue-100 flex flex-row items-center ml-4">
                   <div className="flex   items-start  flex-row lg:items-center justify-between w-full">
                     <div>
                       <p className="text-customGreen text-center lg:text-left lg:ml-3 font-semibold">
                         {driver.name}
                       </p>
                       <div className="flex justify-center lg:justify-start space-x-3">
                         <p className="text-gray-600">female</p>
                         {driver.letters.split("").map((letter, index) => (
                           <div
                             key={index}
                             className="border-2 border-gray-600 rounded-lg p-2 h-2 w-2 relative mt-1 bg-lightBlue"
                           >
                             <p className="absolute inset-0 flex items-center justify-center text-gray-600 rounded-lg">
                               {letter}
                             </p>
                           </div>
                         ))}
                       </div>
                       <div className="flex justify-center lg:justify-start space-x-1">
                         {[...Array(5)].map((_, index) => (
                           <div
                             key={index}
                             className="rounded-lg p-2 h-2 w-2 relative mt-1 bg-lightBlue"
                             onClick={() => handleRatingClick(idx, index + 1)}
                           >
                             {ratings[idx] >= index + 1 ? (
                               <AiFillStar className="absolute inset-0 flex items-center justify-center text-customGreen rounded-lg" />
                             ) : (
                               <AiOutlineStar className="absolute inset-0 flex items-center justify-center text-gray-600 rounded-lg" />
                             )}
                           </div>
                         ))}
                       </div>
                     </div>
                     <Link to="/BookingPage">
                       <button className="sm:w-28 w-20 lg:ml-5 h-20 rounded-r-lg  bg-emerald-500 text-white font-semibold">
                         {driver.text}
                       </button>
                     </Link>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </div>
         <div className="text-2xl text-white p-2">
           Things you may want to know
         </div>
         <div className="flex flex-wrap  space-x-6 mb-28">
           {ListOfBlogs &&
             ListOfBlogs.map((blog, index) => (
               <div
                 key={index}
                 className=" w-72 h-48 border-blue-950 border-2 sm:mb-0 mb-24 sm:ml-0 ml-5 rounded-t-lg"
               >
                 <img
                   src={blog.image}
                   alt={blog.title}
                   className="w-full h-full object-cover rounded-lg shadow-lg"
                 />
                 <div className="  bg-white ">
                   <p className="  bottom-4 mb-8 left-4 text-2xl text-green-500 font-bold">
                     {blog.title}
                   </p>
                 </div>
               </div>
             ))}
         </div>
       </div>
       <div className="flex justify-center flex-wrap mb-9 mt-10">
         <button className="bg-teal-100 rounded-sm  sm:w-96 w-72 sm:mr-10  h-40 text-4xl   text-emerald-500  text-center ">
           <button className="">ADVERT</button>
         </button>
         <button className="bg-teal-100 rounded-sm  sm:w-96 w-72 h-40 sm:ml-36 sm:mt-0 mt-6 text-4xl text-emerald-500 text-center">
           <button className="">ADVERT</button>
         </button>
       </div>
       <CallToActionSection />
       <div className="flex sm:flex-row flex-wrap sm:mb-20  items-center sm:ml-44 ml-2 justify-around">
         <div className="sm:text-start mt-10 sm:mr-0 sm:ml-11  ">
           <p className="text-lg">
             We love strategic <br /> partnerships
           </p>
           <a href="#" className="text-green-500 font-semibold text-lg5">
             Partner with us
           </a>
         </div>
         <div className="flex sm:mr-72  mt-6">
           <img src={cm} alt="Logo 1" className="sm:w-30  sm:h-20 w-20 h-10" />
           <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
           <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
           <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
         </div>
       </div>
     </div>
   );
 };

 export default Monchauffeur;
