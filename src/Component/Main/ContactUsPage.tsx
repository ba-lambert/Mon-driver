 import React, { useState, useEffect } from "react";
 import p1 from "../../assets/images/p1.jpeg";
 import p2 from "../../assets/images/p2.jpeg";
 import p3 from "../../assets/images/p3.jpg";
 import cr1 from "../../assets/images/caru2.png";

 interface ContactPerson {
   id: number;
   name: string;
   position: string;
   image: string;
   description: string;
   contact: string;
   email: string;
 }

 const contactPersons: ContactPerson[] = [
   {
     id: 1,
     name: "John Doe",
     position: "CEO",
     contact: "0788091723",
     email: "jhon@gmail.com",
     image: p1,
     description: "John is the CEO of our company.",
   },
   {
     id: 2,
     name: "Jane Smith",
     position: "Secretary",
     contact: "0788091723",
     email: "jhon@gmail.com",
     image: p2,
     description: "Jane is the secretary of our company.",
   },
   {
     id: 3,
     name: "Emily Johnson",
     position: "Communication Officer",
     contact: "0788091723",
     email: "jhon@gmail.com",
     image: p3,
     description: "Emily is in charge of communication.",
   },
 ];

 const ContactUsPage: React.FC = () => {
   const [formData, setFormData] = useState({
     email: "",
     name: "",
     contact: "",
     message: "",
   });

   const [errors, setErrors] = useState({
     email: "",
     name: "",
     contact: "",
     message: "",
   });

   const [activeIndex, setActiveIndex] = useState(0);

   const handleChange = (
     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     const { name, value } = e.target;
     setFormData({
       ...formData,
       [name]: value,
     });
   };

   const validate = () => {
     let tempErrors = {
       email: "",
       name: "",
       contact: "",
       message: "",
     };
     let isValid = true;

     if (!formData.email) {
       tempErrors.email = "Email is required";
       isValid = false;
     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
       tempErrors.email = "Email address is invalid";
       isValid = false;
     }

     if (!formData.name) {
       tempErrors.name = "Name is required";
       isValid = false;
     }

     if (!formData.contact) {
       tempErrors.contact = "Contact number is required";
       isValid = false;
     } else if (!/^\d{10}$/.test(formData.contact)) {
       tempErrors.contact = "Contact number must be 10 digits";
       isValid = false;
     }

     if (!formData.message) {
       tempErrors.message = "Message is required";
       isValid = false;
     }

     setErrors(tempErrors);
     return isValid;
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     if (validate()) {
       console.log(formData);
     }
   };

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % paragraphs.length);
     }, 2000);

     return () => clearInterval(interval);
   }, []);

   const paragraphs = [
     "Available 24/7 for your convenience.",
     "Drivers undergo rigorous vetting for reliability.",
     "Ensure safety and comfort during every ride.",
     "Prioritize the security of your belongings.",
     "Offer a diverse selection of skilled drivers.",
     "Ideal for both leisure and business needs.",
     "Simple booking process with just one call.",
     "Promise a stress-free driving experience.",
     "Trusted for vacations, work trips, and weekends.",
     "Committed to exceptional customer satisfaction.",
   ];

   return (
     <div className="min-h-screen bg-customGreen bg-opacity-80 p-6 mt-0 mb-10 bg-cover bg-center">
       <section className="bg-white rounded-md py-3 mb-3 ">
         <div className="max-w-7xl mx-auto px-4 items-center rounded-md sm:px-6 lg:px-8">
           <h2 className="text-3xl   ml-96 font-extrabold text-customGreen">
             Contact Us
           </h2>
           <p className="mt-4 text-lg ml-3 text-gray-600 font-sans">
             We'd love to hear from you! Whether you have a question, feedback,
             or need assistance, our team is here to help.
           </p>
         </div>
       </section>
       <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mb-12">
         {contactPersons.map((person) => (
           <div key={person.id} className="bg-customBlue rounded-lg shadow-md">
             <img
               src={person.image}
               alt={person.name}
               className="rounded-full mx-auto rounded-tr-lg   relative ml-40 mt-2 ring-0 ring-offset-customBlue ring-offset-[5px] object-cover h-20 w-20"
             />
             <img
               src={""}
               alt={""}
               className="rounded-full mx-auto relative bg-customGreen ml-60 mb-3  ring-0 ring-offset-customBlue ring-offset-[5px] object-cover h-3 w-3"
             />

             <h3 className="text-xl font-bold text-center text-customGreen mb-2">
               {person.name}
             </h3>
             <div className="bg-blue-700 opacity-50 p-1   shadow-md rounded-lg m-3">
               <p className="text-center text-white mb-2">{person.position}</p>
               <p className="text-center text-white">{person.contact}</p>
               <p className="text-center text-white">{person.email}</p>
               <p className="text-center text-white mb-4">
                 {person.description}
               </p>
             </div>
           </div>
         ))}
       </div>
       <div className="flex sm:flex-row flex-col  h-full p-6">
         <div className="w-full lg:w-96">
           <div className="bg-customGreen mt-5 text-sm rounded-3xl relative">
             <h2 className="text-green-400 text-3xl pl-16 pt-6 font-bold">
               WHY US
             </h2>
             <div className="paragraphs  pl-1 mt-5">
               {paragraphs.map((paragraph, index) => (
                 <div
                   key={index}
                   className={`paragraph-container flex items-start ${
                     index === activeIndex ? "" : "visible"
                   }`}
                   style={{
                     opacity: index === activeIndex ? "" : "",
                     transition: "opacity",
                   }}
                 >
                   <div className="dot-line flex flex-col items-center mr-4">
                     <div className="dot border-spacing-x border-2 bg-customGreen w-3 h-3 rounded-full"></div>
                     <div className="line border-x border-2 h-5 "></div>
                   </div>
                   <p className="text-green-200">{paragraph}</p>
                 </div>
               ))}
             </div>
             <p className="w-full ml-8 font-bold  mt-16  absolute text-3xl sm:text-2xl text-green-500">
               GERAYO AMAHORO
             </p>
             <img
               src={cr1}
               className="relative rounded-b-3xl transform scale-105"
               alt="dr"
             />
           </div>
         </div>
         <div className="mt-32 flex-col">
           <div className="flex  sm:justify-end  ">
             <div className=" w-3/4 mr-20  mb-6 text-white text-md font-semibold ">
               If you have any questions, comments, or concerns, please use the form below to get in touch with us. We value your feedback and
               will get back to you as soon as possible.
             </div>
           </div>
           
           <form
             onSubmit={handleSubmit}
             className="bg-customBlue bg-opacity-70 p-6 sm:ml-56 rounded-lg shadow-md sm:max-w-xl sm:w-full"
           >
             <h2 className="text-2xl font-bold text-customGreen mb-4">
               Send a Message
             </h2>
             <div className="flex sm:flex-row flex-col">
               <div className="mb-4 sm:mr-10">
                 <input
                   placeholder="Email"
                   name="email"
                   type="email"
                   value={formData.email}
                   onChange={handleChange}
                   className=" p-2 w-full rounded"
                 />
                 {errors.email && (
                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                 )}
               </div>
               <div className="mb-4">
                 <input
                   placeholder="Contact Number"
                   name="contact"
                   value={formData.contact}
                   onChange={handleChange}
                   className=" p-2 w-full rounded"
                 />
                 {errors.contact && (
                   <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                 )}
               </div>
             </div>
             <div className="mb-4">
               <input
                 placeholder="Name"
                 name="name"
                 value={formData.name}
                 onChange={handleChange}
                 className=" p-2 sm:w-[440px] w-64 rounded"
               />
               {errors.name && (
                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
               )}
             </div>
             <div className="mb-4">
               <label className="block text-customGreen">Message</label>
               <textarea
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                 className=" p-2 w-full rounded"
               />
               {errors.message && (
                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
               )}
             </div>
             <button
               type="submit"
               className="bg-customGreen text-white py-2 px-4 rounded"
             >
               Send Message
             </button>
           </form>
         </div>
       </div>
     </div>
   );
 };

 export default ContactUsPage;
