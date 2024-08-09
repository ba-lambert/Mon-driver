 import React, { useState } from "react";
 import DriverModal from "../Main/Drivermodal";
 import BookingModal from "../Main/BookingModal"; 
 import p1 from "../../assets/images/avatar2.jpg";
 import p2 from "../../assets/images/avatar3.jpg";
 import p3 from "../../assets/images/p3.jpg";
  import { motion } from "framer-motion";
//  import p4 from "../../assets/images/ch3.jpg";

 interface Driver {
   id: number;
   name: string;
   location: string;
   yearsOfExperience: string;
   category: string;
   yearOfLicense: number;
   image: string;
   otherSkills: string;
   knowledge: string;
   preferences: string;
   
 }

 interface DriverCardProps {
   driver: Driver;
   onViewProfile: (driver: Driver) => void;
 }

 const DriverCard: React.FC<DriverCardProps> = ({ driver, onViewProfile }) => (
   <div className="bg-customGreen bg-opacity-90 w-56 h-52 mt-10 shadow-md rounded-t-lg mb-16 flex flex-col items-center">
     <img
       src={driver.image}
       alt={driver.name}
       className="rounded-full relative   -top-10 ring-0 ring-offset-customGreen ring-offset-[5px] object-cover h-20 w-20"
     />
     <h3 className="text-lg font-bold text-green-400  p-2">
       {driver.name}
     </h3>
     <p className="text-white text-sm  ">Location: {driver.location}</p>
     <p className="text-white text-sm ">
       Contact number: {driver.yearsOfExperience}
     </p>
     <p className="text-white   text-sm">Category: {driver.category}</p>
     <p className="text-white  text-sm">
       Year of License: {driver.yearOfLicense}
     </p>
     <button
       className="bg-customBlue text-white font-semibold px-16 text-sm py-1 rounded-b-lg mt-1 hover:text-white hover:bg-customBlue"
       onClick={() => onViewProfile(driver)}
     >
       View My Profile
     </button>
   </div>
 );

 const DriverPage: React.FC = () => {
   const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

   const drivers: Driver[] = [
     {
       id: 1,
       name: "Ishimwe Pacifique",
       location: "Rwanda-kicukiro",
       yearsOfExperience: "0780668442",
       category: "A",
       yearOfLicense: 2015,
       image: p1,
       otherSkills: "Defensive driving, First aid",
       knowledge: "Knows the city well, Punctual",
       preferences: "Prefers night shifts, Loves long drives",
     },
     {
       id: 2,
       name: "kirenga cedrick",
       location: "North-Bugesera",
       yearsOfExperience: "0786947869",
       category: "B",
       yearOfLicense: 2018,
       image: p2,
       otherSkills: "Off-road driving, Customer service",
       knowledge: "Fluent in Spanish, Friendly",
       preferences: "Enjoys scenic routes, Prefers morning shifts",
     },
     {
       id: 3,
       name: "Murinzi Gabriel ",
       location: "Chicago",
       yearsOfExperience: "0790356894",
       category: "C",
       yearOfLicense: 2017,
       image: p3,
       otherSkills: "GPS Navigation, Customer care",
       knowledge: "Knows best routes, Courteous",
       preferences: "Prefers long drives, Enjoys music",
     },
     {
       id: 4,
       name: "Ganza Nkunda Dismas",
       location: "San Francisco",
       yearsOfExperience: "0781701960",
       category: "A",
       yearOfLicense: 2014,
       image: p1,
       otherSkills: "Expert in highway driving, Safety protocols",
       knowledge: "Expert in city routes, Reliable",
       preferences: "Prefers morning shifts, Enjoys weekend drives",
     },
     {
       id: 1,
       name: "Ishimwe Pacifique",
       location: "Rwanda-kicukiro",
       yearsOfExperience: "0780668442",
       category: "A",
       yearOfLicense: 2015,
       image: p1,
       otherSkills: "Defensive driving, First aid",
       knowledge: "Knows the city well, Punctual",
       preferences: "Prefers night shifts, Loves long drives",
     },
     {
       id: 2,
       name: "kirenga cedrick",
       location: "North-Bugesera",
       yearsOfExperience: "0786947869",
       category: "B",
       yearOfLicense: 2018,
       image: p2,
       otherSkills: "Off-road driving, Customer service",
       knowledge: "Fluent in Spanish, Friendly",
       preferences: "Enjoys scenic routes, Prefers morning shifts",
     },
     {
       id: 3,
       name: "Murinzi Gabriel ",
       location: "Chicago",
       yearsOfExperience: "0790356894",
       category: "C",
       yearOfLicense: 2017,
       image: p3,
       otherSkills: "GPS Navigation, Customer care",
       knowledge: "Knows best routes, Courteous",
       preferences: "Prefers long drives, Enjoys music",
     },
     {
       id: 4,
       name: "Ganza Nkunda Dismas",
       location: "San Francisco",
       yearsOfExperience: "0781701960",
       category: "A",
       yearOfLicense: 2014,
       image: p1,
       otherSkills: "Expert in highway driving, Safety protocols",
       knowledge: "Expert in city routes, Reliable",
       preferences: "Prefers morning shifts, Enjoys weekend drives",
     },
     {
       id: 1,
       name: "Ishimwe Pacifique",
       location: "Rwanda-kicukiro",
       yearsOfExperience: "0780668442",
       category: "A",
       yearOfLicense: 2015,
       image: p1,
       otherSkills: "Defensive driving, First aid",
       knowledge: "Knows the city well, Punctual",
       preferences: "Prefers night shifts, Loves long drives",
     },
     {
       id: 2,
       name: "kirenga cedrick",
       location: "North-Bugesera",
       yearsOfExperience: "0786947869",
       category: "B",
       yearOfLicense: 2018,
       image: p2,
       otherSkills: "Off-road driving, Customer service",
       knowledge: "Fluent in Spanish, Friendly",
       preferences: "Enjoys scenic routes, Prefers morning shifts",
     },
     {
       id: 3,
       name: "Murinzi Gabriel ",
       location: "Chicago",
       yearsOfExperience: "0790356894",
       category: "C",
       yearOfLicense: 2017,
       image: p3,
       otherSkills: "GPS Navigation, Customer care",
       knowledge: "Knows best routes, Courteous",
       preferences: "Prefers long drives, Enjoys music",
     },
     {
       id: 4,
       name: "Ganza Nkunda Dismas",
       location: "San Francisco",
       yearsOfExperience: "0781701960",
       category: "A",
       yearOfLicense: 2014,
       image: p1,
       otherSkills: "Expert in highway driving, Safety protocols",
       knowledge: "Expert in city routes, Reliable",
       preferences: "Prefers morning shifts, Enjoys weekend drives",
     },
     {
       id: 1,
       name: "Ishimwe Pacifique",
       location: "Rwanda-kicukiro",
       yearsOfExperience: "0780668442",
       category: "A",
       yearOfLicense: 2015,
       image: p1,
       otherSkills: "Defensive driving, First aid",
       knowledge: "Knows the city well, Punctual",
       preferences: "Prefers night shifts, Loves long drives",
     },
     {
       id: 2,
       name: "kirenga cedrick",
       location: "North-Bugesera",
       yearsOfExperience: "0786947869",
       category: "B",
       yearOfLicense: 2018,
       image: p2,
       otherSkills: "Off-road driving, Customer service",
       knowledge: "Fluent in Spanish, Friendly",
       preferences: "Enjoys scenic routes, Prefers morning shifts",
     },
     {
       id: 3,
       name: "Murinzi Gabriel ",
       location: "Chicago",
       yearsOfExperience: "0790356894",
       category: "C",
       yearOfLicense: 2017,
       image: p3,
       otherSkills: "GPS Navigation, Customer care",
       knowledge: "Knows best routes, Courteous",
       preferences: "Prefers long drives, Enjoys music",
     },
     {
       id: 4,
       name: "Ganza Nkunda Dismas",
       location: "San Francisco",
       yearsOfExperience: "0781701960",
       category: "A",
       yearOfLicense: 2014,
       image: p1,
       otherSkills: "Expert in highway driving, Safety protocols",
       knowledge: "Expert in city routes, Reliable",
       preferences: "Prefers morning shifts, Enjoys weekend drives",
     },
   ];

   const handleViewProfile = (driver: Driver) => {
     setSelectedDriver(driver);
   };

   const handleCloseModal = () => {
     setSelectedDriver(null);
     setIsBookingModalOpen(false); 
   };

   const handleBookDriver = (driver: Driver) =>  {
    console.log(driver)
     setSelectedDriver(null);
     setIsBookingModalOpen(true); 
   };

   return (
     <div  className="p-6   min-h-screen">
     <motion.div
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
     className="p-6   min-h-screen"
     >
       <h2 className="text-4xl text-emerald-500  max-w-screen-lg mx-auto p-9 font-bold mb-4">
         Driver Profiles
       </h2>
       <div className="grid grid-cols-1  max-w-screen-lg mx-auto sm:grid-cols-2 md:grid-cols-4">
         {drivers.map((driver) => (
           <DriverCard
             key={driver.id}
             driver={driver}
             onViewProfile={handleViewProfile}
           />
         ))}
       </div>
       {selectedDriver && (
         <DriverModal
           drivers={selectedDriver}
           onClose={handleCloseModal}
           onBookDriver={handleBookDriver}
         />
       )}
       {isBookingModalOpen && <BookingModal />}
       </motion.div>
     </div>
       
   );
 };

 export default DriverPage;
