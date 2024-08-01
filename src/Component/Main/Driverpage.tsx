 import React, { useState } from "react";
 import DriverModal from "../Main/Drivermodal";
 import BookingModal from "../Main/BookingModal"; 
 import p1 from "../../assets/images/p1.jpeg";
 import p2 from "../../assets/images/p2.jpeg";
 import p3 from "../../assets/images/p3.jpg";
 import p4 from "../../assets/images/Lamborghini-wallpaper-hd-cool-car.jpg";

 interface Driver {
   id: number;
   name: string;
   location: string;
   yearsOfExperience: number;
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
   <div className="bg-customGreen bg-opacity-90 w-72 shadow-md rounded-lg mb-16 flex flex-col items-center">
     <img
       src={driver.image}
       alt={driver.name}
       className="rounded-full relative ml-8 -top-10 ring-0 ring-offset-customBlue ring-offset-[5px] object-cover h-20 w-20"
     />
     <h3 className="text-lg font-semibold text-green-400 mb-2">
       {driver.name}
     </h3>
     <p className="text-white mb-1">Location: {driver.location}</p>
     <p className="text-white mb-1">
       Years of Experience: {driver.yearsOfExperience}
     </p>
     <p className="text-white mb-1 mr-16">Category: {driver.category}</p>
     <p className="text-white mb-1">Year of License: {driver.yearOfLicense}</p>
     <button
       className="bg-customBlue text-white font-semibold py-2 mb-5 ml-10 px-4 rounded mt-4 hover:text-white hover:bg-customBlue"
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
       name: "John Doe",
       location: "New York",
       yearsOfExperience: 5,
       category: "A",
       yearOfLicense: 2015,
       image: p1,
       otherSkills: "Defensive driving, First aid",
       knowledge: "Knows the city well, Punctual",
       preferences: "Prefers night shifts, Loves long drives",
     },
     {
       id: 2,
       name: "Jane Smith",
       location: "Los Angeles",
       yearsOfExperience: 3,
       category: "B",
       yearOfLicense: 2018,
       image: p2,
       otherSkills: "Off-road driving, Customer service",
       knowledge: "Fluent in Spanish, Friendly",
       preferences: "Enjoys scenic routes, Prefers morning shifts",
     },
     {
       id: 3,
       name: "Alice Johnson",
       location: "Chicago",
       yearsOfExperience: 4,
       category: "C",
       yearOfLicense: 2017,
       image: p3,
       otherSkills: "GPS Navigation, Customer care",
       knowledge: "Knows best routes, Courteous",
       preferences: "Prefers long drives, Enjoys music",
     },
     {
       id: 4,
       name: "Bob Brown",
       location: "San Francisco",
       yearsOfExperience: 6,
       category: "A",
       yearOfLicense: 2014,
       image: p4,
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

   const handleBookDriver = (driver: Driver) => {
    console.log(driver)
     setSelectedDriver(null);
     setIsBookingModalOpen(true); 
   };

   return (
     <div className="p-6 bg-customBlue min-h-screen">
       <h2 className="text-4xl text-emerald-200 sm:ml-96 p-9 font-bold mb-4">
         Driver Profiles
       </h2>
       <div className="grid grid-cols-1 ml-5 sm:ml-0 sm:grid-cols-2 md:grid-cols-4">
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
           driver={selectedDriver}
           onClose={handleCloseModal}
           onBookDriver={handleBookDriver} 
         />
       )}
       {isBookingModalOpen && (
         <BookingModal
           isOpen={isBookingModalOpen}
           onRequestClose={handleCloseModal}
         />
       )}
     </div>
   );
 };

 export default DriverPage;
