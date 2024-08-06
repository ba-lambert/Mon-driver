 import React, { useEffect, useState } from "react";
 import { motion } from "framer-motion";
 import booking from "../../assets/Web Assets/bokim.jpg";
 import icon from "../../assets/Web Assets/iconb.png";
 import { Link } from "react-router-dom";
 const BookingConfirmation: React.FC = () => {
   const [trackingId, setTrackingId] = useState<string>("");
   useEffect(() => {
     const params = new URLSearchParams(window.location.search);
     const id = params.get("OrderTrackingId") || "N/A"; 
     setTrackingId(id);
   }, []);
   return (
     <div className="min-h-screen flex flex-col items-center bg-gray-100 pb-10">
       <motion.div className="p-10"initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
         <h1 className="text-xl font-bold text-green-600 mb-4">  Congratulations!!!! Your booking has been Confirmed</h1>
         <div className="mb-4 flex"> <p className="font-semibold">Tracking ID:</p> <p className="text-gray-600 font-semibold">{trackingId}</p></div>
         <img  src={booking}  alt="Booking Confirmation"  className="w-full h-60 object-cover mb-4"/>
         <div className="flex items-center pl-32 mb-4"> <img src={icon} alt="Icon" className="w-24 h-24 -mt-10" /></div>
         <p className="text-gray-700 mb-4"> Thank you for booking with us! Your reservation is confirmed.</p>
         <p className="text-gray-600 mb-4"> We look forward to providing you with exceptional service. If you have any questions, feel free to contact us.</p>
         <Link to="/"> <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">   Go to Home  </button></Link>
       </motion.div>
     </div>
   );
 };
 export default BookingConfirmation;