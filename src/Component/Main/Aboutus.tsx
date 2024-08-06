 import React, { useState } from "react";
 import { motion } from "framer-motion";
 import p1 from "../../assets/images/ch1.jpg";
 import p2 from "../../assets/images/ch2.jpg";
 import p3 from "../../assets/images/ch3.jpg";
 import p from "../../assets/images/p1.jpeg";
 import p4 from "../../assets/images/p2.jpeg";
 import p5 from "../../assets/images/p3.jpg";
 import customerFocus from "../../assets/Web Assets/MonChauffeur-13.png";
 import integrity from "../../assets/Web Assets/MonChauffeur-05.png";
 import reliablility from "../../assets/Web Assets/MonChauffeur-07.png";
 import professionalism from "../../assets/Web Assets/MonChauffeur-09.png";
 import backImage from "../../assets/images/web1-04.png";
 import { FaHouseCircleCheck } from "react-icons/fa6";

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
     title: "CEO-Rwanda Motors",
     image: p,
     message:
       "Fantastic service! My driver was prompt and courteous. Highly recommend!",
   },
   {
     id: 2,
     name: "Bob Smith",
     title: "CEO-Rwanda Motors",
     image: p4,
     message: "The best driving service in Kigali. Reliable and professional.",
   },
   {
     id: 3,
     name: "Bob Smith",
     title: "CEO-Rwanda Motors",
     image: p5,
     message: "The best driving service in Kigali. Reliable and professional.",
   },
 ];

 const AboutUsPage: React.FC = () => {
   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

   const handleToggle = (index: number) => {
     setExpandedIndex(expandedIndex === index ? null : index);
   };

   const processes = [
     {
       title: "Recruitment",
       description: "We source and attract top talent.",
       Icon: <FaHouseCircleCheck />,
     },
     {
       title: "Vetting",
       description: "We thoroughly check backgrounds and qualifications.",
       Icon: <FaHouseCircleCheck />,
     },
     {
       title: "Training",
       description: "We provide comprehensive training programs.",
       Icon: <FaHouseCircleCheck />,
     },
     {
       title: "Management",
       description: "We ensure ongoing support and development.",
       Icon: <FaHouseCircleCheck />,
     },
   ];

   const values = [
     {
       title: "Customer Focus",
       description:
         "Prioritizing the needs and satisfaction of our clients. We are committed to understanding and exceeding client expectations, providing personalized service that caters to individual needs.",
       Icon: customerFocus,
     },
     {
       title: "Integrity",
       description:
         "Conducting our business with honesty and transparency. We believe in building trust with our clients through ethical practices and open communication.",
       Icon: integrity,
     },
     {
       title: "Reliability",
       description:
         "Consistently delivering dependable and punctual services. Our clients can count on us to be there when they need us, providing consistent and reliable transportation solutions.",
       Icon: reliablility,
     },
     {
       title: "Safety",
       description:
         "Ensuring the safety and security of our clients, their belongings, and their vehicles at all times. We prioritize safety in all aspects of our operations, from vehicle maintenance to driver training and emergency preparedness.",
       Icon: reliablility,
     },
     {
       title: "Professionalism",
       description:
         "Maintaining high standards of service and conduct. Our team of drivers and staff are trained to uphold the highest levels of professionalism, ensuring a positive and respectful experience for our clients.",
       Icon: professionalism,
     },
   ];

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
               in Kigali, Rwanda. Established with the goal of availing
               professional drivers committed to serving in different scenarios
               in a client-centric manner. Mon Chauffeur has become synonymous
               with reliability, professionalism, and unparalleled customer
               service. Our mission is to offer a comfortable, safe, and
               convenient travel experience tailored to individual needs whether
               for personal, corporate, or special event purposes.
             </p>
           </div>
           <div className="flex flex-col justify-center items-center text-start sm:w-1/2">
             <motion.div
               className="flex flex-col p-5 w-72 overlay-background"
               style={{
                 backgroundImage: `url(${backImage})`,
                 backgroundSize: "cover",
                 backgroundPosition: "center",
               }}
             >
               <p className="text-xl pl-6 mt-36 text-white">
                 We not only drive people, <br /> we also drive safety and
                 comfort in your everyday life.
               </p>
               <p className="pl-3 mt-10">
                 A great company matters if the wish is a great journey. Select
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
               key={index}
               className="flex flex-col items-center justify-start relative mb-8 md:mb-0 cursor-pointer"
               onClick={() => handleToggle(index)}
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
               {expandedIndex === index && (
                 <motion.div
                   className="text-gray-600 w-full pl-4 pr-4 md:pl-16 text-sm"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ duration: 1, delay: index * 0.3 }}
                 >
                   <p>{process.description}</p>
                 </motion.div>
               )}
             </div>
           ))}
         </div>
       </motion.div>

       <motion.div
         className="relative py-8"
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
           Our Values
         </motion.p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {values.map((value, index) => (
             <motion.div
               key={index}
               className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: index * 0.3 }}
             >
               <img
                 src={value.Icon}
                 alt={value.title}
                 className="w-12 h-12 mb-4"
               />
               <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
               <p className="text-gray-600 text-center">{value.description}</p>
             </motion.div>
           ))}
         </div>
       </motion.div>

       <motion.div
         className="relative py-8"
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
           Meet Our Team
         </motion.p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {teamMembers.map((member) => (
             <div
               key={member.id}
               className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
             >
               <img
                 src={member.image}
                 alt={member.name}
                 className="w-24 h-24 rounded-full mb-4"
               />
               <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
               <p className="text-md font-medium mb-1">{member.position}</p>
               <p className="text-gray-600 mb-1">{member.contact}</p>
               <p className="text-gray-600">{member.email}</p>
             </div>
           ))}
         </div>
       </motion.div>

       <motion.div
         className="relative py-8"
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
           Testimonials
         </motion.p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {testimonials.map((testimonial) => (
             <div
               key={testimonial.id}
               className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
             >
               <img
                 src={testimonial.image}
                 alt={testimonial.name}
                 className="w-24 h-24 rounded-full mb-4"
               />
               <h4 className="text-lg font-semibold mb-2">
                 {testimonial.name}
               </h4>
               <p className="text-md font-medium mb-2">{testimonial.title}</p>
               <p className="text-gray-600 text-center">
                 {testimonial.message}
               </p>
             </div>
           ))}
         </div>
       </motion.div>
     </div>
   );
 };

 export default AboutUsPage;
