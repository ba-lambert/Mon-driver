 import React from "react";
 import { useForm } from "react-hook-form";
 import bk from "../../assets/images/book.png";

 type FormData = {
   userName: string;
   location: string;
   duration: string;
   destination: string;
   driverName: string;
   contact: string;
 };

 const BookingPage: React.FC = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<FormData>();

   const onSubmit = (data: FormData) => {
     console.log(data);
     // Handle form submission
   };

   return (
     <div
       className="min-h-screen flex items-center p-6 justify-end bg-cover bg-center"
       style={{ backgroundImage: `url(${bk})` }}
     >
       <form
         onSubmit={handleSubmit(onSubmit)}
         className="bg-customBlue pl-6 pr-6 w-full bg-opacity-80 mb-20 sm:ml-0 sm:mr-10 rounded-lg shadow-md max-w-lg"
       >
         <h2 className="text-3xl font-bold text-customGreen mb-4">
           Book a Driver
         </h2>
         <div className="flex mb-4">
           <div className="w-full mr-10">
             <label className="block text-emerald-100">Your Name</label>
             <input
               {...register("userName", { required: "Your name is required" })}
               className="border w-full rounded"
             />
             {errors.userName && (
               <p className="text-red-500 text-sm mt-1">
                 {errors.userName.message}
               </p>
             )}
           </div>
           <div className="w-full">
             <label className="block text-emerald-100">Location</label>
             <input
               {...register("location", { required: "Location is required" })}
               className="border w-full rounded"
             />
             {errors.location && (
               <p className="text-red-500 text-sm mt-1">
                 {errors.location.message}
               </p>
             )}
           </div>
         </div>
         <div className="mb-4">
           <label className="block text-emerald-100">Destination</label>
           <input
             {...register("destination", {
               required: "Destination is required",
             })}
             className="border sm:w-[405px] w-[290px] rounded"
           />
           {errors.destination && (
             <p className="text-red-500 text-sm mt-1">
               {errors.destination.message}
             </p>
           )}
         </div>
         <div className="flex mb-4">
           <div className="w-full mr-10">
             <label className="block text-emerald-100">Duration (hours)</label>
             <input
               {...register("duration", {
                 required: "Duration is required",
                 min: { value: 1, message: "Duration must be at least 1 hour" },
               })}
               type="number"
               className="border w-full rounded"
             />
             {errors.duration && (
               <p className="text-red-500 text-sm mt-1">
                 {errors.duration.message}
               </p>
             )}
           </div>
           <div className="w-full">
             <label className="block text-emerald-100">Driver Name</label>
             <input
               {...register("driverName", {
                 required: "Driver name is required",
               })}
               className="border w-full rounded"
             />
             {errors.driverName && (
               <p className="text-red-500 text-sm mt-1">
                 {errors.driverName.message}
               </p>
             )}
           </div>
         </div>
         <div className="mb-4">
           <label className="block text-emerald-100">Contact Number</label>
           <input
             {...register("contact", {
               required: "Contact number is required",
               pattern: {
                 value: /^\+\d{1,3}\s?\d{10}$/,
                 message:
                   "Contact number must be a valid country code followed by 10 digits",
               },
             })}
             className="border sm:w-[405px] w-[290px] rounded"
           />
           {errors.contact && (
             <p className="text-red-500 text-sm mt-1">
               {errors.contact.message}
             </p>
           )}
         </div>
         <button
           type="submit"
           className="bg-customGreen text-white py-2 px-4 mb-5 rounded"
         >
           Book Now
         </button>
       </form>
     </div>
   );
 };

 export default BookingPage;
