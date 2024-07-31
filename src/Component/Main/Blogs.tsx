import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import cm from "../../assets/images/com.svg";

const Blogs = () => {
  const ListOfBlogs = [
    {
      title: "Don't Drink and drive",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
    },
    {
      title: "EV Charging near you in Kigali",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
    },
    {
      title: "Burundi combats high fuel rates",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/107719/new-range-rover-exterior-left-front-three-quarter.jpeg",
    },
  ];

  return (
    <div className="bg-white sm:py-32">
      <div className="flex flex-row items-center justify-center space-x-5 mb-10">
        <div className="w-32 h-[2px] rounded-full bg-green-300"></div>
        <p className="text-2xl font-semibold text-green-500">Our Latest Blog</p>
        <div className="w-32 h-[2px] rounded-full bg-green-300"></div>
      </div>
      <div className="flex items-center flex-wrap justify-center">
        <FaArrowLeft size={30} className="text-green-500 cursor-pointer" />
        <div className="flex space-x-6 flex-wrap  mx-6 sm:my-0 my-6 ">
          {ListOfBlogs &&
            ListOfBlogs.map((blog, index) => (
              <div
                key={index}
                className="relative w-72 h-48 border-blue-950 sm:ml-0 ml-7 sm:mb-0 mb-10 border-2 rounded-lg"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t  from-blue-700 via-transparent to-transparent rounded-lg">
                  <p className="absolute bottom-4 mb-8 left-4 text-3xl text-green-500 font-bold">
                    {blog.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <FaArrowRight size={30} className="text-green-500 cursor-pointer" />
      </div>
      <div className="flex sm:flex-row flex-wrap  items-center sm:ml-44 ml-2 justify-around">
        <div className="sm:text-start mt-10 sm:mr-0 sm:ml-11  ">
          <p className="text-lg">
            We love strategic <br /> partnerships
          </p>
          <a href="#" className="text-green-500 font-semibold text-lg5">
            Partner with us
          </a>
        </div>
        <div className="flex sm:mr-72  mt-6">
          <img src={cm} alt="Logo 1" className="sm:w-30  sm:h-20 w-20 h-10" />
          <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
          <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
          <img src={cm} alt="Logo 1" className="sm:w-30 sm:h-20 w-20 h-10" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
