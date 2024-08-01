// import per from "../../assets/images/person1.png"
// import call from "../../assets/images/call (2).png"
// import c1 from "../../assets/images/car1.png";
// import c2 from "../../assets/images/car5.png";
// import c3 from "../../assets/images/car3.png";
// import c4 from "../../assets/images/car4.png";
// import bg from "../../assets/images/background.png"
// import bg1 from "../../assets/images/background2.png"

// const CallToActionSection = () => {
//   return (
//     <div className="sm:w-full w-96">
//       <div
//         className="flex bg-cover  bg-customGreen text-white "
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <img
//           src={call}
//           alt="telephone"
//           className="absolute sm:mt-28 sm:ml-28 mt-3 ml-14  sm:w-32 h-16 sm:h-60"
//         />
//         {/* <div className="flex">
//           <img src={per} alt="Customer Support" className=" sm:ml-32 sm:w-auto sm:h-auto  ml-20    " />
//         </div> */}
//         {/* <div className="flex items-center sm:mr-20 sm:ml-0 ml-20  font-bold w-96">
//           <h2 className="sm:text-6xl text-4xl font-light w-96 text-green-400">
//             WE'RE JUST A <br />
//             <div className="flex ">
//               <span className="sm:text-6xl font-light text-4xl  text-white"> CALL </span>
//               <h2 className="sm:text-6xl text-4xl font-light text-green-4git status00 ml-5">
//                 AWAY
//               </h2>
//             </div>
//           </h2>
//         </div> */}
//       </div>
//       <div
//         className="bg-blue-900 p-8 text-white text-center flex  sm:flex-row  flex-col items-center"
//         style={{ backgroundImage: `url(${bg1})`, left: '20%' }}
//       >
//         <div className="flex flex-col sm:w-1/2  text-start sm:p-8 sm:mt-0 mt-12 ">
//           <h3 className="text-2xl sm:mb-4 text-green-500 font-semibold">
//             Book a drive
//           </h3>
//           <p className="sm:mb-6 ">
//             From our fleet of vehicles and from our drivers community, book a
//             car and a driver for your planned drive on a good price.
//           </p>
//         </div>
//         <div className="flex justify-center items-center space-x-5 mb-6 w-1/2 flex-wrap">
//           <div className="flex items-center justify-center w-36 h-36 rounded-full ">
//             <img src={c3} alt="Vehicle 1" className="w-full h-auto sm:mt-0 mt-72 sm:mr-0 mr-52" />
//           </div>

//           <div className="flex items-center justify-center w-36 h-36 rounded-full  ">
//             <img src={c2} alt="Vehicle 2" className="w-full h-auto sm:ml-0 ml-28" />
//           </div>
//           <div className="flex">
//             <div className="flex  justify-center w-36 h-36 rounded-full  ">
//               <img src={c4} alt="Vehicle 3" className="w-full h-auto" />
//             </div>
//             <button className="">
//               <p className="text-green-200"> View</p>{" "}
//               <p className="font-bold">More</p>
//             </button>

//             <div className="flex items-center justify-center w-36 h-36 rounded-full  ">
//               <img src={c1} alt="Vehicle 4" className="w-full h-auto mr-16 sm:mr-0 " />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CallToActionSection;
import per from "../../assets/images/person1.png"
import call from "../../assets/images/call (2).png"
import c1 from "../../assets/images/car1.png";
import c2 from "../../assets/images/car5.png";
import c3 from "../../assets/images/car3.png";
import c4 from "../../assets/images/car4.png";
import bg from "../../assets/images/background.png"
import bg1 from "../../assets/images/background2.png"

const CallToActionSection = () => {
  return (
    <div className="w-full">
      <div
  className="flex relative flex-col sm:flex-row bg-cover w-full bg-customGreen text-white"
  style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}
>
  <div className="absolute flex justify-center items-center w-10/12 h-full sm:top-4 top-8 xl:top-5 left-56 sm:left-52 transform -translate-x-1/2 sm:translate-x-0">
    <img
      src={call}
      alt="telephone"
      className="w-13 h-24 sm:w-36 sm:h-72 xl:w-48 xl:h-96"
    />
  </div>
  <img src={per} alt="Customer Support" className="w-full sm:w-auto" />
  <div className="absolute w-full h-full flex justify-end items-center right-0 sm:right-10 p-5 sm:p-44 xl:right-20 xl:p-44">
    <div className="flex flex-col space-y-3 text-center sm:text-left">
      <p className="text-2xl sm:text-3xl xl:text-5xl font-semibold">
        WE'RE JUST A <br />
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
        <span className="text-2xl sm:text-4xl xl:text-7xl font-light text-white">
          CALL
        </span>
        <h2 className="text-2xl sm:text-4xl xl:text-7xl font-light text-green-400 ml-0 sm:ml-5 mt-2 sm:mt-0">
          AWAY
        </h2>
      </div>
    </div>
  </div>
</div>

      <div
        className="bg-blue-900 p-8 text-white text-center flex flex-col sm:flex-row items-center"
        style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat',}}
      >
        <div className="flex flex-col w-full sm:w-2/3 text-start max-w-full mx-auto p-4 sm:p-8 mt-12 sm:mt-0">
          <h3 className="text-2xl sm:text-5xl sm:mb-4 text-green-500 font-semibold">
            Book a drive
          </h3>
          <p className="sm:mb-6 sm:text-xl">
            From our fleet of vehicles and from our drivers community, book a car and a driver for your planned drive at a good price.
          </p>
        </div>
        <div className="relative flex justify-center items-center w-full h-full mb-6 sm:w-2/3 sm:h-auto">
          <div className="relative w-[300px] h-[300px] sm:w-[600px] sm:h-[500px]">
            {/* Top Image */}
            <div className="absolute flex items-center justify-center w-32 h-32 sm:w-52 sm:h-52 rounded-full top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-500 hover:scale-105">
              <img src={c1} alt="Vehicle 1" className="w-full h-auto" />
            </div>
  
            {/* Right Image */}
            <div className="absolute flex items-center justify-center w-28 h-28 sm:w-52 sm:h-52 rounded-full top-1/2 right-0 transform -translate-y-1/2 transition-transform duration-500 hover:scale-105">
              <img src={c2} alt="Vehicle 2" className="w-full h-auto" />
            </div>
  
            {/* Bottom Image */}
            <div className="absolute flex items-center justify-center w-28 h-28 sm:w-52 sm:h-52 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-500 hover:scale-105">
              <img src={c3} alt="Vehicle 3" className="w-full h-auto" />
            </div>
  
            {/* Left Image */}
            <div className="absolute flex items-center justify-center w-28 h-28 sm:w-52 sm:h-52 rounded-full top-1/2 left-0 transform -translate-y-1/2 transition-transform duration-500 hover:scale-105">
              <img src={c4} alt="Vehicle 4" className="w-full h-auto" />
            </div>
  
            {/* Center Button */}
            <div className="absolute flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-500 hover:scale-110">
              <button className="text-center">
                <p className="text-green-200 text-xs sm:text-sm">View</p>
                <p className="font-bold text-xs sm:text-sm">More</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default CallToActionSection;
