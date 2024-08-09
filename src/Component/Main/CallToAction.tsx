import {motion} from "framer-motion";
import per from "../../assets/images/person1.png";
import call from "../../assets/images/call (2).png";
import c1 from "../../assets/images/car1.png";
import c2 from "../../assets/images/car5.png";
import c3 from "../../assets/images/car3.png";
import c4 from "../../assets/images/car4.png";
import bg from "../../assets/images/background.png";
import bg1 from "../../assets/images/background2.png";

const CallToActionSection = () => {
    return (
      <div className="w-full">
        <div
          className="flex relative flex-col max-w-screen-2xl mx-auto sm:flex-row bg-cover w-full bg-customGreen text-white"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute flex justify-center items-center w-9/12 h-full sm:top-4 top-8 xl:top-5 left-20 sm:left-52 transform -translate-x-1/2 sm:translate-x-0"
          >
            <img
              src={call}
              alt="telephone"
              className="w-13 h-24 sm:w-36 sm:h-72 xl:w-48 xl:h-96"
            />
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src={per}
            alt="Customer Support"
            className="w-full sm:w-auto"
          />
          <div className="absolute w-full h-full flex justify-end items-center right-0 sm:right-10 p-5 sm:p-44 xl:right-20 xl:p-44">
            <div className="flex flex-col space-y-3 text-center sm:text-left">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl sm:text-3xl xl:text-5xl font-semibold"
              >
                WE'RE JUST A <br />
              </motion.p>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-4xl xl:text-7xl font-light text-white"
                >
                  CALL
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-4xl xl:text-7xl font-light text-green-400 ml-0 sm:ml-5 mt-2 sm:mt-0"
                >
                  AWAY
                </motion.h2>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-blue-900 p-8 max-w-screen-2xl mx-auto text-white bg-cover text-center flex flex-col sm:flex-row items-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col w-full sm:w-2/3 text-start max-w-full mx-auto p-4 sm:p-8 mt-12 sm:mt-0"
          >
            <h3 className="text-2xl sm:text-5xl sm:mb-4 text-green-500 font-semibold">
              Book a drive
            </h3>
            <p className="sm:mb-6 sm:text-xl">
              From our fleet of vehicles and from our drivers community, book a
              car and a driver for your planned drive at a good price.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full h-full mb-6 sm:w-2/3 sm:h-auto"
          >
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
          </motion.div>
        </div>
      </div>
    );
};

export default CallToActionSection;
