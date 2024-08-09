import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BookingModal from "../Main/BookingModal";
import ch2 from "../../assets/images/f.jpg";
// import ch from "../../assets/images/4.jpg";
import driverImage from "../../assets/images/ch1.jpg";
import driverImage1 from "../../assets/images/ch2.jpg";
// import ho from "../../assets/Web Assets/ADS2-02.png";
import ch23 from "../../assets/images/ch3.jpg"
// import lg from "../../assets/images/lg.png";
import { Link } from "react-router-dom";

const DriverRecruitmentForm = () => {
  const [modalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("no-scroll");

      const overlay = document.createElement("div");
      overlay.className = "fixed-background";
      document.body.appendChild(overlay);
      return () => {
        document.body.classList.remove("no-scroll");
        document.body.removeChild(overlay);
      };
    }
  }, [modalIsOpen]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative  bg-cover max-w-screen-2xl mx-auto bg-center flex flex-col"
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        {/* <div className="flex sm:flex-row flex-col max-w-screen-2xl mx-auto w-full"> */}
        <div
          className="relative  min-w-screen bg-cover bg-white bg-center flex flex-col"
          style={{ backgroundImage: `url(${ch23})` }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="flex sm:flex-row   flex-col-reverse">
            <div className="relative bg-opacity-80 sm:ml-96 sm:w-full sm:max-w-2xl   p-8 mt-36 italic font-sans font-semibold text-white text-lg">
              <p className="text-3xl mb-10 text-center not-italic text-green-500">
                We prioritize your safety and comfort
              </p>
              <div className="flex sm:w-auto w-full">
                <div className="flex flex-col w-full justify-center sm:justify-start">
                  <div className="flex w-full justify-between">
                    <p>
                      Enjoy seamless travel with our professional drivers.
                      Skilled and courteous, they ensure safe and comfortable
                      journeys to your desired destinations. Relax and let us
                      handle the driving.
                    </p>
                  </div>
                  <div className="mt-10 font-sans not-italic sm:ml-40 pb-10 flex flex-row space-x-4">
                    <Link
                      to="/contactus"
                      className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-white hover:text-green-500"
                    >
                      Contact us
                    </Link>
                    <BookingModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="hidden sm:block w-1/2">
            <img src={ho} alt="" className="" />
          </div> */}
        </div>
      </motion.div>
      <div className="w-full flex flex-wrap sm:grid sm:grid-cols-4 max-w-screen-2xl mx-auto  justify-center gap-10 items-center sm:items-start  sm:py-10 bg-emerald-100 bg-opacity-90 p-8 text-gray-500 font-sans rounded-t-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col"
        >
          <img
            src={driverImage}
            alt="Driver"
            className="ring-0 ring-offset-customGreen ring-offset-[5px] rounded-full object-cover h-32 w-32"
          />
          <div className="mt-10 w-52">
            <p className="text-lg font-bold">Trust</p>
            <p className="text-sm text-start">
              With our fleet of trained, verified, and trusted drivers, we make
              the drive better and safer for you and your family.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-52"
        >
          <img
            src={driverImage1}
            alt="Driver"
            className="w-32 h-32 rounded-full ring-0 ring-offset-customGreen ring-offset-[5px] object-cover"
          />
          <div className="mt-10">
            <p className="text-lg font-bold">Safety </p>
            <p className="text-s  text-start">
              Monchauffeur prioritizes safety with experienced, vetted drivers
              and well-maintained vehicles. Your security and comfort are our
              top concerns.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-52"
        >
          <img
            src={driverImage1}
            alt="Driver"
            className="w-32 h-32 rounded-full ring-0 ring-offset-customGreen ring-offset-[5px] object-cover"
          />
          <div className="mt-10">
            <p className="text-lg font-bold">Secure</p>
            <p className="text-s  text-start">
              DriveU Secure helps you insure your drives from vehicle damages
              and personal injuries, while we insure our drivers for all trips.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-52"
        >
          <img
            src={ch2}
            alt="Driver"
            className="ring-0 ring-offset-customGreen ring-offset-[5px] rounded-full object-cover h-32 w-32 sm:mb-0 sm:mr-4"
          />
          <div className="mt-10">
            <p className="text-md font-bold">Versatile</p>
            <p className="text-sm text-start">
              Book a driver for daily office commutes, mid-day shopping,
              night-outs, airport transfers, or weekend getaways with our hourly
              packages.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DriverRecruitmentForm;
