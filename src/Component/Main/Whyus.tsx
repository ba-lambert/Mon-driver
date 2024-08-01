 import React, { useState, useEffect } from "react";
 import { AiFillStar, AiOutlineStar } from "react-icons/ai";
 import pe1 from "../../assets/images/p1.jpeg";
 import pe2 from "../../assets/images/p2.jpeg";
 import pe3 from "../../assets/images/p3.jpg";
 import cr1 from "../../assets/images/caru2.png";
  import { Link } from "react-router-dom";

 interface DriverInfo {
   name: string;
   avatar: string;
   letters: string;
   text: string;
 }

 const drivers: DriverInfo[] = [
   { name: "Jeira Wren", avatar: pe1, letters: "ABC", text: "Hire me" },
   { name: "Ava Smith", avatar: pe2, letters: "DEF", text: "Hire me" },
   { name: "Ella Brown", avatar: pe3, letters: "GHI", text: "Hire me" },
   { name: "Jeira Wren", avatar: pe1, letters: "ABC", text: "Hire me" },
 ];

 const Whyus: React.FC = () => {
   const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0]);
   const [activeIndex, setActiveIndex] = useState<number>(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
     }, 2000);

     return () => clearInterval(interval);
   }, []);

   const paragraphs = [
     "Available 24/7 for your convenience.",
     "Drivers undergo rigorous vetting for reliability.",
     "Ensure safety and comfort during every ride.",
     "Prioritize the security of your belongings.",
     "Offer a diverse selection of skilled drivers.",
     "Ideal for both leisure and business needs.",
     "Simple booking process with just one call.",
     "Promise a stress-free driving experience.",
     "Trusted for vacations, work trips, and weekends.",
     "Committed to exceptional customer satisfaction.",
   ];

   const handleRatingClick = (index: number, rating: number) => {
     const newRatings = [...ratings];
     newRatings[index] = rating;
     setRatings(newRatings);
   };

   return (
     <div className="flex flex-col lg:flex-row justify-center  items-center p-6 mt-3 sm:w-full w-96">
       <div className="w-full lg:w-96">
         <div className="bg-green-600 mt-5 text-sm rounded-3xl relative">
           <h2 className="text-green-400 text-3xl pl-16 pt-6 font-bold">
             WHY US
           </h2>
           <div className="paragraphs pl-16 mt-5">
             {paragraphs.map((paragraph, index) => (
               <div
                 key={index}
                 className={`paragraph-container flex items-start ${
                   index === activeIndex ? "" : "visible"
                 }`}
                 style={{
                   opacity: index === activeIndex ? "0" : "1",
                   transition: "opacity  ease-in",
                 }}
               >
                 <div className="dot-line flex flex-col items-center mr-4">
                   <div className="dot border-spacing-x border-2 bg-customGreen w-3 h-3 rounded-full"></div>
                   <div className="line border-x border-2 h-5 bg-black "></div>
                 </div>
                 <p className="text-green-200">{paragraph}</p>
               </div>
             ))}
           </div>
           <p className="font-bold absolute sm:text-4xl text-3xl text-green-500 ">
             GERAYO AMAHORO
           </p>
           <img
             src={cr1}
             className="relative rounded-b-3xl transform: scale(1.2) "
             alt="dr"
           />
         </div>
       </div>
       <div className="flex flex-col items-center space-x-2 w-full lg:w-1/2 justify-between  lg:mt-0">
         <div className="rounded-full w-full lg:w-96 p-1 sm:mb-6 mt-2 text-white text-lg bg-customBlue">
           <p className="text-center">Hire A Driver</p>
         </div>
         {drivers.map((driver, idx) => (
           <div
             key={idx}
             className="flex  lg:flex-row items-center  rounded-lg h-auto relative group mt-5 lg:mt-0"
           >
             <img
               src={driver.avatar}
               alt="Driver avatar"
               className="w-16 h-20 mt-3  rounded-lg"
             />
             <div className="sm:mt-5   sm:h-20 bg-blue-100 sm:mb-2 flex   lg:flex-row items-center">
               <div>
                 <p className="text-customGreen text-center lg:text-left lg:ml-3 font-semibold">
                   {driver.name}
                 </p>{" "}
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
                 <button className="text-customGreen  w-16  sm:w-28 ml-10  sm:ml-32 h-20 rounded-r-lg bg-customBlue font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                   {driver.text}
                 </button>
               </Link>
             </div>
           </div>
         ))}
         <div className="rounded-full w-full lg:w-96 p-1 mt-7 text-white text-lg bg-customGreen">
           <button className="w-full text-green-400">
             Browse More Drivers
           </button>
         </div>
       </div>
     </div>
   );
 };

 export default Whyus;
