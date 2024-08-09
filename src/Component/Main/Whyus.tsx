 import React, { useState, useEffect } from "react";
 import { AiFillStar, AiOutlineStar } from "react-icons/ai";
 import { motion } from "framer-motion";
 import pe1 from "../../assets/images/avatar2.jpg";
 import pe2 from "../../assets/images/avatar3.jpg";
 import pe3 from "../../assets/images/avatar5.jpg";
 import cr1 from "../../assets/images/caru2.png";
 import { IoIosClose } from "react-icons/io";
 import { Link } from "react-router-dom";

 interface DriverInfo {
   name: string;
   avatar: string;
   letters: string;
   text: string;
 }

 const drivers: DriverInfo[] = [
   { name: "Ishimwe Pacific", avatar: pe1, letters: "ABC", text: "Hire me" },
   { name: "Kirenga Cedrick", avatar: pe2, letters: "DEF", text: "Hire me" },
   { name: "Murinzi Gablier", avatar: pe3, letters: "GHI", text: "Hire me" },
   {
     name: "Niyomushumba Vincent",
     avatar: pe1,
     letters: "ABC",
     text: "Hire me",
   },
 ];

 const Whyus: React.FC = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false);
   const [ratings, setRatings] = useState<number[]>([0, 0, 0, 0]);
   const [activeIndex, setActiveIndex] = useState<number>(0);

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

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
     }, 2000);

     return () => clearInterval(interval);
   }, []);

   const closeModal = () => setModalIsOpen(false);

   const handleRatingClick = (index: number, rating: number) => {
     const newRatings = [...ratings];
     newRatings[index] = rating;
     setRatings(newRatings);
   };

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

   return (
     <div className="flex flex-col lg:flex-row justify-center max-w-screen-2xl mx-auto items-center p-6 mt-3 sm:w-full w-96">
       <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
         className="w-full lg:w-96"
       >
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
                   transition: "opacity ease-in",
                 }}
               >
                 <div className="dot-line flex flex-col items-center mr-4">
                   <div className="dot border-spacing-x border-2 bg-customGreen w-3 h-3 rounded-full"></div>
                   <div className="line border-x border-2 h-5 bg-black"></div>
                 </div>
                 <p className="text-green-200">{paragraph}</p>
               </div>
             ))}
           </div>
           <p className="font-bold absolute w-full pt-24 pl-10 sm:text-4xl text-3xl text-green-500">
             GERAYO AMAHORO
           </p>
           <img
             src={cr1}
             className="relative rounded-b-3xl transform: scale(1.2)"
             alt="dr"
           />
         </div>
       </motion.div>
       <div className="flex flex-col items-center space-x-2 w-full lg:w-1/2 justify-between lg:mt-0">
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="rounded-full w-full lg:w-96 p-1 sm:mb-6 mt-2 text-white text-lg bg-customBlue"
         >
           <p className="text-center">Our Top Drivers</p>
         </motion.div>

         {drivers.map((driver, idx) => (
           <motion.div
             key={idx}
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="flex lg:flex-row items-center rounded-lg h-auto relative group mt-5 lg:mt-0"
           >
             <img
               src={driver.avatar}
               alt="Driver avatar"
               className="w-20 h-30 mt-3 rounded-lg"
             />
             <div className="sm:mt-5 sm:h-20 pr-10 pl-10 bg-blue-100 sm:mb-2 flex lg:flex-row w-full items-center flex-grow">
               <div className="flex flex-col lg:ml-3 lg:justify-start justify-center">
                 <p className="text-customGreen text-center lg:text-left font-semibold">
                   {driver.name}
                 </p>
                 <div className="flex justify-center  lg:justify-start space-x-3 mt-1">
                   <p className="text-gray-600">MALE</p>
                   {driver.letters.split("").map((letter, index) => (
                     <div
                       key={index}
                       className="border-2 bg-customGr border-gray-600 rounded-lg p-2 h-2 w-2 flex items-center justify-center bg-customGreen"
                     >
                       <p className="text-white">{letter}</p>
                     </div>
                   ))}
                 </div>
                 <div className="flex justify-center lg:justify-start space-x-1 mt-1">
                   {[...Array(5)].map((_, index) => (
                     <div
                       key={index}
                       className="cursor-pointer"
                       onClick={() => handleRatingClick(idx, index + 1)}
                     >
                       {ratings[idx] >= index + 1 ? (
                         <AiFillStar className="text-customGreen" />
                       ) : (
                         <AiOutlineStar className="text-gray-600" />
                       )}
                     </div>
                   ))}
                 </div>
               </div>
               {/* <button
                onClick={openModal}
                className="text-customGreen w-16 sm:w-28 ml-10 sm:ml-32 h-20 rounded-r-lg bg-customBlue font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                {driver.text}
              </button> */}
             </div>
           </motion.div>
         ))}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="rounded-full w-full lg:w-96 p-1 mt-7 text-white text-lg bg-customGreen"
         >
           <Link to="/Driverpage">
             <button className="w-full text-green-200">
               Browse More Drivers
             </button>
           </Link>
         </motion.div>
       </div>
       {modalIsOpen && (
         <div className="fixed inset-0 flex justify-center items-start bg-black bg-opacity-50 z-50 h-full">
           <button
             onClick={closeModal}
             className="absolute top-0 right-0 mt-2 mr-2 w-10 flex justify-center items-center h-10 rounded-full bg-red-700"
           >
             <IoIosClose size={40} />
           </button>
           <div className="relative bg-white rounded-lg w-full max-w-3xl h-[87%] mt-5">
             <div className="relative pb-9/16 overflow-hidden h-full">
               <iframe
                 className="absolute top-0 left-0 w-full h-full"
                 src="https://www.youtube.com/embed/K9TOrciYhrE?autoplay=1"
                 title="YouTube video player"
                 frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowFullScreen
               ></iframe>
             </div>
           </div>
         </div>
       )}
     </div>
   );
 };

 export default Whyus;
