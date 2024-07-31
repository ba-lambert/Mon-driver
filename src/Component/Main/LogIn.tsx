 import React from "react";
 import { useForm, SubmitHandler } from "react-hook-form";
 import { Link } from "react-router-dom";
 import bg from "../../assets/images/BACKGROUND IMAGE 2-01.png";
 import log from "../../assets/images/log.png";  
 import { TfiEmail } from "react-icons/tfi";
 import { TbPasswordUser } from "react-icons/tb";

 interface LoginFormInputs {
   email: string;
   password: string;
   rememberMe: boolean;
 }

 const LoginPage: React.FC = () => {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm<LoginFormInputs>();

   const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
     console.log(data);
     // Handle login logic here
   };

   return (
     <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
       <div
         className="absolute inset-0 bg-cover bg-center"
         style={{
           backgroundImage: `url(${bg})`, // Correctly reference the imported image
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       ></div>
       <div className="relative flex bg-customBlue bg-opacity-50 p-8 border border-blue-600 rounded-lg shadow-lg mb-10  z-10">
         <div className=" flex items-center justify-center ">
           <img src={log} alt="Logo" className="w-3/4 rounded-sm" />
         </div>
         <div className="w-96">
           <h1 className="text-2xl font-bold mb-6 text-white">Login</h1>
           <form onSubmit={handleSubmit(onSubmit)} className="">
             <div className="mb-4 flex">
               <div className="text-white w-12 h-9 mt-2 bg-white bg-opacity-90 text-sm">
                 <TfiEmail className="mt-3 ml-4 text-customBlue " />
               </div>
               <div className="w-96">
                 <input
                   type="email"
                   id="email"
                   placeholder="Email"
                   className=" block w-full px-2 py-2 mt-2  bg-white text-white bg-opacity-40 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                   {...register("email", { required: "Email is required" })}
                 />
                 {errors.email && (
                   <p className="text-red-500 text-xs mt-1">
                     {errors.email.message}
                   </p>
                 )}
               </div>
             </div>
             <div className="mb-4 flex">
               <div className="bg-white w-12 h-10 mt-1 bg-opacity-90 text-customBlue">
                 <TbPasswordUser className=" mt-3 ml-4" />
               </div>
               <input
                 type="password"
                 id="password"
                 placeholder="Password"
                 className="mt-1 block w-full px-2 py-2 bg-white text-white bg-opacity-40 rounded-r-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                 {...register("password", { required: "Password is required" })}
               />
               {errors.password && (
                 <p className="text-red-500 text-xs mt-1">
                   {errors.password.message}
                 </p>
               )}
             </div>
             <div className="flex items-center justify-between mb-6">
               <div className="flex items-center">
                 <input
                   type="checkbox"
                   id="remember-me"
                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                   {...register("rememberMe")}
                 />
                 <label
                   htmlFor="remember-me"
                   className="ml-2 block text-sm text-customGreen"
                 >
                   Remember Me
                 </label>
               </div>
               <button type="button" className="text-sm text-white">
                 Forgot Password?
               </button>
             </div>
             <button
               type="submit"
               className="w-full py-2 px-4 bg-sky-800 text-white font-bold rounded-md shadow-sm  "
             >
               Login
             </button>
           </form>
           <div className="mt-6 text-center">
             <p className="text-sm text-white">
               If you are not already signed up,{" "}
               <Link to="/RegisterForm" className="text-customGreen font-bold">
                 sign up now
               </Link>
               .
             </p>
           </div>
         </div>
       </div>
     </div>
   );
 };

 export default LoginPage;
