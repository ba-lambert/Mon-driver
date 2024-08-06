import React from "react";
import {motion} from "framer-motion";
import staffImage from "../../assets/images/4.jpg";
import p1 from "../../assets/images/ch1.jpg";
import p2 from "../../assets/images/ch2.jpg";
import p3 from "../../assets/images/ch3.jpg";
import p from "../../assets/images/p1.jpeg";
import p4 from "../../assets/images/p2.jpeg";
import p5 from "../../assets/images/p3.jpg";
import customerFocus from '../../assets/Web Assets/MonChauffeur-13.png'
import integrity from '../../assets/Web Assets/MonChauffeur-05.png'
import reliablility from '../../assets/Web Assets/MonChauffeur-07.png'
import professionalism from '../../assets/Web Assets/MonChauffeur-09.png'
import backImage from '../../assets/images/web1-04.png'
import {FaHouseCircleCheck} from "react-icons/fa6";
// import { FaRegStar } from "react-icons/fa6";

interface TeamMember {
    id: number;
    name: string;
    position: string;
    contact: string;
    email: string;
    image: string;
}

interface Testimonial {
    id: number;
    name: string;
    title: string;
    image: string;
    message: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO",
        contact: "0788091723",
        email: "john@example.com",
        image: p1,
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "Secretary",
        contact: "0788091723",
        email: "jane@example.com",
        image: p2,
    },
    {
        id: 3,
        name: "John Doe",
        position: "CEO",
        contact: "0788091723",
        email: "john@example.com",
        image: p3,
    },
    {
        id: 4,
        name: "Jane Smith",
        position: "Secretary",
        contact: "0788091723",
        email: "jane@example.com",
        image: p2,
    },
];

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alice Johnson",
        title: 'CEO-Rwanda Motors',
        image: p,
        message:
            "Fantastic service! My driver was prompt and courteous. Highly recommend!",
    },
    {
        id: 2,
        name: "Bob Smith",
        title: 'CEO-Rwanda Motors',
        image: p4,
        message: "The best driving service in Kigali. Reliable and professional.",
    },
    {
        id: 3,
        name: "Bob Smith",
        title: 'CEO-Rwanda Motors',
        image: p5,
        message: "The best driving service in Kigali. Reliable and professional.",
    },
];

const AboutUsPage: React.FC = () => {
    // const [expandedIndex, setExpandedIndex] = useState(null);

    // const handleToggle = (index: any) => {
    //     setExpandedIndex(expandedIndex === index ? null : index);
    // };
    const processes = [
        {
            title: 'Recruitment',
            description: 'We source and attract top talent.',
            Icon: <FaHouseCircleCheck/>
        },
        {
            title: 'Vetting',
            description: 'We thoroughly check backgrounds and qualifications.',
            Icon: <FaHouseCircleCheck/>
        },
        {
            title: 'Training',
            description: 'We provide comprehensive training programs.',
            Icon: <FaHouseCircleCheck/>
        },
        {
            title: 'Management',
            description: 'We ensure ongoing support and development.',
            Icon: <FaHouseCircleCheck/>
        },
    ];
    const values = [
        {
            title: 'Customer Focus',
            description: 'Prioritizing the needs and satisfaction of our clients. We are committed to understanding and exceeding client expectations, providing personalized service that caters to individual needs.',
            Icon: customerFocus
        },
        {
            title: 'Integrity',
            description: 'Conducting our business with honesty and transparency. We believe in building trust with our clients through ethical practices and open communication.',
            Icon: integrity
        },
        {
            title: 'Reliability',
            description: 'Consistently delivering dependable and punctual services. Our clients can count on us to be there when they need us, providing consistent and reliable transportation solutions.',
            Icon: reliablility
        },
        {
            title: 'Safety',
            description: 'Ensuring the safety and security of our clients, their belongings, and their vehicles at all times. We prioritize safety in all aspects of our operations, from vehicle maintenance to driver training and emergency preparedness.',
            Icon: reliablility
        },
        {
            title: 'Professionalism',
            description: 'Maintaining high standards of service and conduct. Our team of drivers and staff are trained to uphold the highest levels of professionalism, ensuring a positive and respectful experience for our clients.',
            Icon: professionalism
        }
    ];
    //  const paragraphs = [
    //    "Available 24/7 for your convenience.",
    //    "Drivers undergo rigorous vetting for reliability.",
    //    "Ensure safety and comfort during every ride.",
    //    "Prioritize the security of your belongings.",
    //    "Offer a diverse selection of skilled drivers.",
    //    "Ideal for both leisure and business needs.",
    //    "Simple booking process with just one call.",
    //    "Promise a stress-free driving experience.",
    //    "Trusted for vacations, work trips, and weekends.",
    //    "Committed to exceptional customer satisfaction.",
    //  ];
    return (
      <div className="min-h-screen max-w-screen-lg mx-auto space-y-12 text-center py-20">
        <motion.div
          className=""
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row w-full">
            <div className="flex flex-col sm:w-1/2 p-5">
              <motion.p
                className="text-customGreen font-bold text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                Overview
              </motion.p>
              <p className="mt-4 text-md text-gray-500 text-start">
                Mon Chauffeur is a premier driver services company headquartered
                in Kigali, Rwanda. Established with the goal o f availing
                proffessional drivers committed to serve in different scenarios
                in a client centric manner. Mon Chauffeur has become synonymous
                with reliability , professionalism, and unparalleled customer
                service. Our mission is to offer a comfortable, safe, and
                convenient travel experience tailored to individual needs
                whether for personal, corporate, or special event purposes
              </p>
           
            {/* <div className="paragraphs p-4 mt-10">
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className= "paragraph-container flex items-start "
                     
                 
                
                >
                  <div className="dot-line flex flex-col items-center mr-4">
                    <FaRegStar className="text-customGreen"/>
                    <div  className="dot border-spacing-x border-2 bg-customGreen  w-3 h-3 rounded-full"></div>
                    <div className="line border-x border-2 h-5 bg-black"></div>
                  </div>
                  <p className="text-customBlue ">{paragraph}</p>
                </div>
              ))}
            </div>  */}
            </div>
            <div className="flex flex-col justify-center items-center text-start sm:w-1/2 ">
              <motion.div
                className="flex flex-col p-5 w-72 overlay-background"
                style={{
                  backgroundImage: `url(${backImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="text-xl pl-6 mt-36 text-white ">
                  We not only drive people, <br/>we also drive safety and comfort in
                  your everyday life.
                </p>
                <p className="pl-3 mt-10">
                  A great company matters if the wish is a great journey, Select
                  from our diverse friendly drivers to get your great companion.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="relative p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-customGreen font-bold text-2xl mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Our Strategy
          </motion.p>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start relative">
            {processes.map((process, index) => (
              <div
                className="flex flex-col items-center justify-start relative mb-8 md:mb-0"
                // key={index}
                //  onClick={() => handleToggle(index)}
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-customGreen rounded-full mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                >
                  {process.Icon}
                </motion.div>
                {index < processes.length - 1 && (
                  <>
                    <div className="absolute top-9 left-1/2 transform -translate-y-1/2 w-64 h-0.5 bg-customGreen hidden md:block"></div>
                    <div className="absolute top-10 left-1/2 transform -translate-y-1/2 w-64 h-0.5 bg-customGreen hidden md:block"></div>
                  </>
                )}
                <motion.h3
                  className="text-md font-semibold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                >
                  {process.title}
                </motion.h3>
                {/* {expandedIndex === index && ( */}
                  <motion.div
                    className="text-gray-600 w-full pl-4 pr-4 md:pl-16 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  >
                    <p>{process.description}</p>
                  </motion.div>
                {/* )} */}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.img
          src={staffImage}
          alt="Staff"
          className="mx-auto rounded-lg shadow-md w-full h-80 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="text-center p-6 text-gray-500 italic"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          For more information, visit our social media platforms or stop by our
          office in Kisimenti. Trust MON CHAUFFEUR to drive you wherever you
          need to go with professionalism and care.
        </motion.div>
        <motion.div>
          <motion.p className="text-center text-customGreen text-2xl font-semibold">
            Our Core Values
          </motion.p>
          <motion.div
            className="p-8 flex flex-row justify-between items-start flex-wrap gap-2 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="flex w-44 text-gray-500 flex-col justify-start p-3 shadow-sm rounded-xl border-gray-500 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <h3 className="text-md font-semibold mb-2 text-customGreen">
                  {value.title}
                </h3>
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <img src={value.Icon} alt={value.title} />
                </div>
                <div>
                  <p className="text-xs">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="bg-customGreen rounded-lg shadow-md p-4 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mx-auto h-28 w-28 -mt-10 object-cover ring-4 ring-offset-2 ring-customGreen"
                />
                <h3 className="text-xl font-bold text-white mt-4 mb-2">
                  {member.name}
                </h3>
                <div className="bg-emerald-500 opacity-90 p-2 shadow-md rounded-lg text-white">
                  <p className="mb-2">{member.position}</p>
                  <p>{member.contact}</p>
                  <p>{member.email}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-customGreen">
            Our Network
          </h2>
          <p className="text-lg text-center text-gray-500">
            We are proud to collaborate with a diverse range of partners and
            stakeholders in our industry. Our network includes leading companies
            and organizations that share our commitment to excellence and
            innovation.
          </p>
        </motion.section>

        <motion.section
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-customGreen">
            Testimonials
          </h2>
          <div className="flex flex-col sm:flex-row overflow-x-scroll scrollbar-none gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="rounded-lg shadow-md p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-sm font-semibold text-customGreen mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-xs text-gray-500">
                  ,, {testimonial.message} ,,
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {testimonial.title}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    );
};

export default AboutUsPage;
