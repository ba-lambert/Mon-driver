 import React from "react";

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

 interface DriverModalProps {
   drivers: Driver;
   onClose: () => void;
   onBookDriver: (Drivers: Driver) => void;
 }

 const DriverModal: React.FC<DriverModalProps> = ({
   drivers,
   onClose,
   onBookDriver,
 }) => (
   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
     <div className="relative bg-customGreen font-bold rounded-lg p-6 bg-opacity-90 max-w-md mx-auto">
       <button
         className="absolute top-4 right-4 bg-customGreen text-white p-4 rounded "
         onClick={onClose}
       >
         X
       </button>
       <h3 className="text-xl font-bold mb-4">{drivers.name}'s Profile</h3>
       <p className="text-white mb-2">Location: {drivers.location}</p>
       <p className="text-white mb-2">
         Years of Experience: {drivers.yearsOfExperience}
       </p>
       <p className="text-white mb-2">Category: {drivers.category}</p>
       <p className="text-white mb-2">
         Year of License: {drivers.yearOfLicense}
       </p>
       <p className="text-white mb-2">Other Skills: {drivers.otherSkills}</p>
       <p className="text-white mb-2">Knowledge: {drivers.knowledge}</p>
       <p className="text-white mb-2">Preferences: {drivers.preferences}</p>
       <button
         className="bg-black text-customGreen w-full py-2 px-4 rounded mt-4 hover:bg-customBlue"
         onClick={() => onBookDriver(drivers)}
       >
         BOOK {drivers.name}
       </button>
     </div>
   </div>
 );

 export default DriverModal;
