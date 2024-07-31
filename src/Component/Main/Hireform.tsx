 import React from "react";
 import { useParams } from "react-router-dom";
 import pe1 from "../../assets/images/p1.jpeg";
 import pe2 from "../../assets/images/p2.jpeg";
 import pe3 from "../../assets/images/p3.jpg";
 import SubNavBar from "./SubNavbar";
   
         
 
 interface DriverInfo {
   name: string;
   avatar: string;
   age: number;
   sex: string;
   category: string;
 }

 const driverData: DriverInfo[] = [
   { name: "Jeira Wren", avatar: pe1, age: 30, sex: "Female", category: "ABC" },
   { name: "Ava Smith", avatar: pe2, age: 28, sex: "Female", category: "DEF" },
   { name: "Ella Brown", avatar: pe3, age: 32, sex: "Female", category: "GHI" },
 ];

 const HireForm: React.FC = () => {
   const { name } = useParams<{ name: string }>();
   const driver = driverData.find((d) => d.name === name);
  
   return (
    <div>
    <SubNavBar/>
     <div className="min-h-screen flex flex-col justify-center   bg-customBlue"> 
       <div className="flex sm:ml-64 flex-wrap mb-32 mt-20">
         <div className=" flex flex-row ">
           <div className=" shadow rounded-lg p-8 flex flex-col items-center   h-80 border-2">
             <img
               src={driver?.avatar}
               alt={driver?.name}
               className="w-32 h-32 rounded-full"
             />
             <h1 className="text-2xl font-bold mt-4">{driver?.name}</h1>
             <p className="text-white">Age: {driver?.age}</p>
             <p className="text-white">Sex: {driver?.sex}</p>
             <p className="text-white">Category: {driver?.category}</p>
             <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
               Hire {driver?.name}
             </button>
           </div>
           <div className="sm:mr-0 mr-80">
             <div className="flex border-2 h-32 ml-11  ">
               <img src={pe1} className="w-20 h-20 mt-3" alt="Avatar 1" />
               <img src={pe2} className="w-20 h-20 mt-3 ml-3" alt="Avatar 2" />
             </div>
             <div className=" border-2 mt-6 text-white  h-64 sm:h-48 w-40  ml-11  ">
               <p className="font-bold text-emerald-700 text-xl">
                 {" "}
                 personal detail
               </p>
               <ul className="p-3">
                 <li>Full Name: </li>
                 <li>contact fone number: </li>
                 <li>Email registered: </li>
                 <li>location: </li>
                 <li>Nationality: </li>
               </ul>
             </div>
             <div className=" border-2 mt-6 text-white  h-40 ml-11 ">
               <p className="font-bold text-emerald-700 text-xl">
                 {" "}
                 Driver Handle
               </p>
               <ul className="p-3">
                 <li> Unique Handle </li>
                 <li> driver social timeline </li>
                 <li>Professional profile</li>
               </ul>
             </div>
             <div className=" border-2 mt-6 text-white  h-40 ml-11   ">
               <p className="font-bold text-emerald-700 text-xl">
                 {" "}
                 Qualification
               </p>
               <ul className="p-3">
                 <li> level of education: </li>
                 <li>driving licence: </li>
                 <li> unique skills: </li>
               </ul>
             </div>
           </div>
         </div>
         <div className="sm:ml-10 mt-24 ">
           <iframe
             width="350"
             height="270"
             src="https://www.youtube.com/embed/PntTra6wJPE?autoplay=1"
             title="YouTube video player"
             allowFullScreen
           ></iframe>
         </div>
       </div>
     </div>
     </div>
   );
 };

 export default HireForm;
