 import React from "react";
 import backgroundImage from "../assets/images/Lamborghini-wallpaper-hd-cool-car.jpg";  
 const Home: React.FC = () => {
   return (
     <section id="header" className="relative w-full h-full  ">
       <img
         src={backgroundImage}
         alt=" car "
         className="w-full h-full absolute object-cover"
       />
       <div className="absolute top-0 left-0 justify-between w-full h-full bg-black opacity-90"></div>
       <div className=" w-full h-full flex flex-col  items-center justify-center opacity-90">
         <div className="flex flex-row items-center w-full">
           <div className="flex flex-col h-full w-1/2 p-12 mx-auto">
             <p className="text-2xl mt-28 font-semibold text-blue-900"></p>
             <p className="text-5xl italic mt-9   font-semibold text-white"></p>
             <div className="flex flex-row">
               <p className="text-lg mt-12 mb-14 font-semibold text-white"></p>
             </div>
              
           </div>

          
         </div>
       </div>
     </section>
   );
 };

 export default Home;

