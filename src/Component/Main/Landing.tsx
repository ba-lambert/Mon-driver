 // import NavBar from "./NavBar.tsx";
import DriverRecruitmentForm from "./Toggle.tsx";
import { useState } from "react";
import { PiSteeringWheel } from "react-icons/pi";
import Blogs from "./Blogs.tsx";
import CallToAction from "./CallToAction.tsx";
import Whyus from "./Whyus.tsx";
import { IoIosClose } from "react-icons/io";
 import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="h-auto">
      <main>
        <div className="text-white bg-blue-900">
          <DriverRecruitmentForm />
        </div>
        <WhyUs />
        <Whyus />
        <CallToAction />
        <Blogs />
      </main>
    </div>
  );
};
export default LandingPage;

 const WhyUs = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => {
     setIsModalOpen(true);
   };

   const closeModal = () => {
     setIsModalOpen(false);
   };

   return (
       <div className="flex flex-col sm:flex-row justify-center items-center p-6 sm:mt-32 h-auto sm:h-[100vh]">
         <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full sm:w-1/2 p-4 sm:p-10 mb-4 sm:mb-11"
         >
           <div className="bg-blue-100 p-6 sm:p-16 text-md text-gray-700 rounded-lg">
             <h2 className="text-green-600 text-2xl sm:text-3xl font-bold mb-4">
               Your "Always Available" Chauffeur
             </h2>
             <p className="mb-4">
               MonChauffeur is dedicated to providing you with the safest and most
               comfortable driving experience possible. With just one call, your
               nearest chauffeur will be at your service promptly.
             </p>
             <p className="mb-4">
               Our community at MonChauffeur consists of diverse drivers who
               undergo rigorous vetting for reliability and receive extensive
               training. This ensures that you enjoy the drive of your life with
               utmost safety and comfort.
             </p>
             <p className="mb-4">
               Whether you're on vacation, traveling for work, planning a
               spontaneous weekend getaway, or prioritizing the safety of yourself,
               your vehicle, and your belongings, you can always find a driver who
               meets your preferences at MonChauffeur.
             </p>
           </div>
         </motion.div>
         <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-2 w-full sm:w-1/2">
           <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="w-full hidden sm:w-40 h-[30vh] sm:h-[60vh] sm:flex justify-center items-center"
               style={{
                 background:
                     "linear-gradient(to bottom, rgba(255, 255, 255,0), rgba(100, 800, 100, 10), rgba(255, 255, 255, 255))",
               }}
           >
             <PiSteeringWheel size={150} color="white" />
           </motion.div>
           <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="relative w-full sm:w-96"
           >
             <div
                 className="w-full sm:w-full h-[30vh] sm:h-[70vh] flex justify-center items-center cursor-pointer"
                 onClick={openModal}
             >
               <img
                   src="https://img.youtube.com/vi/K9TOrciYhrE/maxresdefault.jpg"
                   alt="YouTube Thumbnail"
                   className="w-full h-full object-cover"
               />
               <button className="absolute bg-white rounded-full p-2">
                 <svg
                     className="w-8 h-8 text-blue-800"
                     fill="currentColor"
                     viewBox="0 0 24 24"
                 >
                   <path d="M8 5v14l11-7z" />
                 </svg>
               </button>
             </div>
           </motion.div>
           <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="hidden w-full sm:w-40 h-[30vh] sm:h-[60vh] sm:flex justify-center items-center"
               style={{
                 background:
                     "linear-gradient(to bottom, rgba(255, 255, 255,0), rgba(100, 800, 100, 10), rgba(255, 255, 255, 255))",
               }}
           >
             <PiSteeringWheel size={150} color="white" />
           </motion.div>
         </div>

         {isModalOpen && (
             <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 sm:h-full">
               <button
                   onClick={closeModal}
                   className="absolute top-0 right-0 mt-2 mr-2 w-10 flex justify-center items-center h-10 rounded-full bg-red-700"
               >
                 <IoIosClose size={40} />
               </button>
               <div className="relative bg-white rounded-lg w-full max-w-3xl h-[70%] sm:h-[87%] mt-5">
                 <div className="relative pb-9/16 overflow-hidden h-full">
                   <iframe
                       className="absolute top-0 left-0 w-full h-full"
                       src="https://www.youtube.com/embed/K9TOrciYhrE?autoplay=1"
                       title="YouTube video player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                       allowFullScreen
                   ></iframe>
                 </div>
               </div>
             </div>
         )}
       </div>
   );
 };
